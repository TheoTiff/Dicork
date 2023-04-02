import Link from "next/link"
import styles from "@/styles/products.module.css"
import Head from "next/head"

export default function Truc() {
    return(
        <>
        <Head>
            <title>Dicork | Products</title>
        </Head>
        <div className={styles.main}>
            <h1>Dicork</h1> 
            <h1>Page produit</h1>
        </div>
        </>
    )
}