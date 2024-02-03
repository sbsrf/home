---
title: 关于Git的一些技巧
date: 2019-07-05 16:21:04
tags:
- Git
- Github
- 技巧
categories:
- Git
- 技巧
---

## 使用子模块

在Git官网上，有针对子模块的专门说明，详见[Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)。

### 添加子模块

比如，添加一个子模块DbConnector：

``` bash
$ git submodule add https://github.com/chaconinc/DbConnector
```

<!--more-->

### 克隆带子模块的仓库

``` bash
$ git clone https://github.com/chaconinc/MainProject
$ git submodule init
$ git submodule update
```

以上三个命令也可以用下面引命令代替：

``` bash
$ git clone --recursive https://github.com/chaconinc/MainProject
```

### 删除子模块

采用以下三个步骤：详见[Stack Overflow](https://stackoverflow.com/questions/1260748/how-do-i-remove-a-submodule)。

``` bash
$ git submodule deinit -f -- a/submodule
$ rm -rf .git/modules/a/submodule
$ git rm -f a/submodule
```

## 使用多个账号

github在8月13日更新以后，原先的ssh认证和https认证都失败了，只能添加token认证。具体参见[git添加token认证](https://www.cnblogs.com/yorkiiz/p/15154904.html)。但是，我是在2024年1月20日才开始遇到此问题，姑且信以为真吧。

--------以下方法已经失效--------

如何在同一台计算机上使用多个Github账号？要点如下，详细方法见[Stack Overflow](https://stackoverflow.com/questions/3860112/multiple-github-accounts-on-the-same-computer)。

步骤一：为first和second两个账号生成两个RSA密钥，名字分别为git_first和git_second。当然，这里的名字只是举例，你的名字肯定不一样。如果要用更多的账号，就需生成更多的密钥。

``` bash
$ ssh-keygen -t rsa -C "email-address1" # name it git_first when prompted
$ ssh-keygen -t rsa -C "email-address2" # name it git_second when prompted
```

生成密钥后，将公钥里的内容，在对应的Github账号中设置好。

步骤二：创建config文件

``` bash
$ cd ~/.ssh
$ touch config
$ vim config
```

config文件的内容如下。其中，第一个确定了默认的Host，后面的必须另外命名。

```
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/git_first
Host git_second
  HostName github.com
  User git
  IdentityFile ~/.ssh/git_second
```

步骤三、Github仓库repo1和repo2设置要使用的密钥。注意，@之后跟随的Host名称就是上面的config中设置的。

``` bash
$ git remote add origin git@github.com:first/repo1.git
$ git remote add origin git@git_second:second/repo2.git
```

## 同步上游仓库的更新

```bash
$ cd your/repo
$ git remote add upstream http://github.com/your-account/upstream-repo.git
$ git fetch upstream
$ git pull origin master
```
