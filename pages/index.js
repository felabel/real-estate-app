import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/ui/Header'
import Listings from '../components/ui/Listings'
import Filterarea from '../components/ui/Filterarea'
import Layout from '../components/layout'

export default function Real() {
  return (

    <Layout>
      <Head>
        <title>Real Estate App</title>
      </Head>
      <div className='container'>
        <Header />
        <section id='content-area'>
        
        <Filterarea />
        <Listings />
        </section>
       

      </div>
    </Layout>
    
  )
  
}
