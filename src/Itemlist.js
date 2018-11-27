import React from 'react';
import  Itemcity from './Itemcity'

const Itemlist=(props)=>
    <div className="itemCityApp" >
      {  props.tab.map((el,i)=>{return <Itemcity  item = {el} key={i} />

        })}
    </div>

export default  Itemlist;