import React, { useRef, useState } from "react";

import { GetServerSideProps } from 'next';
import styles from './produtos.module.scss';
import { getPrismicClient } from '../../services/prismic'
import { RichText } from 'prismic-dom';
import { HiPlus } from 'react-icons/Hi';
import { Box, Image, Badge, Text, Link, Grid} from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cube"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

import SwiperCore, {
  EffectCube, Pagination, FreeMode, Navigation, Thumbs
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination, FreeMode, Navigation, Thumbs]);

interface ProdutosProps{
  linha_sublime: {
    slug: string;
    title: string;
    codigo: string;
    tipo: string;
    description: string;
    cover: string;
    desenho_tecnico: string;
    logo: string;

    galeria:[
      galeria_imagem:string,
    ],
    
  }

}


import Head from 'next/head';



export default function Produto({ linha_sublime }: ProdutosProps ){

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return(
        <>
            <Head>
                <title>Gaam Gabinetes | {linha_sublime.slug}</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.conteudo}>

                <Swiper effect={'cube'}   spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className={styles.mySwiper}>
                  <SwiperSlide><Image  as="img" src={linha_sublime.cover}/></SwiperSlide>
                  <SwiperSlide><Image  as="img" src="/img/Reggio.jpg"/></SwiperSlide>
                  <SwiperSlide><Image  as="img" src={linha_sublime.cover}/></SwiperSlide>
                  <SwiperSlide><Image  as="img" src={linha_sublime.cover}/></SwiperSlide>

                </Swiper>


                  <Box margin={'4rem'}>
                    <Box display='flex' alignItems='baseline'>
                        <Badge fontSize={'1rem'} borderRadius='1x' px='2' colorScheme='teal'>
                          cód: {linha_sublime.codigo}
                        </Badge>
                    </Box>
                    <h1>{linha_sublime.title}</h1>

                    <Box as='span' color='gray.600'>
                      <Text as="p">{linha_sublime.tipo}</Text>
                    </Box>

                    <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={10} freeMode={true} watchSlidesProgress={true} className={styles.thumbs}>

                      <SwiperSlide><Image  as="img" src={linha_sublime.cover}/></SwiperSlide>
                      <SwiperSlide><Image  as="img" src="/img/Reggio.jpg"/></SwiperSlide>
                      <SwiperSlide><Image  as="img" src={linha_sublime.cover}/></SwiperSlide>
                      <SwiperSlide><Image  as="img" src={linha_sublime.cover}/></SwiperSlide>
                      
                    </Swiper>

                    

                  </Box>
                </div>

              
            <Box  marginTop={'4rem'} >
              <Box display={'flex'} alignItems={'center'}>
                  <Box  className={styles.postContent} dangerouslySetInnerHTML={{ __html: linha_sublime.description }}></Box>
                  <Image w="32rem" h="32rem" padding={'12px'} as="img" src={linha_sublime.desenho_tecnico} alt="${linha_sublime.desenho_tecnico.alt}" />
              </Box>
            </Box>


            <Box as='div' className={styles.titlePage}>
               
            </Box>

              <Swiper spaceBetween={30} hashNavigation={{
              "watchState": true
              }} pagination={{
                "clickable": true
              }} navigation={true} className="mySwiper">
                <SwiperSlide data-hash="slide1"><Image  as="img" src="/img/1234.jpeg"/></SwiperSlide>
                <SwiperSlide data-hash="slide1"><Image  as="img" src="/img/1234.jpeg"/></SwiperSlide>
                <SwiperSlide data-hash="slide1"><Image  as="img" src="/img/1234.jpeg"/></SwiperSlide>
                {/* <SwiperSlide data-hash="slide1"><Image  as="img" src={linha_sublime.banner.img} /></SwiperSlide> */}
              </Swiper>

            </main>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({ req, params}) => {
  const { slug } = params;
  const prismic = getPrismicClient(req);

  
  const response = await prismic.getByUID('linha_sublime', String(slug), {});

  if(!response){
    return{
      redirect:{
        destination: '/linha-sublime',
        permanent: false
      }
    }
  }

  const linha_sublime = {
    slug: slug,
    title: RichText.asText(response.data.title),
    codigo: RichText.asText(response.data.codigo),
    tipo: RichText.asText(response.data.tipo),
    cover: response.data.cover.url,
    description: RichText.asHtml(response.data.description),
    desenho_tecnico: response.data.desenho_tecnico.url,
    
  };

    console.log(response);

  return {
    props:{
      linha_sublime
    }
  }
}