const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

const nextConfig = {
  assetPrefix: process.env.ASSET_PREFIX,
  basePath: process.env.BASE_PATH,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = withNextra(nextConfig)
