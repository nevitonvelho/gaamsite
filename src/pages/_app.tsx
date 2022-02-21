import { AppProps } from 'next/app';
import { ChakraProvider } from "@chakra-ui/react";
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import {NextIntlProvider} from 'next-intl';



import {Nave} from '../components/Nave'
import Footer from '../components/Footer'
import { myNewTheme } from '../styles/theme';
import { useEffect, useState } from 'react';



function MyApp({ Component, pageProps }: AppProps ){

  return (
    <>
    <NextIntlProvider  messages={pageProps.messages}>
      <ChakraProvider  resetCSS theme={myNewTheme}>
      <div id='topo'>
        <Nave  />
      </div>
      
      <Component  {...pageProps} />
      <Footer />
    </ChakraProvider>

    </NextIntlProvider>
    </>
  )
}

export default MyApp
