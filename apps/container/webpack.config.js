const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  return {
    ...config,
    output: {
      uniqueName: 'container',
      publicPath: 'auto',
    },
    optimization: {
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'container',
        shared: dependencies,
        remotes: {
          marketing: 'marketing@http://localhost:4201/remoteEntry.js',
          auth: 'auth@http://localhost:4202/remoteEntry.js',
          dashboard: 'dashboard@http://localhost:4203/remoteEntry.js',
        },
      }),
    ],
  };
};
