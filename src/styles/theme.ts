import { extendTheme } from '@chakra-ui/react'
import "@fontsource/inter"
import "@fontsource/raleway"
import { mode } from '@chakra-ui/theme-tools'


export const  myNewTheme = extendTheme({
     

       colors: {
            primary: "#184e77",
            secondary: "#1f6ba578",
            highlight: "#011638",
            warning: "#ff9c33",
            danger: "#f51400",
            whiteBac: "#f8f9fb",
            blackBase: "#2c2a29",
            subtitle: "#b9b4b4"
       },

       fonts: {
        heading: "Inter",
        body: "Inter",        
      },

      fontWeights: {
          hairline: 100,
          thin: 200,
          light: 300,
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
          extrabold: 800,
          black: 900,
     },

     styles: {
          global: {
            // styles for the `body`
            body: {
              //  bgImage: "url('./img/Back1.png')",
               bgPosition: "center",
               bgRepeat: "no-repeat",
               color: '#2c2a29',

               outline: '0',
            },
            // styles for the `a`
            a: {
              
              color: '#011638',
              _hover: {
                textDecoration: 'none',
              },
            },

        

            


          },
        },



      
});