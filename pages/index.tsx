import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AppHeader from '../components/base/AppHeader'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <section>
      <AppHeader title='Home'/>
    </section>
  )
}

export default Home
