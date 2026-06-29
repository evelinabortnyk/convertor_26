import Navigation from "./Navigation/Navigation"
import './header.css'
import card from './img/card.png'

function Header () {

    return (
        <header>
            <Navigation/>
            <div className="header-main">
                <div className="header-main--container">
                    <h1>Chip Challenge</h1>
                    <p>Currency Exchanger - Educational</p>
                    <button className="header-btn">Currency converter</button>
                </div>
                <img src={card} alt="card"  className="header-main--container header-main--img"/>
            </div>
        </header>
    )
}

export default Header