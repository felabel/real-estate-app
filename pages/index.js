import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/ui/Header'
import Listings from '../components/ui/Listings'
import Filterarea from '../components/ui/Filterarea'
import Layout from '../components/layout'
import products from '../components/productDetails'

import React from "react"
import { Component } from "react"


export default class Real extends Component{
  constructor (){
    super()
    this.state = {
      name: 'joe',
      products,
      min_price:0,
      max_price:1000000,
      min_floor_space:0,
      max_floor_space:50000,
      fenced_with_gate: false,
      elevator: false,
      gym:false,
      pool:false, 
      care_taker:false,
      water_supply:false,
      filteredData: products
    }
     this.change = this.change.bind(this)
     this.filteredData = this.filteredData.bind(this)
  }
   change(event){
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value
    this.setState({
        [name]:value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })

}
filteredData(){
    var newData = this.state.products.filter((product) => {
      
      console.log (product.price >= this.state.min_price)
      if (product.price < this.state.min_price){
        console.log(product)
      }
      return (product.price >= this.state.min_price)

    })
    this.setState({
      filteredData: newData
    })
}
 render (){
    //  console.log(this.state)
     return(
     <Layout>
      <Head>
      <title>Real Estate App</title>
      {/* font awesome cdn */}
      <script src="https://kit.fontawesome.com/c41b0435b9.js" crossOrigin="anonymous"></script>
      <script type='text/javascript' src='js/main.js'></script>
     </Head>
      <div className='container' >
      <Header />
      <section id='content-area' >
        
      
      <Filterarea  change={this.change} globalState={this.state}/>
      <Listings products={this.state.filteredData} />
      </section>
     

    </div>
  </Layout>




     )
}
}
