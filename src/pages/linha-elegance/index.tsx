import { GetStaticProps } from "next";
import styles from "./styled.module.scss";
import Head from "next/head";
import { Box, Image, Badge, Text, Link, Grid} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { useState }  from 'react';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

type Produto = {
    slug: string;
    title: string;
    codigo: string;
    tipo: string;
    cover: string;
    
}

interface ProdutosProps{
    produtos: Produto[];
    page: string;
    totalPage:string;
}

export default function Produto({produtos: produtosGaam}: ProdutosProps){

    const [produtos, setProdutos] = useState(produtosGaam || []);

    console.log(produtos);
    return(
        <>  <Box Box className={styles.container}>
            <Head>
                <title>Produtos | Gaam - Gabinetes</title>
            </Head>

            <Box as='div' className={styles.titlePage}>
                <Box alignItems={'row'} className={styles.banner}>
                    <div className={styles.containerBanner}>
                        <div>
                            <h3>Linha Sublime</h3>
                        </div>
                        
                    </div>
                    
                </Box>
            </Box>
            <div className={styles.link}>
            <Grid templateColumns='repeat(4, 1fr)'  gap={6}>
                {produtos.map( linha_sublime => (
                    <Link marginLeft={'1rem'}  key={linha_sublime.slug} href={`/linha-sublime/${linha_sublime.slug}`}>
                        
                            <Box as="div" maxW='sm' borderWidth='1px'  overflow='hidden'>
                                
                                <Image quality={100} src={linha_sublime.cover}/>

                                <Box p='6'>
                                    <Box display='flex' alignItems='baseline'>
                                    <Badge  px='2' colorScheme='teal'>
                                    cód: {linha_sublime.codigo}
                                    </Badge>
                                    </Box>

                                    <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    isTruncated
                                    >
                                    <h1>{linha_sublime.title}</h1>
                                    </Box>
                                        
                                    <Box>
                                    <Box as='span' color='gray.600' fontSize='sm'>
                                        <p>{linha_sublime.tipo}</p>
                                    </Box>
                                    </Box>
                                </Box>
                            </Box>
                        
                    </Link>
                ))}

            </Grid>
            </div>
            </Box>

        </>
    )
}


export const getStaticProps: GetStaticProps = async () => {

    const prismic = getPrismicClient();

    const  response = await  prismic.query([
        Prismic.Predicates.at('document.type',  'linha_sublime')
    ], {
        orderings: '[my.product.title]',
        fetch: ['linha_sublime.title', 'linha_sublime.codigo','linha_sublime.tipo', 'linha_sublime.cover'],
    })

     console.log(JSON.stringify(response, null, 2))

    const produtos = response.results.map( linha_sublime => {
        return {
            slug: linha_sublime.uid,
            title: RichText.asText(linha_sublime.data.title),
            codigo: RichText.asText(linha_sublime.data.codigo),
            tipo: RichText.asText(linha_sublime.data.tipo),
            cover: linha_sublime.data.cover.url,
        }
    } )

    return{
        props:{
            produtos,
            page: response.page,
            totalPage: response.total_pages
        },
        revalidate: 60 * 30
    }
}