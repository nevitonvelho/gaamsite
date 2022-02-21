import { MdKeyboardArrowUp } from 'react-icons/md';
import styles from './styled.module.scss';

import { Link } from 'react-scroll'


export function ButtonScroll(){
    return(   
      <Link to='topo' smooth={true}>     
        <div className={styles.botao_voltar_ao_topo}><MdKeyboardArrowUp/></div>
      </Link>
    )
  };
  

  
 