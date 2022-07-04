import Link from 'next/link';
import styles from './Footer.module.css'
 
export const Footer = () => {
    return (
        <footer className={styles.container}>
            <p>&copy; 2022 Ingen</p>
            <p>Made with 👾 with Nextjs & TailwindCSS</p>
            <p>Dev'd by <span className={styles.link}><Link href={'https://www.twitter.com/0xreeko'} target="_blank" rel="noopener">0xreeko</Link></span></p>
        </footer>
    )
};