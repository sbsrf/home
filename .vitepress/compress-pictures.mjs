import { globbySync } from "globby"
import sharp from "sharp"
import fs from "fs"
import path from "path"

function scanAndCompress(distPath) {
  // 压缩图片

  const picturePath = path.join(distPath, "images")
  const files = globbySync(["**/*.{png,jpg}"], { cwd: picturePath })
  for (const file of files) {
    const filePath = path.join(picturePath, file)
    const webpPath = filePath.replace(/\.png$|\.jpg$/, ".webp")
    compressPicture(filePath, webpPath)
  }
  console.log(`compress ${files.length} pictures in ${picturePath}`)

  // 处理图片路径

  const allPictureNameRegex = new RegExp(
    files.map((f) => encodeURI(f).replaceAll(".", "\\.").replaceAll("-", "\\-")).join("|"),
    "g"
  )
  const htmlFiles = globbySync(["**/*.{html,js}"], { cwd: distPath, absolute: true })

  var c = 0
  for (const file of htmlFiles) {
    /** @type {string} */
    const content = fs.readFileSync(file, "utf-8")
    const newContent = content.replace(allPictureNameRegex, (match) => {
      c++
      return match.replace(/\.png$|\.jpg$/, ".webp")
    })
    fs.writeFileSync(file, newContent, "utf-8")
  }
  console.log(`replace ${c} picture paths in ${htmlFiles.length} html/js files`)
}

function compressPicture(filePath, webpPath) {
  sharp(filePath)
    .webp({ quality: 80 })
    .toFile(webpPath, (err) => {
      if (err) {
        console.log(`compress ${filePath} failed: ${err}`)
      } else {
        console.log(`compress ${filePath} success`)
      }
    })
}

scanAndCompress("./.vitepress/dist")
