import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png'
import './homepage.css'

function Homepage() {

    return <div>
        <h1>Greenwell's Taxidermy</h1>
        <h4>Back To Life</h4>
        <p>Contact us for pricing and availability at:</p>
        Sabrina Greenwell, CEO, Owner <br />
        <a href='tel:8157515478'>(815)-751-5478</a> <br />
        111 Oak St. <br />
        Davis Junction, IL 61020 <br />
        <a href='mailto:greenwellstaxidermy@gmail.com'>GreenwellsTaxidermy@gmail.com</a> <br/><br/><br/><br/>
        <NavLink to='/businesscard'>VIEW OUR BUSINESS CARD</NavLink>
        <div className='logo'><img src={logo} /></div>
    </div>
}

export default Homepage;
