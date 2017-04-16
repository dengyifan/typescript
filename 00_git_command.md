#### 创建一个新的库  
```
echo "# learn" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/dengyifan/learn.git
git push -u origin master
```

#### 更新到远程库
```
git remote add origin https://github.com/dengyifan/learn.git
git push -u origin master
```

#### 实际操作
```
[yifan@localhost 01_typescript]$ ls -l
总用量 4
-rw-rw-r--. 1 yifan yifan 329 4月  16 18:35 00_git_command.md
-rw-rw-r--. 1 yifan yifan   0 4月  16 18:17 01_安装nodejs.md

[yifan@localhost 01_typescript]$ git add 00_git_command.md

[yifan@localhost 01_typescript]$ git commit -m 'git command'
[master 2a2eb3e] git command
 1 file changed, 16 insertions(+)
 create mode 100644 00_git_command.md

[yifan@localhost 01_typescript]$ git pull origin master
来自 https://github.com/dengyifan/typescript
 * branch            master     -> FETCH_HEAD
Already up-to-date.

[yifan@localhost 01_typescript]$ git push -u origin master
Username for 'https://github.com': dengyifan
Password for 'https://dengyifan@github.com': 
Counting objects: 4, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 477 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/dengyifan/typescript.git
   d8ef6e5..2a2eb3e  master -> master
分支 master 设置为跟踪来自 origin 的远程分支 master。
[yifan@localhost 01_typescript]$ 

```

