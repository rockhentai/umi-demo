## Environment Prepare

Install `node_modules`:

```bash
npm install
```

or

```bash
yarn
```

### Start project

```bash
npm start
```

### Build project

```bash
npm run build
```

导出多页面

```javascript
// config.js
exportStatic: {
  htmlSuffix: true,
},
```

### Check code style

```bash
npm run lint
```

### Deploy project

+ 更新版本号

根据实际版本情况选择更新patch/minor/major版本，以minor示例

```bash
npm version minor 
```

+ 配置阿里云oss

[umi-plugin-oss文档](https://github.com/imhele/umi-plugin-oss)

在打包之前注意将你的oss信息配置正确

```javascript
// config/config.oss.js
export default {
  plugins: [
    ...plugins,
    ['umi-plugin-oss', {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      acl: 'public-read',
      bucket: {
        name: 'lilith-xx-cn',
        endpoint: 'oss-cn-shanghai.aliyuncs.com',
      },
      prefix: `static/${pkg.version}/`,
    }]
  ]
}
```

prefix为相对应的项目版本号

+ 打包并上传静态资源

```bash
npm run build:oss
```


### 记录Change record

+ 安装工具

> conventional-changelog-cli可以根据git元数据生成更新日志

```bash
npm install -g conventional-changelog-cli
```

> commitizen可以规范你的git commit信息，conventional-changelog-cli从而可以生成更清晰的日志

```bash
npm install -g commitizen
```

+ 初始化

项目根目录下生成**CHANGELOG.md**

```bash
conventional-changelog -p angular -i CHANGELOG.md -s
```

```bash
commitizen init cz-conventional-changelog --save --save-exact
```

运行成功后，package.json会新增如下内容:

```javascript
"devDependencies": {
  "cz-conventional-changelog": "^3.1.0"
},
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```

+ 提交commit

完成以上操作后，git commit 便可以通过 git cz 代替，通过交互式命令完成commit操作

```bash
// 工作区
git add .
git cz

cz-cli@4.0.3, cz-conventional-changelog@3.1.0

? Select the type of change that youre committing: feat:     A new feature
? What is the scope of this change (e.g. component or file name): (press enter to skip) 
? Write a short, imperative tense description of the change (max 94 chars):
 (10) 你的commit信息
? Provide a longer description of the change: (press enter to skip)
 
? Are there any breaking changes? No
? Does this change affect any open issues? No
```

+ 记录版本号，更新CHANGELOG

结合npm version和conventional-changelog使用，可以同时更新CHANGELOG.md

准备好脚本

```javascript
// package.json
"scripts": {
  "version": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",
}
```

```bash
npm version patch -m "xxx"
```

执行这条命令会更新package.json中的version字段

同时会执行conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md，更新CHANGELOG.md

执行完这条命令后，可以看到CHANGELOG.md已经被修改了

![change log](https://lilithimage.oss-cn-shanghai.aliyuncs.com/system/git/change_log.png)