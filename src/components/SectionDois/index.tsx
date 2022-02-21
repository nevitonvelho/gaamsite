import { useEffect, useState } from 'react';
import styles from './styled.module.scss';
import { RiPlayMiniFill } from 'react-icons/Ri';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    Button,
    useDisclosure,

    Link
  } from '@chakra-ui/react'

export default function SectionDois(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    return(<>
            <div className={styles.container}>
                <div data-aos="fade-down"  className={styles.textContainer}>
                    <h3>A Gaam Indústria e Comércio de Móveis Ltda </h3>
                    <p>Sempre buscando inovar, a Gaam investe em tecnologias para disponibilizar produtos com design e qualidade a preços justos.</p>

                    <Link href="/produtos">
                        <Button  marginTop={'22px'} colorScheme='#184e77'  variant='outline'>
                            Saiba Mais
                         </Button>
                    </Link>
                </div>

                <div data-aos="zoom-in" className={styles.containerVideo}>
                    <div  className={styles.mockupBg}>
                        <img className={styles.img01} src="./img/group-office.jpg" alt="Espelho"/>
                    </div>
                    
                    <button onClick={onOpen} className={styles.deviceMockup}><RiPlayMiniFill className={styles.icon}/></button>
                </div>


                <Modal   isOpen={isOpen} onClose={onClose}>

                    <ModalOverlay />
                    <ModalContent top={'15%'} right={'10%'} background={'transparent'} shadow="null" maxW={'560'}  maxh={'525'}>
                        <ModalCloseButton left={'910px'}/>
                    
                         <iframe width="900" height="506" src="https://www.youtube.com/embed/vck0bCZkWys" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </ModalContent>
                </Modal>
                    

                    
            </div>
    </>

        

    )
}
