
const Listings = () => {
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
                        
                        <i className='fa fa-th-list' >menu</i>
                        <i className='fa fa-th' >menu</i>
                    </div>
                </div>
            </section>
            <section className='listings-result'>
                <div className='col-md-3'>
                    <div className='listing'>
                    <div className='listing-image'>
                        <span className='address'>142 Nwaniba road</span>
                        {/* card back */}
                        <div className='details'>
                            <div className='col-md-2'>
                                <div className='agent-img'></div>
                            </div>
                            
                            <div className='col-md-9'>
                            <div className='agent-details'>
                                <span className='agent-name'>Nina Smith</span>
                                <span className='post-date'>10/03/2021</span>
                            </div>
                            {/* apartment details */}
                            <div className='listing-details'>
                                <div className='floor-space'>
                                    {/* <i className='f'>sq</i> */}
                                    <i className="far fa-square"></i> 
                                        <span>&nbsp; 1000 ft&sup2;</span>
                                </div>
                                <div className='bedrooms'>
                                <i className='fa fa-bed'  ></i> 
                                    <span>&nbsp; 3</span>

                                </div>
                                <div className='view-listing'><a href='/'>View</a></div>
                                
                            </div>
                            </div >{/*closes col*/}
                        </div>
                    </div>
                    {/* info under image */}
                    <div className='bottom-info'>
                        <span className='price'>N160k / year</span>
                        <span className='required-rent' >Required : 1yr and 6mo </span>
                        <span className='location'>
                        <i className="fas fa-map-marker-alt"></i>
                            {/* <i className='fa'>LO</i> */}
                            Nwaniba, Uyo
                        </span>

                    </div>
                </div>
                </div>
                <div className='col-md-3'>
                    <div className='listing'>
                    <div className='listing-image'>
                        <span className='address'>142 Nwaniba road</span>
                        {/* card back */}
                        <div className='details'>
                            <div className='col-md-2'>
                                <div className='agent-img'></div>
                            </div>
                            
                            <div className='col-md-9'>
                            <div className='agent-details'>
                                <span className='agent-name'>Nina Smith</span>
                                <span className='post-date'>10/03/2021</span>
                            </div>
                            {/* apartment details */}
                            <div className='listing-details'>
                                <div className='floor-space'>
                                    {/* <i className='f'>sq</i> */}
                                    <i className="far fa-square"></i> 
                                        <span>&nbsp; 1000 ft&sup2;</span>
                                </div>
                                <div className='bedrooms'>
                                <i className='fa fa-bed'  ></i> 
                                    <span>&nbsp; 3</span>

                                </div>
                                <div className='view-listing'><a href='/'>View</a></div>
                                
                            </div>
                            </div >{/*closes col*/}
                        </div>
                    </div>
                    {/* info under image */}
                    <div className='bottom-info'>
                        <span className='price'>N160k / year</span>
                        <span className='required-rent' >Required : 1yr and 6mo </span>
                        <span className='location'>
                        <i className="fas fa-map-marker-alt"></i>
                            {/* <i className='fa'>LO</i> */}
                            Nwaniba, Uyo
                        </span>

                    </div>
                </div>
                </div>
                 <div className='col-md-3'>
                    <div className='listing'>
                    <div className='listing-image'>
                        <span className='address'>142 Nwaniba road</span>
                        {/* card back */}
                        <div className='details'>
                            <div className='col-md-2'>
                                <div className='agent-img'></div>
                            </div>
                            
                            <div className='col-md-9'>
                            <div className='agent-details'>
                                <span className='agent-name'>Nina Smith</span>
                                <span className='post-date'>10/03/2021</span>
                            </div>
                            {/* apartment details */}
                            <div className='listing-details'>
                                <div className='floor-space'>
                                    {/* <i className='f'>sq</i> */}
                                    <i className="far fa-square"></i> 
                                        <span>&nbsp; 1000 ft&sup2;</span>
                                </div>
                                <div className='bedrooms'>
                                <i className='fa fa-bed'  ></i> 
                                    <span>&nbsp; 3</span>

                                </div>
                                <div className='view-listing'><a href='/'>View</a></div>
                                
                            </div>
                            </div >{/*closes col*/}
                        </div>
                    </div>
                    {/* info under image */}
                    <div className='bottom-info'>
                        <span className='price'>N160k / year</span>
                        <span className='required-rent' >Required : 1yr and 6mo </span>
                        <span className='location'>
                        <i className="fas fa-map-marker-alt"></i>
                            {/* <i className='fa'>LO</i> */}
                            Nwaniba, Uyo
                        </span>

                    </div>
                </div>
                </div>
                 <div className='col-md-3'>
                    <div className='listing'>
                    <div className='listing-image'>
                        <span className='address'>142 Nwaniba road</span>
                        {/* card back */}
                        <div className='details'>
                            <div className='col-md-2'>
                                <div className='agent-img'></div>
                            </div>
                            
                            <div className='col-md-9'>
                            <div className='agent-details'>
                                <span className='agent-name'>Nina Smith</span>
                                <span className='post-date'>10/03/2021</span>
                            </div>
                            {/* apartment details */}
                            <div className='listing-details'>
                                <div className='floor-space'>
                                    {/* <i className='f'>sq</i> */}
                                    <i className="far fa-square"></i> 
                                        <span>&nbsp; 1000 ft&sup2;</span>
                                </div>
                                <div className='bedrooms'>
                                <i className='fa fa-bed'  ></i> 
                                    <span>&nbsp;3 rooms</span>

                                </div>
                                <div className='view-listing'><a href='/'>View</a></div>
                                
                            </div>
                            </div >{/*closes col*/}
                        </div>
                    </div>
                    {/* info under image */}
                    <div className='bottom-info'>
                        <span className='price'>N160k / year</span>
                        <span className='required-rent' >Required : 1yr and 6mo </span>
                        <span className='location'>
                        <i className="fas fa-map-marker-alt"></i>
                            {/* <i className='fa'>LO</i> */}
                            Nwaniba, Uyo
                        </span>

                    </div>
                </div>
                </div>

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
