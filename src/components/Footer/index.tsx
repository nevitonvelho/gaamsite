import {ActiveLink} from  '../ActiveLink';
import styles from './styled.module.scss';

import {
    Input,
    IconButton,
    Stack,
    Text,
    Box,
    Container,
    SimpleGrid,
    Link,
    useColorModeValue,
    VisuallyHidden,
    chakra,
  } from '@chakra-ui/react';

import { ReactNode } from 'react';

import { FaYoutube, FaInstagram, FaPinterest } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/Bs';
import { BiMailSend } from 'react-icons/Bi';

import { createBreakpoints } from '@chakra-ui/theme-tools'
import { useRouter } from 'next/router';
import { ButtonScroll } from '../ButtonScroll';

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
  

export default function Footer(){


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

    return(
      
        
      <footer className={styles.footerSection}>

      <ButtonScroll/>
      <Box
      color="highlight"
      bg="whiteBac">
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Empresa</ListHeader>
            <ActiveLink href="/" activeClassName={styles.active}>
                <a>{navHome}</a>
            </ActiveLink>
            <ActiveLink  href="/produtos" activeClassName={styles.active}>
                <a>{navProdutos}</a>
            </ActiveLink>
            <ActiveLink href="/sobre" activeClassName={styles.active}>
                <a>{navSobre}</a>
            </ActiveLink>
            <ActiveLink href="/contato" activeClassName={styles.active}>
                <a>{navContato}</a>
            </ActiveLink>
            <ActiveLink href="/sobre" activeClassName={styles.active}>
               <a>{navBlog}</a>
            </ActiveLink>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Atendimento</ListHeader>
            <Link href={'#'}>46. 3547-8100</Link>
            <Link href={'mailto:gaam@gaam.com.br'}>gaam@gaam.com.br</Link>
          </Stack>
          
          <Stack align={'flex-start'}>
            <ListHeader>Endereço</ListHeader>
              <Text>
                Rua Romildo Bortoli, 255
                Bairro Rude Jose Spanhol
                CEP: 85640-000 - Ampére - PR
              </Text>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Email</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Mantenha-se atualizado'}
                bg="{useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}"
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg="primary"
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'highlight',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>


      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Gabinetes, Cubas e Acessórios para Banheiro - Gaam Gabinetes - Todos os direitos reservados</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Facebook'} href={'https://www.facebook.com/GAAMGABINETES'}>
              <BsFacebook />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/c/GaamGabinetes'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Pinterest'} href={'https://br.pinterest.com/gaamgabinetes'}>
              <FaPinterest />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/gaamgabinetes/'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>

      </footer>
    )
}