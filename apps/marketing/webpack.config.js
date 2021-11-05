const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../package.json');

module.exports = (config, context) => {
  return {
    ...config,
    output: {
      uniqueName: 'marketing',
      publicPath: 'auto',
    },
    optimization: {
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'marketing',
        filename: 'remoteEntry.js',
        shared: dependencies,
        remotes: {
          auth: 'auth@http://localhost:4202/remoteEntry.js',
        },
        exposes: {
          './MarketingApp': './src/bootstrap',
          './MarketingBlurb': './src/bootstrap-blurb',
        },
      }),
    ],
  };
};
