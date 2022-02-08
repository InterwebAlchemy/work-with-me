import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

import theme from '../theme'

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
          {process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' && (
            <>
              <script async defer src="https://analytics.workwithme.app/latest.js"></script>
              <noscript>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://analytics.workwithme.app/noscript.gif"
                  alt=""
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </noscript>
            </>
          )}
        </body>
      </Html>
    )
  }
}
