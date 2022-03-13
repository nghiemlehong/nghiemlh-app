import React from 'react'
import Head from 'next/head'

interface Props {
  title: string

}

const AppHeader: React.FC<Props> = ({
  children,
  title,
}) => {


  return (
    <Head>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
  )
}

export default AppHeader