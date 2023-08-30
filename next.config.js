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
}

module.exports = withNextra(nextConfig)
