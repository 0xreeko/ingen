import type { NextPage } from 'next'
import Head from 'next/head'
import { Editor } from '../components/Editor/Editor'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ingen</title>
        <meta name="author" content="0xreeko" />
        <meta name="description" content="A browser-based generator for digital invoices." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      <main className={styles.main}>
        <Hero /> 
        <Editor />
        </main>
      {/* footer */}
      <Footer/> 
    </div>
  )
}

export default Home
