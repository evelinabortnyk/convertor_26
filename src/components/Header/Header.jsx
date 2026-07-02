import { Link } from 'react-router-dom'

import Navigation from "./Navigation/Navigation"
import './header.css'
import card from './img/card.png'

function Header () {

    return (
        <header>
            <Navigation/>
            <div className="blocks-container header-container">
                <div className="block-wrap header-block">
                    <h1>Chip Challenge</h1>
                    <p>Currency Exchanger - Educational</p>
                    <button className="block-btn header-btn"><Link to='/converter'>Currency converter</Link></button>
                </div>
                <img src={card} alt="card"  className="block-wrap header-img"/>
            </div>
        </header>
    )
}

export default Header