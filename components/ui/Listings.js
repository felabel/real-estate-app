import Products from '../Products'
import products from '../productDetails'

const Listings = () => {
    const productComponents = products.map(product => <Products key={product.id} address={product.address} agentimage={product.agentimage} name={product.name} date={product.date} size={product.size} bedrooms={product.bedrooms}  view={product.view}  price={product.price}  required={product.required}  location={product.location} backgroundImage={product.backgroundImage} />)
            if(products == undefined || products.length == 0){
                console.log(products.length)
                // return 'sorry your search did not match any available property'
            }
    return (
        <section className='listings'>
            <section className='search-area'>
                <input type='text' name='search' />

            </section>
            <section className='sortby-area'>
                <div className='results'>390 results found</div>
                <div className='sort-options'>
                    <select className='sortby' name='sortby'>
                        <option value='price-asc'>Highest price</option>
                        <option value='price-dsc'>Lowest price</option>
                    </select>
                    <div className='view'>
                        
                        <i className='fa fa-th-list' ></i>
                        <i className='fa fa-th' ></i>
                    </div>
                </div>
            </section>
            <section className='listings-result'>
            {productComponents}
               
                 

            </section>
            
            
            <section className='pagination'>
                <ul className='pagination-nums'>
                    <li>Prev</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>Next</li>
                </ul>
            </section>
            
        </section>
    )
}

export default Listings

//  class Listings extends Component {
//      constructor (){
//          super()
//          this.state = {
//              name: 'joe'
//          }
//          this.loopProducts = this.loopProducts.bind(this)
//        }
//        loopProducts () {
//          var {products} = this.props
//          if(products == undefined || products.length == 0){
//              console.log(products.length)
//              return 'sorry your filter did not match any listing'
//          }
//          return products.map((product, index) => {
//            return (
//                         <section className='listings'>
//                             <section className='search-area'>
//                                 <input type='text' name='search' />
                
//                             </section>
//                             <section className='sortby-area'>
//                                 <div className='results'>390 results found</div>
//                                 <div className='sort-options'>
//                                     <select className='sortby' name='sortby'>
//                                         <option value='price-asc'>Highest price</option>
//                                         <option value='price-dsc'>Lowest price</option>
//                                     </select>
//                                     <div className='view'>
                                        
//                                         <i className='fa fa-th-list' ></i>
//                                         <i className='fa fa-th' ></i>
//                                     </div>
//                                 </div>
//                             </section>
//                             <section className='listings-result'>
//                             {/* {productComponents} */}
//                             <div className='col-md-3' key={index}>
//                                 <div className='listing'>
//                                 <div className='listing-image' style ={{backgroundImage: `url(${product.backgroundImage})`}}>
//                                     <span className='address'>{product.address}</span>
//                                     {/* card back */}
//                                     <div className='details'>
//                                         <div className='col-md-2'>
//                                             <div className='agent-img'
//                                             style ={{backgroundImage: `url(${product.agentimage})`}}
//                                             > </div>
//                                                 {/* <img src={props.agentimage} alt=''></img></div> */}
//                                         </div>
                                        
//                                         <div className='col-md-9'>
//                                         <div className='agent-details'>
//                                             <span className='agent-name'>{product.name}</span>
//                                             <span className='post-date'>{product.date}</span>
//                                         </div>
//                                         {/* apartment details */}
//                                         <div className='listing-details'>
//                                             <div className='floor-space'>
//                                                 {/* <i className='f'>sq</i> */}
//                                                 <i className="far fa-square"></i> 
//                                                     <span>&nbsp; {product.size}&sup2;</span>
//                                             </div>
//                                             <div className='bedrooms'>
//                                             <i className='fa fa-bed'  ></i> 
//                                                 <span>&nbsp; {product.bedrooms}</span>

//                                             </div>
//                                             <div className='view-listing'><a href='/'>{product.view}</a></div>
                                            
//                                         </div>
//                                         </div >{/*closes col*/}
//                                     </div>
//                                 </div>
//                                 {/* info under image */}
//                                 <div className='bottom-info'>
//                                     <span className='price'>N{product.price}/Yr</span>
//                                     <span className='required-rent' >{product.required}</span>
//                                     <span className='location'>
//                                     <i className="fas fa-map-marker-alt"></i>
//                                         {/* <i className='fa'>LO</i> */}
//                                         {product.location}
//                                     </span>

//                                 </div>
//                             </div>
//     </div>
    
                               
                                 
                
// //                             </section>
                            
                            
// //                             <section className='pagination'>
// //                                 <ul className='pagination-nums'>
// //                                     <li>Prev</li>
// //                                     <li>1</li>
// //                                     <li>2</li>
// //                                     <li>3</li>
// //                                     <li>4</li>
// //                                     <li>5</li>
// //                                     <li>Next</li>
// //                                 </ul>
// //                             </section>
                            
// //                         </section>
//                     )
//         })
        
     
//     }
// }
// export default Listings
