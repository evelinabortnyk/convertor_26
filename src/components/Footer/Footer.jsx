import logo from '../Header/Navigation/img/logo.svg'
import './footer.css'
import {linksArr} from '../../assets/data.js'

function Footer () {
    const iconsArr = [
        {'name': 'facebook', 'link': 'https://www.facebook.com/', 'position': '102px',},
        {'name': 'inst', 'link': 'https://www.instagram.com/', 'position': '78px',},
        {'name': 'twitter', 'link': 'https://x.com/', 'position': '47px',},
        {'name': 'yooutube', 'link': 'https://www.youtube.com/', 'position': '16px',},
    ]
    return (
        <footer>
            <div className="footer-column">
                <div className="footer-column--title"><img src={logo} alt='logo' /><p>Chip Challenge</p></div>
                <p className='footer-column--info'>
                    19 Khreshchatyk St., Kyiv, 04128<br />
                    NBU License No. 156<br />
                    © PJSC ChipChange, 2019–2023
                </p>
            </div>
            <nav className="footer-column footer-column--nav">
                {linksArr.map((link, index) => (
                    <a key={index} className='footer-link' href={link.link}>{link.title}</a>
                ))}
            </nav>
            <div className="footer-column">
                <a href='tel:3773' className='footer-column--title'><p className='icon phone-icon'></p>3773</a>
                <p className='footer-column--info'>24/7 support</p>
            </div>
            <div className="footer-column">
                <a href='tel:88001112233' className='footer-column--title'><p className='icon landline-phone-icon'></p>8 800 111 22 33</a>
                <p className='footer-column--info'>Free for calls within Ukraine</p>
            </div>
            <div className="footer-column footer-column--contacts"> 
                {iconsArr.map((icon,index)=> (
                    <a key={index} href={icon.link} alt={icon.title} className={`icon icon-contacts icon-${icon.name}`} style={{ backgroundPositionX: `${icon.position}`}}></a>
                ))}
            </div>
        </footer>
    )
}

export default Footer