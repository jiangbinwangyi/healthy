# Luckycreatefront 项目文档

> 幸运盒子（砸金蛋、福袋、华丽宝箱）

## 项目基于
```
Vue 2.0           https://cn.vuejs.org/
Vuetify 1.5.11    https://vuetifyjs.com/zh-Hans/
node-sass 4.11.0  https://www.sass.hk/
```

## 项目安装命令
```
npm install
```

### 开发模式编译运行及热加载命令
```
npm run serve
```

### 生产模式编译及压缩命令
```
npm run build
```

### 打包文件上传至服务器
```
1.去Azure官网下载Azure Storage Explorer
下载页面：https://azure.microsoft.com/en-us/features/storage-explorer/
2.安装，并登录相应账号。
3.按照下图找到$web目录，将打包好的dist文件夹内容拖拽此窗口，上传即可
```

## 项目语言
```
项目支持中文简体与中文繁体语言，默认为中文简体。
中文繁体图片需要添加 -tw 后缀。
```

## 模式配置域
```
.config.js文件可配置对应模式api域。
默认使用线上生产模式api域。
```

## 项目版本管理
### 1.新建后，下载该项目
```
git clone https://github.com/[YourGit]/luckycreatefront
```

### 2.将项目源码拷贝至该目录，并添加文件
```
cd luckycreatefront
Azure Storage Explorer
git add .
```

### 3.提交到本地版本库
```
git commit -m ""
```

### 4.上传本地版本
```
git push
```

### 5.下载线上库版本
```
git pull
```

## 目录结构
```
├── dist // Vue build 后的文件夹
│   ├── audio //打包后的音频文件
│   ├── css //打包后的样式文件
│   ├── fonts //打包后的字体文件
│   ├── images //打包后的图片文件
│   ├── img //打包后的图片文件
│   ├── js //打包后的js文件
│   ├── media //打包后的媒体文件
│   ├── error.html //错误后重新跳转页面
│   ├── favicon.ico // ico图标
│   └── index.html // 首页模板
├── public // 首页入口文件
│   ├── favicon.ico // ico图标
│   └── index.html // 首页模板
├── src // vue-cli 源码文件
│   ├── api // api接口存放
│   │      ├── account.js //身份验证接口
│   │      ├── bag.js //福袋接口
│   │      ├── common.js //公共接口
│   │      ├── egg.js //砸金蛋接口
│   │      ├── lobby.js //游戏大厅接口
│   │      └── mary.js //华丽宝箱接口
│   ├── assets // 相关静态资源存放
│   ├── components // 组件
│   │      ├── Authorization //登录注册组件
│   │      ├── Bag //福袋组件
│   │      ├── Common //公共组件
│   │      ├── Egg //砸金蛋组件
│   │      ├── Lobby //游戏大厅组件
│   │      └── Mary //华丽宝箱组件
│   ├── plugins // 插件库
│   │      ├── language //语言插件
│   │      └── vuetify.js //框架插件库
│   ├── store // vuex文件
│   │      ├── account.js //身份验证方法库
│   │      ├── bag.js //福袋方法库
│   │      ├── common.js //公共方法库
│   │      ├── egg.js //砸金蛋方法库
│   │      ├── index.js //方法库入口
│   │      ├── lobby.js //游戏大厅方法库
│   │      └── mary.js //华丽宝箱方法库
│   ├── views // 视图模板
│   │      ├── EggScene.vue //砸金蛋视图
│   │      ├── FortuneBag.vue //福袋视图
│   │      ├── Lobby.vue //大厅视图
│   │      └── mary.vue //华丽宝箱视图
│   ├── .config.js // 接口域配置文件
│   ├── App.vue // 主文件
│   ├── main.js // 引入Vue等资源、挂载Vue的入口js
│   └── routes.js // 前端路由
├── .gitignore // Git之忽略文件
├── babel.config.js  // babel配置文件
├── package.json // npm的依赖、项目信息文件
├── package-lock.json // npm安装包锁定文件（想更新包时要删除它）
├── README.md	//说明文档
├── vue.config.js // vue配置文件
```
