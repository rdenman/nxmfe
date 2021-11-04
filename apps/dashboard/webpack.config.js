const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  return {
    ...config,
    output: {
      uniqueName: 'dashboard',
      publicPath: 'auto',
    },
    optimization: {
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'dashboard',
        filename: 'remoteEntry.js',
        shared: dependencies,
        exposes: {
          './DashboardApp': 'apps/dashboard/src/bootstrap',
        },
      }),
    ],
  };
};
