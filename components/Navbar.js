import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'
import Logo from '../public/logo.png'



function Navbar() {

    const router = useRouter();
    

    return (
        <header className={styles.header}>
            <nav className= {styles.navbar} >
            <div className={styles.navbrand}>
                <Link className={styles.logolink} href="/home" passHref>
                <Image className={styles.logo} src={Logo} width={50} height={50} alt='Rada ogo'/>
                </Link>
            </div>

            <ul className={styles.navlinks}>
                <li className={styles.navlink}>
                <Link href="/" className={styles.active}>
                    <a>Home</a>
                </Link>
                </li>
                <li className={styles.navlink}>
                <Link href="/about" className={styles.active}>
                    <a>About Us</a>
                </Link>
                </li>
                <li className={styles.navlink}>
                <Link href="/service" className={styles.active}>
                    <a>Service</a>
                </Link>
                </li>
                <li className={styles.navlink}>
                <Link href="/contact-us" className={styles.active}>
                    <a>Contact Us</a>
                </Link>
                </li>

            </ul>
            </nav>
        </header>
    )
}

export default Navbar
