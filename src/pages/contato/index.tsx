import styles from './styled.module.scss';
import { useEffect, useState } from "react"
import HubspotForm from 'react-hubspot-form'
import { 
    Input, 
    Textarea,  
    Button,
    Checkbox,
    Flex,
    Heading,
    Link,
    Stack,
    Image, } from '@chakra-ui/react';



export default function Contato(){

  

    return(
        <div className={styles.containerBox}>


    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>


    <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            './img/customer-service.jpg'
          }
        />
      </Flex>

      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack marginTop={'6rem'}  spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Contato</Heading>

          <HubspotForm
             portalId='20686772'
             formId='73f1e581-37fb-4eef-bfc8-f80de2f48dad'
             onSubmit={() => console.log('Submit!')}
             onReady={(form) => console.log('Form ready!')}
             loading={<div>Loading...</div>}
             />
        </Stack>
      </Flex>
      
    </Stack>
        </div>
    )
}