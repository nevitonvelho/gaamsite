import styles from './styled.module.scss';
import Image from 'next/image'
import { MdKeyboardArrowUp } from 'react-icons/Md';

import { useRouter } from 'next/router';

import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Divider,
    effect,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';



  
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  
  import {ActiveLink} from  '../ActiveLink';
  
  
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { ButtonScroll } from '../ButtonScroll';






export function Nave(){


 


  
  const router= useRouter();
    let navHome = 
      router.locale ==='pt' 
        ? 'Inicio'
        : router.locale === 'en-US' 
        ? 'Home'
        :  router.locale === 'es' 
        ? 'Home'
        : '';

        let navProdutos = 
        router.locale ==='pt' 
        ? 'Produtos'
        : router.locale === 'en-US' 
        ? 'Product'
        :  router.locale === 'es' 
        ? 'Product'
        : '';

        let navBlog = 
        router.locale ==='pt' 
        ? 'Blog'
        : '';

        let navSobre = 
        router.locale ==='pt' 
        ? 'Sobre'
        : router.locale === 'en-US' 
        ? 'Teste'
        :  router.locale === 'es' 
        ? 'Teste'
        : '';

        let navContato = 
        router.locale ==='pt' 
        ? 'Contato'
        : router.locale === 'en-US' 
        ? 'Contact'
        :  router.locale === 'es' 
        ? 'Contact'
        : '';



    const { isOpen, onToggle } = useDisclosure();

    return(<>

    <div className={styles.navebar} >
    <Box as="div"  bg={'url(./img/banner.jpg)'} className={styles.bannerTopHeader}>
        <Text>Acesse Nosso Blog!</Text>
            <Button marginLeft="10px"  bg="highlight" color="#fff"  _hover={{ bg: "highlight" }}   type="button" href="#">
                    Acessar
            </Button>
    </Box>
     
     
    <Box  as="div" maxW={'1240px'}  margin={'0 auto'}>
      <Flex 
        minH={'80px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        
        >
          
        <Flex 
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex  alignItems={'center'} flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>


       
            <a href="/">
              <Image src="/img/logo.svg" width="200" height="35" alt="logo gaam"/>
            </a>
        
        

          <Flex   className={styles.naveContainer} display={{ base: 'none', md: 'flex' }} ml={10}>
             <Link   href='/' ><a className={styles.ativo}>{navHome}</a></Link>
             <Link href='/produtos'><a>{navProdutos}</a></Link>
             <Link href='/sobre'><a>{navSobre}</a></Link>
             <Link  href='/contato' ><a>{navContato}</a></Link>
             <Link  href='/contato' ><a>{navBlog}</a></Link>
          </Flex>
        </Flex>


             <ul className={styles.idiomaContainer}>
              
              <li >
                <Link  href={router.asPath} locale={'pt'}><a className={styles.pt}>PT</a></Link>
                <Link  href={router.asPath} locale={'en-US'}><a className={styles.in}>IN</a></Link>
                <Link  href={router.asPath} locale={'es'}><a className={styles.es}>ES</a></Link>
              </li>
              
            </ul>

      </Flex>

      <Divider orientation='horizontal' />

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
    </div>

    </>
    );
}

  
  const MobileNav = () => {

    const router= useRouter();
    let navHome = 
      router.locale ==='pt' 
        ? 'Inicio'
        : router.locale === 'en-US' 
        ? 'Home'
        :  router.locale === 'es' 
        ? 'Home'
        : '';

        let navProdutos = 
        router.locale ==='pt' 
        ? 'Produtos'
        : router.locale === 'en-US' 
        ? 'Product'
        :  router.locale === 'es' 
        ? 'Product'
        : '';

        let navBlog = 
        router.locale ==='pt' 
        ? 'Blog'
        : '';

        let navSobre = 
        router.locale ==='pt' 
        ? 'Sobre'
        : router.locale === 'en-US' 
        ? 'Teste'
        :  router.locale === 'es' 
        ? 'Teste'
        : '';

        let navContato = 
        router.locale ==='pt' 
        ? 'Contato'
        : router.locale === 'en-US' 
        ? 'Contact'
        :  router.locale === 'es' 
        ? 'Contact'
        : '';

    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
          <div>
            <Link  href='/' >{navHome}</Link>
          </div>

          <div>
            <Link  href='/produtos' >{navProdutos}</Link>
          </div>

          <div>
            <Link  href='/sobre' >{navSobre}</Link>
          </div>

          <div>
            <Link href='/contato'>{navContato}</Link>
          </div>
      </Stack>
    );
  };
  

  
 