import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dicork</title>
        <meta name="description" content="Dicork home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.headBar}>
            <h2>Dicork</h2>
            <Link href={"/products/products"}>
              <h3>Nos produits</h3>
            </Link>
        </div>
      </main>
    </>
  )
}
