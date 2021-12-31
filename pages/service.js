import React from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion';

function Service() {
    return (
        <section className={styles.service}>
            <motion.div 
            animate={{ y: -100 }}
            initial={true}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className={styles.serviceList}
            >
                <h2>Rada Carbon Credit</h2>
                <p>The Rada carbon credit ecosystem will focuses on planting and tokenizing
                trees. </p>
            </motion.div>
            <motion.div 
            animate={{ y: 100 }}
            initial={true}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className={styles.serviceList}
            >
                <h2>Tokenomics</h2>
                <p>Once the DAO grows larger than this, it should be upgraded with higher 
                    security levels to safely manage a larger treasury.</p>
            </motion.div>
            
            <motion.div 
            animate={{ y: -100 }}
            initial={true}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className={styles.serviceList}
            >
                <h2>NFTs</h2>
                <p>Non Fungible tokens are “one-of-a-kind” cryptographic digital assets that represent real-world objects and digital items</p>
            </motion.div>
            <motion.div 
            animate={{ y: 100 }}
            initial={true}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className={styles.serviceList}
            >
                <h2>Tree Planting</h2>
                <p>We plant trees using fees from the platform.</p>
            </motion.div>
            
        </section>
    )
}

export default Service
