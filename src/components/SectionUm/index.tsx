import { useEffect } from 'react';
import styles from './styled.module.scss';


export default function SectionUm(){

  
    return(<>
        <section  className={styles.section01}>
            <div className={styles.featureExtendedImage}>
                <div  className={styles.mockupBg}>
                    <img className={styles.img01} src="./img/Ativo.svg" alt="Espelho"/>
                </div>
                    <img data-aos="fade-up" className={styles.deviceMockup} is-revealing src="./img/Espelheira.png" alt="Back"/>
            </div>

            <div data-aos="fade-down" className={styles.featureExtendedBody}>
                <h2 className="mt-0 mb-16">Espelheira</h2>
                <p className="m-0">Sofisticação que faltava em seu banheiro. Espelheiras Gaam, o diferencial da sua decoração.</p>
            </div>
        </section>


        <section  className={styles.section01}>
            <div className={styles.featureExtendedImage}>
                <div  className={styles.mockupBg}>
                    <img className={styles.img01} src="./img/Ativo 2.svg" alt="Espelho"/>
                </div>
                    <img data-aos="fade-up" className={styles.deviceMockup} is-revealing src="./img/Cuba.png" alt="Back"/>
            </div>

            <div data-aos="fade-down" className={styles.featureExtendedBody}>
                <h2 className="mt-0 mb-16">Cubas</h2>
                <p className="m-0">Sua pia com mais requinte e durabilidade é com as Cubas Gaam, vários modelos para harmonizar a decoração do seu banheiro.</p>
            </div>
        </section>

        {/* <section className={styles.section01}>
            <div data-aos="fade-down" className={styles.featureExtendedBodyLeft}>
                <h2 className="mt-0 mb-16">Cubas</h2>
                <p className="m-0">Sua pia com mais requinte e durabilidade é com as Cubas Gaam, vários modelos para harmonizar a decoração do seu banheiro.</p>
            </div>
            <div className={styles.featureExtendedImage}>
                <div className={styles.mockupBg}>
                    <img className={styles.img01} src="./img/Ativo 2.svg" alt="Espelho"/>
                </div>
                    <img data-aos="fade-up" className={styles.deviceMockup} is-revealing src="./img/Cuba.png" alt="Back"/>
            </div>

        </section> */}

        <section className={styles.section01}>
            <div className={styles.featureExtendedImage}>
                <div className={styles.mockupBg}>
                    <img className={styles.img01} src="./img/Ativo.svg" alt="Espelho"/>
                </div>
                    <img  data-aos="fade-up" className={styles.deviceMockup} is-revealing src="./img/Gabinete.png" alt="Back"/>
            </div>

            <div data-aos="fade-down"  className={styles.featureExtendedBody}>
                <h2 className="mt-0 mb-16">Gabinetes </h2>
                <p className="m-0">Estilo e elegância para organizar o seu banheiro com os Gabinetes Gaam, projetados e fabricados pensando em facilitar o seu dia-a-dia.</p>
            </div>
        </section>

        
    </>

        

    )
}