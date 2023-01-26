import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import products from '../../products.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ul className={styles.grid}>
          {products.map((item) => (
            <li key={item.id} className={styles.card}>
              <a href="#">
                <Image
                  width={100}
                  height={100}
                  src={item.image}
                  alt={item.title}
                />
                <p>{item.price}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
