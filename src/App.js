import React, { Component } from 'react';
import Header from './Navbar.js'
import Introduction from'./Introduction'
import Services from './Services'
import Culture from './Culture'
import Platform from './Platform'
import Change from './Change'
import Itemlist from './Itemlist'
import Footer from './Footer'


import './App.css';

const Tab=[{
  id:'1',
  image: 'https://www.docplanner.com/images/warsaw.png',
  title: "Warsaw",
  button : "SEE OPENINGS" ,
},
{
  id:'2',
  image: 'https://www.docplanner.com/images/barcelona.png',
  title: "Barcelona",
  button : "SEE OPENINGS" ,
 },
 {
  id:'3',
  image: 'https://www.docplanner.com/images/istanbul.png',
  title: "Istanbul",
  button : "SEE OPENINGS" ,
 },
 {
  id:'4',
  image: 'https://www.docplanner.com/images/rome.png',
  title: "Rome",
  button : "SEE OPENINGS" ,
 },
 {
  id:'5',
  image:  'https://www.docplanner.com/images/mexico-city.png',
  title: "Mexico",
  button : "SEE OPENINGS" ,
 },
 {
  id:'6',
  image: 'https://www.docplanner.com/images/curitiba.png',
  title: "Curitiba",
  button : "SEE OPENINGS" ,
 }
]

class App extends Component {
  render() {
    return (<div className='docplannerapp'>
      <Header /> 
      <Introduction/> 
      <Services/> 
      <Culture/>
      <Platform/>
      <Change/>
      <Itemlist  tab={Tab} />
      <Footer/>

      </div>

    );
  }
}

export default App;
