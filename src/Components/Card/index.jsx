import { NavLink } from 'react-router-dom'
import cardFront from '../../images/CardFront.jpg'
import cardBack from '../../images/CardBack.jpg'
import './card.css'

function Card() {


    return <div className='cards'>
        <NavLink to='/'>HOME</NavLink> <br />
        <img src={cardBack} /> <br />
        <img src={cardFront} />
    </div>
}

export default Card;
