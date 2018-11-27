import React  from 'react';

const Itemcity=({item})=>{
    return (
        <div className="itemCityApp" key={item.id}>
            <ul  style={{listStyleType: 'none'}}>
                <li>
                    <div> 
                        <img className="cityImage" src={item.image}/> 
                    </div>
                    <div className="cityTB">
                        <h4 className="cityTitle"> {item.title} </h4>
                        <button className="cityButton "> {item.button} </button>    
                    </div>            
                </li>
            </ul>
        </div>
    )
}
export default Itemcity