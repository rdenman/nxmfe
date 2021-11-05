const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  return {
    ...config,
    output: {
      uniqueName: 'auth',
      publicPath: 'auto',
    },
    optimization: {
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'auth',
        filename: 'remoteEntry.js',
        shared: dependencies,
        remotes: {
          marketing: 'marketing@http://localhost:4201/remoteEntry.js',
        },
        exposes: {
          './AuthApp': 'apps/auth/src/bootstrap',
          './UserInfo': 'apps/auth/src/bootstrap-user-info',
        },
      }),
    ],
  };
};
