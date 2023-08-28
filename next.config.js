const repo = 'nextra-template'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = withNextra(nextConfig)
