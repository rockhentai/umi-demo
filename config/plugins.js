export default [
  ['umi-plugin-react', {
    antd: true,
    dva: true,
    dynamicImport: { webpackChunkName: true },
    title: 'Alstar-react',
    dll: true,
    links: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,300,700,800'
      }
    ],
    locale: {
      enable: true,
      default: 'en-US',
    },
    routes: {
      exclude: [
        /models\//,
        /services\//,
        /model\.(t|j)sx?$/,
        /service\.(t|j)sx?$/,
        /components\//,
      ],
    },
  }],
]