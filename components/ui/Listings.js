import Products from '../Products'
import products from '../productDetails'
const Listings = () => {
    const productComponents = products.map(product => <Products key={product.id} address={product.address} agentimage={product.agentimage} name={product.name} date={product.date} size={product.size} bedrooms={product.bedrooms}  view={product.view}  price={product.price}  required={product.required}  location={product.location} backgroundImage={product.backgroundImage} />)

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
