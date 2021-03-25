export default function products(props) {
    // if(products == undefined || products.length == 0){
    //     return 'sorry your search did not match any available property'
    // }
    return (
        <div className='col-md-3'>
        <div className='listing'>
        <div className='listing-image' style ={{backgroundImage: `url(${props.backgroundImage})`}}>
            <span className='address'>{props.address}</span>
            {/* card back */}
            <div className='details'>
                <div className='col-md-2'>
                    <div className='agent-img'
                    style ={{backgroundImage: `url(${props.agentimage})`}}
                    > </div>
                        {/* <img src={props.agentimage} alt=''></img></div> */}
                </div>
                
                <div className='col-md-9'>
                <div className='agent-details'>
                    <span className='agent-name'>{props.name}</span>
                    <span className='post-date'>{props.date}</span>
                </div>
                {/* apartment details */}
                <div className='listing-details'>
                    <div className='floor-space'>
                        {/* <i className='f'>sq</i> */}
                        <i className="far fa-square"></i> 
                            <span>&nbsp; {props.size}&sup2;</span>
                    </div>
                    <div className='bedrooms'>
                    <i className='fa fa-bed'  ></i> 
                        <span>&nbsp; {props.bedrooms}</span>

                    </div>
                    <div className='view-listing'><a href='/'>{props.view}</a></div>
                    
                </div>
                </div >{/*closes col*/}
            </div>
        </div>
        {/* info under image */}
        <div className='bottom-info'>
            <span className='price'>N{props.price}/Yr</span>
            <span className='required-rent' >{props.required}</span>
            <span className='location'>
            <i className="fas fa-map-marker-alt"></i>
                {/* <i className='fa'>LO</i> */}
                {props.location}
            </span>

        </div>
    </div>
    </div>
    
    
    )
}
