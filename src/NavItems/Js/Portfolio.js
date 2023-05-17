import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import '../../NavItems/Css/Portfolio.css'
import stockimage from '../../Img/Portfolioimage/stockimage.jpg'

function Portfolio() {
  return (
    <div>
        <div>
            <Header/>
        </div>
    <main>
      <section id="prices" className='Port__section'>
        <h2>Stock Prices</h2>
        <table className='Port__table'>
          <tr>
            <th>Stock</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
          <tr>
            <td>APPL</td>
            <td>145.03</td>
            <td>+2.56</td>
          </tr>
          <tr>
            <td>GOOG</td>
            <td>890.78</td>
            <td>-1.35</td>
          </tr>
        </table>
      </section>
      <section id="graph">
        <h2>Performance Graphs</h2>
        <img src={stockimage} alt="stockimage" className='Port__image'/>
      </section>
      <div className='Port__news'>
      <section >
        <h2>Financial News</h2>
        <ul>
          <li>Amazon to acquire Whole Foods Market for $13.7 billion</li>
          <li>Facebook stock drops 5% after data privacy scandal</li>
        </ul>
      </section>
      </div>
    </main>
    <div>
        <Footer/>
    </div>
    
    </div>
  )
}

export default Portfolio