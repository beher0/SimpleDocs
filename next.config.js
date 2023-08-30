const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

const nextConfig = {
  assetPrefix: isProd ? '/nextra-template' : '',
  basePath: isProd ? '/nextra-template' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = withNextra(nextConfig)
