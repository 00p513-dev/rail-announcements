/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

/**
 * Customise webpack config.
 */
exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /crunker/,
            use: loaders.null(),
          },
        ],
      },
    })
  }

  const SentryPlugin = require('@sentry/webpack-plugin')

  actions.setWebpackConfig({
    plugins: [
      new SentryPlugin({
        include: 'public',
        ignore: ['app-*', 'polyfill-*', 'framework-*', 'webpack-runtime-*'],
      }),
    ],
  })

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /.jsonc$/,
          use: [
            {
              loader: `jsonc-loader`,
            },
          ],
        },
      ],
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@atoms': path.resolve(__dirname, 'src/atoms'),
        '@helpers': path.resolve(__dirname, 'src/helpers'),
        '@announcement-data': path.resolve(__dirname, 'src/announcement-data'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
      },
    },
  })
}
