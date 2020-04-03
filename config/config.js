import plugins from './plugins';

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  exportStatic: {
    htmlSuffix: true,
  },
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        { path: '/', component: '../pages/home' },
        { path: '/404', component: '../pages/exception/404' }
      ]
    }
  ],
  plugins,
}
