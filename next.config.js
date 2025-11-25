/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ← isso substitui o next export
  trailingSlash: true,        // opcional, mas ajuda no Firebase
  images: {
    unoptimized: true         // necessário quando output: export
  }
}

module.exports = nextConfig
