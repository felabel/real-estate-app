
const Filterarea = () => {
    return (
        <section id='filter'>
            <div className='inside'>
            <h4>Filter</h4>
            <select name='state' className='filters area'>
                <option>Uyo</option>
            </select>
            <select name='area' className='filters area'>
                <option>Nwaniba</option>
            </select>
            <select name='housetype' className='filters housetype'>
                <option>one room</option>
                <option>self con</option>
                <option>one bedroom flat</option>
                <option>two bedroom flat</option>
                <option>storey building</option>
            </select>
            {/* price components */}
            <div className='filters price'>
                <span className='title'>Price</span>
                <input type='text' name='min-price' className='min-price' />
                <input type='text' name='max-price' className='max-price' />
            </div>
            {/* fllor space */}
            <div className='filters floor-space'>
                <span className='title'>Floor Space</span>
                <input type='text' name='min-floor-space' className='min-floor-space' />
                <input type='text' name='max-floor-space' className='max-floor-space' />
            </div>
           {/* facilities area */}
           <div className='filters extras facilities'>
               <span className='title'>Facilities</span>
               <label htmlFor='extras'>
                   <span>Elevators</span> 
                    <input type='checkbox' value='elevator' name='extras'/>
               </label>
               <label htmlFor='extras'>
                   <span>Water supply</span> 
                    <input type='checkbox' value='water supply' name='extras'/>
               </label>
               <label htmlFor='extras'>
                   <span>Care Taker</span> 
                    <input type='checkbox' value='care taker' name='extras'/>
               </label>
               <label htmlFor='extras'>
                   <span>Fence with Gate</span> 
                    <input type='checkbox' value='fenced with gate' name='extras'/>
               </label>
               <label htmlFor='extras'>
                   <span>Gym</span> 
                    <input type='checkbox' value='gym' name='extras'/>
               </label>
               <label htmlFor='extras'>
                   <span>swimming pool</span> 
                   <input type='checkbox' name='extras'/>
               </label>
           </div>
           </div>


            
        </section>
    )
}

export default Filterarea
