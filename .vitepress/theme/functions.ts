export type Post = {
    frontMatter: {
        date: string
        title: string
        category: string
        tags: string[]
        description: string
    }
    text: string
    link: string
}

export function initTags(
    theme: any) {
    const post = getPostFromTheme(theme)

    const data: Record<string, Post[]> = {}
    for (let index = 0; index < post.length; index++) {
        const element = post[index]
        let tags = element.frontMatter.tags
        if (tags) {
            console.log(tags)
            if (typeof tags === "string") {
                tags = [tags]
            }
            tags.forEach((item) => {
                if (data[item]) {
                    data[item].push(element)
                } else {
                    data[item] = []
                    data[item].push(element)
                }
            })
        }
    }
    return data
}

export function initCategory(theme: any) {
    const post = getPostFromTheme(theme)
    const data: Record<string, Post[]> = {}
    for (let index = 0; index < post.length; index++) {
        const element = post[index]
        const category = element.frontMatter.category
        if (category) {
            if (data[category]) {
                data[category].push(element)
            } else {
                data[category] = []
                data[category].push(element)
            }
        }
    }
    return data
}

export function useYearSort(theme: any) {
    const post = getPostFromTheme(theme)

    const data: Post[][] = []
    let year = "0"
    let num = -1
    for (let index = 0; index < post.length; index++) {
        const element = post[index]
        if (element.frontMatter.date) {
            const y = element.frontMatter.date.split("-")[0]
            if (y === year) {
                data[num].push(element)
            } else {
                num++
                data[num] = [] as any
                data[num].push(element)
                year = y
            }
        }
    }
    return data
}

function getPostFromTheme(theme: any): Post[] {
    return theme.sidebar['/posts/'][0].items
}
