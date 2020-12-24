const path = require('path');

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, '../src'), 'node_modules'],
      alias: {
        'happy-ui/lib': path.resolve(__dirname, '../src/components/'),
        '@components': path.resolve(__dirname, '../components/'),
        'happy-ui/esm': path.resolve(__dirname, '../src/components/'),
        'happy-ui': path.resolve(__dirname, '../src/components/'),
      },
    },
  });
};