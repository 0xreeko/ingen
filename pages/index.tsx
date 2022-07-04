import type { NextPage } from 'next'
import Head from 'next/head'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Head>
        <title>Ingen</title>
        <meta name="author" content="0xreeko" />
        <meta name="description" content="A browser-based generator for digital invoices." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* footer */}
      <Footer/> 
    </div>
  )
}

export default Home
