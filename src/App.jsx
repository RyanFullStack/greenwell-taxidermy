import cardFront from './images/CardFront.jpg'
import cardBack from './images/CardBack.jpg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Future Home of Greenwell's Taxidermy</h1>
        <p>Contact us for picing and quotes at:</p>
        <div className='cards'>
        <img src={cardFront} /> <br />
        <img src={cardBack} />
        </div>
      </div>
    </>
  )
}

export default App
