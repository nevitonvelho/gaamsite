import  Header  from 'next/head';
import { GetStaticProps } from 'next';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import styles from '../styles/home.module.scss';
import Lottie from 'react-lottie';
import animationData from '../lotties/12345.json';

import Aos from 'aos';
import 'aos/dist/aos.css';

import Link from 'next/link';

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useRouter } from 'next/router';



import Susten from '../components/Susten';

import { getPrismicClient } from '../services/prismic';

import Prismic from '@prismicio/client';

import { RichText } from 'prismic-dom';

import {
  Button,
  Image,
  Text,
  Box,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';

import { createBreakpoints } from '@chakra-ui/theme-tools'
import SectionUm from '../components/SectionUm';
import SectionDois from '../components/SectionDois';

import ModaLink from '../components/ModalLink';



const breakpoints = createBreakpoints({
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
})

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      { children }
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

type Content = {
    title: string,
    title_en: string,
    title_es: string,
    titleContent: string,
    linkAction: string,
    bannerHero: string,
    
}

interface ContentProps{
  content: Content;
};

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function Home({ content }: ContentProps) {

  useEffect(() => {
    Aos.init({duration: 1500});
  }, [])


  const router= useRouter();
  let titleHome = 
    router.locale ==='pt' 
      ? content.title
      : router.locale === 'en-US' 
      ? content.title_en
      :  router.locale === 'es' 
      ? content.title_es
      : '';
  

  // const t = useTranslations('home');

  const { isOpen, onOpen, onClose } = useDisclosure()

console.log(content);


const  [showModal,  setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    
    }



  return (
    <>
    
    


    <main className={styles.container}>
      <Box >
      <Box  as="div"  className={styles.containerHeader}>
        <section id='topo' className={styles.ctaText}>
          {/* <Text as="h1" bgGradient='linear(to-l, highlight, primary)' bgClip='text'>{content.title}</Text> */}
          <Text as="h1" color={'#184e77'} >{titleHome}</Text>
          <Text color={'#5c5d5e'} as="span" >{content.titleContent}</Text>

         <div>
          <Link href="/produtos">
             <Button  marginTop={'22px'} colorScheme='#184e77'  variant='outline'>
              Ver agora
            </Button>
          </Link>
         </div>

        </section>
          <Image marginTop={'200px'} as="img" src={content.bannerHero}/>
      </Box>
      </Box>
    

      {/* Section 01*/}
      <SectionUm/>

      {/* Video */}
      <Box bg={'#e6ebf3'}>
        <SectionDois/>
      </Box>

      {/* Category */}

      
          <Susten/>


          <ModaLink/>

          
      
    </main>

    </>
  );
};  


export const  getStaticProps: GetStaticProps = async ({}) => {

  

  const prismic = getPrismicClient();

  const  response = await  prismic.query([
    Prismic.Predicates.at('document.type',  'home')
  ])

  //console.log(response.results[0].data);

  const {
   title, title_en, title_es, sub_title,  link_action, banner_hero
  } = response.results[0].data;

  const content = {
    title: RichText.asText(title),
    title_en: RichText.asText(title_en),
    title_es: RichText.asText(title_es),
    titleContent: RichText.asText(sub_title),
    linkAction: link_action.url,
    bannerHero: banner_hero.url
  };

  return{
    props:{
      content
    },
    revalidate: 60 * 2
  }
}




