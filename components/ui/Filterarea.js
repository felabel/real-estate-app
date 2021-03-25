import Head from 'next/head'
import React from "react"

import { Component } from "react"

// import search from '../../public/js/main'
class Filterarea extends Component {
    constructor () {
        super()
        this.state = {
            name: 'joe'
        }
    }
    render(){
        return (
        
                    <section id='filter'>
                        <Head>
                        </Head>
                        <div className='inside'>
                        
                        <h4>Filter</h4>
                        <select name='state' className='filters area' id='locate' onChange={this.props.change} >
                            <option >Uyo</option>
                            <option >Eket</option>
                            <option >Ikot Ekpene</option>
                        </select>
                        <select name='area' className='filters area' id='streetname' onChange={this.props.change}>
                            <option >Oron Road</option>
                            <option >Abak Road</option>
                            <option >Ewet Housing</option>
                            <option >Osongama Estate</option>
                            <option >Nwaniba</option>
                            <option >Ikpa Road</option>
                            <option >Itu Road</option>
                            <option >Udoette</option>
                            <option >Ikot Ekpene Road</option>
                        </select>
                        <select name='housetype' className='filters housetype' id='housetype' onChange={this.props.change}>
                            <option>one room</option>
                            <option>self con</option>
                            <option>one bedroom flat</option>
                            <option>two bedroom flat</option>
                            <option>storey building</option>
                        </select>
                        <div className='filters price'>
                            <span className='title'>Price</span>
                            <input type='text' name='min_price' className='min-price' onChange={this.props.change} value={this.props.globalState.min_price}/>
                            <input type='text' name='max_price' className='max-price' onChange={this.props.change} value={this.props.globalState.max_price}/>
                        </div> 
                         <div className='filters floor-space'>
                            <span className='title'>Floor Space</span>
                            <input type='text' name='min_floor_space' className='min-floor-space' value={this.props.globalState.min_floor_space} onChange={this.props.change}/>
                            <input type='text' name='max_floor_space' className='max-floor-space' value={this.props.globalState.max_floor_space} onChange={this.props.change}/>
                        </div>
                       <div className='filters extras facilities'>
                           <span className='title'>Facilities</span>
                           <label htmlFor='extras'>
                               <span>Elevators</span> 
                                <input type='checkbox' className='facility' id='elevator' value='elevator' name='elevator' onChange={this.props.change} />
                           </label>
                           <label htmlFor='extras'>
                               <span>Water supply</span> 
                                <input type='checkbox' className='facility' id='water' value='water supply' name='water_supply'onChange={this.props.change} />
                           </label>
                           <label htmlFor='extras'>
                               <span>Care Taker</span> 
                                <input type='checkbox'className='facility' id='care-taker'  value='care taker' name='care_taker' onChange={this.props.change} />
                           </label>
                           <label htmlFor='extras'>
                               <span>Fence with Gate</span> 
                                <input type='checkbox' className='facility' id='fence' value='fenced with gate' name='fenced_with_gate' onChange={this.props.change} />
                           </label>
                           <label htmlFor='extras'>
                               <span>Gym</span> 
                                <input type='checkbox' className='facility' id='gym' value='gym' name='gym' onChange={this.props.change} />
                           </label>
                           <label htmlFor='extras'>
                               <span>swimming pool</span> 
                               <input type='checkbox' className='facility' id='pool' value='pool' name='pool' onChange={this.props.change} />
                           </label>
                       </div>
                       </div>
                       <div className='filtersearch' onClick={this.props.change}>Search</div>
            
            
                        
                       <script src='js/main.js' type='text/javascript'></script>
                    </section>
                )

    }
}
export default Filterarea


// const Filterarea = () => {
//     return (
        
//         <section id='filter'>
//             <Head>
                 
                
//             </Head>
//             <div className='inside'>
            
//             <h4>Filter</h4>
//             <select name='state' className='filters area' id='locate' onChange={search} >
//                 <option >Uyo</option>
//                 <option >Eket</option>
//                 <option >Ikot Ekpene</option>
//             </select>
//             <select name='area' className='filters area' id='streetname' onChange={search}>
//                 <option >Oron Road</option>
//                 <option >Abak Road</option>
//                 <option >Ewet Housing</option>
//                 <option >Osongama Estate</option>
//                 <option >Nwaniba</option>
//                 <option >Ikpa Road</option>
//                 <option >Itu Road</option>
//                 <option >Udoette</option>
//                 <option >Ikot Ekpene Road</option>
//             </select>
//             <select name='housetype' className='filters housetype' id='housetype' onChange={search}>
//                 <option>one room</option>
//                 <option>self con</option>
//                 <option>one bedroom flat</option>
//                 <option>two bedroom flat</option>
//                 <option>storey building</option>
//             </select>
//             <div className='filters price'>
//                 <span className='title'>Price</span>
//                 <input type='text' name='min-price' className='min-price' />
//                 <input type='text' name='max-price' className='max-price' />
//             </div> 
//              <div className='filters floor-space'>
//                 <span className='title'>Floor Space</span>
//                 <input type='text' name='min-floor-space' className='min-floor-space' />
//                 <input type='text' name='max-floor-space' className='max-floor-space' />
//             </div>
//            <div className='filters extras facilities'>
//                <span className='title'>Facilities</span>
//                <label htmlFor='extras'>
//                    <span>Elevators</span> 
//                     <input type='checkbox' className='facility' id='elevator' value='elevator' name='elevator' onChange={search} />
//                </label>
//                <label htmlFor='extras'>
//                    <span>Water supply</span> 
//                     <input type='checkbox' className='facility' id='water' value='water supply' name='water supply'onChange={search} />
//                </label>
//                <label htmlFor='extras'>
//                    <span>Care Taker</span> 
//                     <input type='checkbox'className='facility' id='care-taker'  value='care taker' name='care taker' onChange={search} />
//                </label>
//                <label htmlFor='extras'>
//                    <span>Fence with Gate</span> 
//                     <input type='checkbox' className='facility' id='fence' value='fenced with gate' name='fenced with gate' onChange={search} />
//                </label>
//                <label htmlFor='extras'>
//                    <span>Gym</span> 
//                     <input type='checkbox' className='facility' id='gym' value='gym' name='gym' onChange={search} />
//                </label>
//                <label htmlFor='extras'>
//                    <span>swimming pool</span> 
//                    <input type='checkbox' className='facility' id='pool' value='pool' name='extras' onChange={search} />
//                </label>
//            </div>
//            </div>
//            <div className='filtersearch' onClick={search}>Search</div>


            
//            <script src='js/main.js' type='text/javascript'></script>
//         </section>
//     )
// }

// export default Filterarea
