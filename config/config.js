import plugins from './plugins';

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        { path: '/', component: '../pages/home' }
      ]
    }
  ],
  plugins,
}
