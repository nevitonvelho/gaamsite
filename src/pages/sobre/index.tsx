import styles from './styled.module.scss'
import Head from 'next/head';
import { FaYoutube, FaFacebook, FaInstagram, FaWhatsapp} from 'react-icons/fa'

import {
    Text,
    Box,
  } from '@chakra-ui/react';

export default function Sobre() {
    return(
        <>
            <Head>
                <title>Gaam Gabinetes</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.containerHeader}>
                    <section className={styles.ctaText}>
                        <Text as="h1" bgGradient='linear(to-l, highlight, primary)' bgClip='text' >SOBRE A GAAM</Text>
                        <p> Fundada em primeiro de outubro de 1995, a Gaam tem uma significativa participação no mercado brasileiro, com representantes em todos os estados. Com a missão de atender cada vez melhor seus clientes, a Gaam investiu em frota de caminhões própria, a fim de agilizar as entregas e oferecer serviços e produtos com a qualidade garantida.
                            Além disso, a empresa possui uma fábrica de pias e cubas exclusivas para seus gabinetes, proporcionando aos clientes peças exclusivas. Tudo isso para possibilitar a montagem de ambientes personalizados que ofereçam funcionalidades, praticidade, higiene, tecnologia e design avançado.</p>
                        <h2>MISSÃO</h2>
                        <p>Produzir ambientes inovadores para banheiros através de uma empresa socialmente justa para se trabalhar.</p>
                        <h2>VISÃO</h2>
                        <p>Ser reconhecida como uma empresa inovadora, líder de mercado, onde as pessoas tenham orgulho e prazer de trabalhar</p>

                        <div className={styles.icons}>
                            <a href="#">
                                <FaFacebook size={40}/>
                            </a>

                            <a href="#">
                                <FaInstagram size={40}/>
                            </a>

                            <a href="#">
                                <FaYoutube size={40}/>
                            </a>

                            <a href="#">
                                <FaWhatsapp size={40}/>
                            </a>
                        </div>

                    </section>

                    <img src="./img/Emp.png" alt="" />
                </div>
            </main>

        </>
    )
}

