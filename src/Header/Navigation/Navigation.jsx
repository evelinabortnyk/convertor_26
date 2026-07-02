import logo from './img/logo.svg'
import './navigation.css'
import {linksArr} from '../../assets/data.js'

function Navigation () {
    
    return (
        <>
            <div className="navi-wrap">
                <div className="navi-container logo-wrap"><img src={logo} alt='logo' /><p>Chip Challenge</p></div>
                <nav className='navi-container navigation'>
                    {linksArr.map((link, index) => (
                        <li key={index}><a href={link.link}>{link.title}</a></li>
                    ))}
                </nav>
                <a href='#' className='navi-container navi-btn'><div className='navi-btn--icon'></div>Personal account</a>
            </div>
        </>
    )
}

export default Navigation