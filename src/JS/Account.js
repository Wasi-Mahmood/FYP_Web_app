import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Loginform from '../NavItems/Js/Loginform'

function Account() {
  return (
    <div>
        <div className='account__header'>
        <Header/>        
        </div>
        <div className='account__loginform'>
        <Loginform/>
        </div>
        <div className='account__footer'>
        <Footer/>
        </div>
      </div>
  )
}

export default Account