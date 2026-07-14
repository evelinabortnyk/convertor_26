import logo from './img/logo.svg'
import { Link } from 'react-router-dom'
import './navigation.css'
import { linksArr } from '../../../assets/data'

function Navigation () {
    

    return (
        <>
            <div className="navi-wrap">
                <div className="navi-container logo-wrap"><img src={logo} alt='logo' /><p>Chip Challenge</p></div>
                <nav className='navi-container navigation'>
                    {linksArr.map((link, index) => (
                        link.action === 'contacts' ? (
                            <Link to={link.link} key={index} onClick={()=> document.getElementById('contacts')?.scrollIntoView({behavior: "smooth"})}>
                                <li >{link.title}</li>
                            </Link>
                        ) : (
                            <Link key={index} to={link.link}><li>{link.title}</li></Link>
                        )
                    ))}
                </nav>
                <a href='#' className='navi-container navi-btn'><div className='navi-btn--icon'></div>Personal account</a>
            </div>
        </>
    )
}

export default Navigation