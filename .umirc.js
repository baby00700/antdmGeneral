import routesList from './src/router'

const {routes} = routesList
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: {
        immer: true, //default:false
        dynamicImport: {
          webpackChunkName: true,
          loadingComponent: './components/Loading.js', // 配置动态加载model
          hmr: true
        }
      },
      dynamicImport: {  // 配置动态加载
        webpackChunkName: true,
        loadingComponent: './components/Loading.js',
        level: 1
      },
      title: 'app',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes,
      esLint: true,
    }],
  ],
  proxy: {
    "/api/v1/weather": {
      "target": "https://api.seniverse.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api/v1/weather": "/v3/weather" }
    },
    "/api/v2": {
      "target": "http://192.168.0.110",
      "changeOrigin": true,
      "pathRewrite": { "^/api/v2" : "/api/v2" }
    }
  },
}
