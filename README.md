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

### Check code style

```bash
npm run lint
```

### Deploy project

+ 更新版本号

根据实际版本情况选择更新patch/minor/major版本，以patch示例

```bash
npm version patch -m '特性版本更新'
```

+ 配置阿里云oss

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

+ 打包并上传静态资源

```bash
npm run build:oss
```
