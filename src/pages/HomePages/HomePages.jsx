import './home-pages.css'
import { Link } from 'react-router-dom'

function MainContainer () {

    return(
        <div className="blocks-container main-container">
            <div className="block-wrap main-text-block">
                <h2>Currency convertor</h2>
                <p>The predominant activity of the banking group for the last four reporting quarters is 50 percent or more.</p>
                <Link to='converter'><button className="block-btn main-btn">Convert currency</button></Link>
            </div>
            <div className="block-wrap main-img-block"></div>
        </div>
    )
}
export default MainContainer