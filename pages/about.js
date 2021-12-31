import React from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';

function About() {
    
    return (
        <section className={styles.about}>
            <div className={styles.aboutImage}>
                <Image src="/tree.png" alt="about" width={500} height={500} />
            </div>
            <motion.div
                className={styles.aboutText}
                animate={{ x: -100 }}
                initial={true}
                transition={{ ease: "easeOut", duration: 0.5 }}
            >
            
                <p>
            
                    Rada is a Yield farming protocol 
                    operating on the Gnosis chain (xDai), We are focused on Yield Farming, 
                    real-life assect backed NFTs and Carbon credit.
                </p>
            </motion.div>
        </section>
        
    )
}

export default About
