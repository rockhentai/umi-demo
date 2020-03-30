import pkg from '../package.json';
import plugins from './plugins';

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