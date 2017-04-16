### 下载最新版本 nodejs
```
wget https://nodejs.org/dist/v6.10.2/node-v6.10.2-linux-x64.tar.xz
```

### 解压到安装目录
```
tar xvf node-v7.9.0-linux-x64.tar.xz 

```

### 设置环境变量
```
//备份
cp /etc/profile /etc/profile_bak_170416

vim /etc/profile

//添加如下内容
PATH=$PATH:/home/yifan/download/node-v7.9.0-linux-x64/bin
export PATH

//将其生效
source /etc/profile


//另外参照上面修改 ~/.bash_profile 
```

### nodejs 安装成功后，安装typescript
```
npm install -g typescript
```
