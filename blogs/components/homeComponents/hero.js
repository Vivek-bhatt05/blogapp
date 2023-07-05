import Image from 'next/image'
import styles from '/styles/hero.module.css'

function Hero(){
    return <section className={styles.hero}>
    <div className={styles.image}>
        <Image src='/images/hero/helloo.png' alt='Vivek' height={300} width={300} />
    </div>
    <h1>Hi, I'm Vivek</h1>
    <p>I blog about web-development.</p>
</section>
}

export default Hero