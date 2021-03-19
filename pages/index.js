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
        {/* font awesome cdn */}
        <script src="https://kit.fontawesome.com/c41b0435b9.js" crossOrigin="anonymous"></script>
      </Head>
      <div className='container'>
        <Header />
        <section id='content-area'>
        
        <Filterarea   />
        <Listings />
        </section>
       

      </div>
    </Layout>
    
  )
  
}
// export default class App extends Component{
//   constructor (){
//     super()
//     this.state = {
//       name: 'joe',

//     }
//   }
// }
