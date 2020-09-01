const path = require('path')

let proxyObject = {
    target: 'http://103.44.144.35:12145/',
    ws: true,
    changeOrigin: true,
    // pathRewrite: {
    // 	'*': '/showData'
    // }
}

if (process.env.NODE_ENV === 'production') {
    module.exports = {
        publicPath: './',
        outputDir: 'dist',
        assetsDir: 'static',
        indexPath: 'index.html',
    }
} else {
    module.exports = {
        lintOnSave: false,
        devServer: {
            proxy: {
                '^/': proxyObject,
            }
        },
    }
}

// scss变量全局引用问题
// let css = {
// 	loaderOptions: {
// 		scss: {
// 			prependData: `@import "./src/main.scss";`
// 		}
// 	}
// };

