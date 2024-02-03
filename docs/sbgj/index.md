---
sidebar: false
editLink: false
lastUpdated: false
---

<script setup>
import UserDictMigrator from '../../components/UserDictMigrator.vue'
</script>

# 声笔工具

## 声笔输入法 9.x 用户词典迁移工具

声笔输入法 10.0 采用的用户词典格式与 9.x 有所不同，为了能够在 10.0 的方案中继续使用您所积累的调频和造词记录，您需要使用本工具转换格式。

1. 在您的声笔定制 Rime 输入法前端运行「同步」命令，并在同步文件夹中找到您方案的用户词典快照文件。例如，如果您使用声笔简码，则对应的文件名为 `sbjm.userdb.txt`；

2. 点击或拖拽上传，待转换完成后，点击下载；

<UserDictMigrator />

3. 安装官方的 Rime 输入法前端和声笔 10.0 方案文件，把转换完成的文件放置在同步文件夹，然后再次运行「同步」命令，即可完成迁移。
