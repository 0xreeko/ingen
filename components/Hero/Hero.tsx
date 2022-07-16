import styles from './Hero.module.css'
import Typewriter from 'typewriter-effect'

 
export const Hero = () => {
    return (
        <div className={styles.container}>
            <h1 className={`desktop-hero ${styles.hero}`}>Build <span className={styles.twriter}>{<Typewriter options={{strings: ['an invoice.', 'a resume.', 'a fillable PDF.', 'an order.', 'a contract.', 'a certificate.', 'a report.', 'a letter.', 'an agreement.', 'a ticket.'], deleteSpeed: 40, autoStart: true, loop: true}}/>}</span></h1>
            <h2 className={`desktop-b2 ${styles.subhead}`}>Generate digital docs the <span className={styles.supasonic}>supasonic</span> way.</h2>
        </div>
    )
};