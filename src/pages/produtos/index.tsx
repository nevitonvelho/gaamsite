import styles from './styled.module.scss';

import { motion, useViewportScroll, useTransform } from "framer-motion";

import {Flex, Menu, MenuButton, MenuItem, MenuList, useDisclosure, Button, Text, Box, Link} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { HiArrowRight } from 'react-icons/hi';





export default function First( ) {
    return (<>
  
    <div className={styles.container}>


    <nav>
      <ul><li className={styles.wrapper} data-role="thumb-1">
      <Link><a href='/linha-sublime'>
      <div className={styles.box}>
          <div className={styles.textContent}>
            Linha Sublime       
          </div>

          <div className={styles.textP}>
              <p>O conjunto Trento foi desenvolvido.</p>
          </div>

          <button><HiArrowRight  className={styles.arrow}/></button>
        </div>
        </a></Link>  
        <section className={styles.contentImg} data-role="content-1">
            <img  src="./img/Reggio.jpg" alt="" />
        </section>
      </li></ul>


      <ul><li className={styles.wrapper} data-role="thumb-2">
      <Link><a href='/linha-sublime'>
      <div className={styles.box}>
          <div className={styles.textContent}>
              Linha Elegance
          </div>

          <div className={styles.textP}>
              <p>O conjunto Trento foi desenvolvido.</p>
          </div>

          <button><HiArrowRight  className={styles.arrow}/></button>
        </div>
        </a></Link>   
        <section className={styles.contentImg} data-role="content-2">
            <img  src="./img/Yaris Plus.jpg" alt="" />
        </section>
      </li></ul>


      <ul><li className={styles.wrapper} data-role="thumb-3">
      <Link><a href='/linha-sublime'>
      <div className={styles.box}>
          <div className={styles.textContent}>
            Linha Vivace    
          </div>

          <div className={styles.textP}>
              <p>O conjunto Trento foi desenvolvido.</p>
          </div>

          <button><HiArrowRight  className={styles.arrow}/></button>
        </div>
        </a></Link>   
        <section className={styles.contentImg} data-role="content-3">
            <img  src="./img/Metallo.jpg" alt="" />
        </section>
      </li></ul>

      <ul><li className={styles.wrapper} data-role="thumb-4">
      <Link><a href='/linha-sublime'>
      <div className={styles.box}>
          <div className={styles.textContent}>
            Linha Essenza      
          </div>

          <div className={styles.textP}>
              <p>O conjunto Trento foi desenvolvido.</p>
          </div>

          <button><HiArrowRight  className={styles.arrow}/></button>
        </div>
        </a></Link> 
        <section className={styles.contentImg} data-role="content-4">
            <img src="./img/lavanderia.jpg" alt="" />
        </section>
      </li></ul>

      
    </nav>
      

    </div>

  </>
  );
}