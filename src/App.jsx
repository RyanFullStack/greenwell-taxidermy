import cardFront from './images/CardFront.jpg'
import cardBack from './images/CardBack.jpg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Future Home of Greenwell's Taxidermy</h1>
        <p>Contact us for pricing and availability at:</p>
        <div className='cards'>
        <img src={cardBack} /> <br />
        <img src={cardFront} />
        </div>
      </div>
    </>
  )
}

export default App
