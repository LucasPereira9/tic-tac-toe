import React from 'react';
import styles from './credits.module.css'
import Image from 'next/image';
import Link from 'next/link';
import PrimaryButton from '../primaryButton';
import { ICreditsProps } from './credits.estructure';

const Credits = (props: ICreditsProps) => {

const githubLink = 'https://github.com/LucasPereira9?tab=repositories';
const linkedinLink = 'https://www.linkedin.com/in/lucas-almeida-5280b9206/';


  return (
    <div className={styles.container}>
       <Link className={styles.link} href={githubLink} passHref>
        <div className={styles.cards}>
        <Image src="/assets/images/github.png" alt="GitHub" width={100} height={100} />
            <PrimaryButton title='Github' onClick={() => window.location.href = githubLink} />
        </div>
       </Link>
        <div className={styles.cards}>
            <div>
              <div className={styles.cards} style={{paddingBottom: '60%'}}>
                <Image src="/assets/images/github.png" alt="GitHub" width={120} height={120} />
            <PrimaryButton title='Lucas Almeida' onClick={() => console.log('Autor')} />
             </div>
            </div>
            <PrimaryButton title='Voltar' onClick={props.goBack} />
        </div>
        <Link className={styles.link} href={linkedinLink} passHref>
        <div className={styles.cards}>
        <Image src="/assets/images/linkedin.png" alt="linkedin" width={100} height={100} />
            <PrimaryButton title='LinkedIn' onClick={() => window.location.href = linkedinLink} />
        </div>
       </Link>
    </div>
  );
};

export default Credits;