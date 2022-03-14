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
    </Head>
  )
}

export default AppHeader