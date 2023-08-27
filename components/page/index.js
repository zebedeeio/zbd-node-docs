import Header from '../header'
import NextHead from 'next/head'
import SearchList from '../search-list'
import { useSearch } from 'lib/search-context'

export default ({
  children,
  title = 'ZBD Node.js SDK - @zbd/node',
  description = 'Use ZBD API in your Node.js project. The SDK provides everything necessary to start adding instant Bitcoin payments to your application, game, or platform.',
  image = 'https://i.imgur.com/aHUXe3z.jpg',
}) => {
  const { search } = useSearch()

  return (
    <>
      <NextHead>
        {/* Preload */}
        <link
          rel="preload"
          href="https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Title */}
        <title>{title}</title>
        <meta name="og:title" content={title} />

        {/* Description */}
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />

        {/* Image */}
        <meta name="twitter:image" content={image} />
        <meta property="og:image" content={image} />

        {/* URL */}
        <meta property="og:url" content="https://node.zbd.dev" />
        <meta name="twitter:site" content="@zebedeeio" />

        {/* General */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon */}
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.zebedee.io/an/zbd/zbd-node-logo.png"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#000000" />
      </NextHead>

      <Header />
      {search ? <SearchList /> : <main>{children}</main>}
    </>
  )
}
