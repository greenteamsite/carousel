import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config';

const bundler = webpack(config);

browserSync({
  port: 3000,
  ui: {
    port: 3001,
  },
  server: {
    baseDir: 'src',

    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: config.output.publicPath,
        stats: { colors: true },
        noInfo: true,
      }),

      webpackHotMiddleware(bundler),
      historyApiFallback(),
    ],
  },

  files: [
    'src/*.html',
  ],
});
