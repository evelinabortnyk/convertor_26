import './converter.css'
import calendar from './img/calendar-vector.svg'
import revers from './img/revers-vector.svg'

function Converter() {
    const currenciesArr = [
        { 'title': 'UAH', },
        { 'title': 'USD', },
        { 'title': 'EUR', },
    ]

    return (
        <main>
            <div className='main-block main-block--converter'>
                <div className='converter-wrap'>
                    <h3 className='convertor-title '>Currency converter</h3>
                    <div className='converter-block'>
                        <div className="converter-column">
                            <label htmlFor="count-have column-part">I have:</label>
                            <div className="feilds-wrap column-part">
                                <input type="number" id='feild-wrap' placeholder='1000' className='feild feild--input' />
                                <select name="cuttentes" id="cuttentes" className='feild feild--select feild--vector'>
                                    {currenciesArr.map((current, index) => (
                                        <option key={index} value={current.title}>{current.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='date-wrap column-part'>
                                <input type="date" defaultValue={new Date().toISOString().split("T")[0]} className='feild feild--input feild--data feild--vector' />
                                <img src={calendar} alt="calendar" className='calendar-icon' />
                            </div>
                        </div>
                        <img src={revers} className='revers--icon' alt="" />
                        <div className="converter-column right-column">
                            <label htmlFor="count-have column-part">I want to buy:</label>
                            <div className="feilds-wrap column-part">
                                <input type="number" id='feild-wrap' placeholder='38.7' className='feild feild--input' />
                                <select name="cuttentes" id="cuttentes" className='feild feild--select feild--vector'>
                                    {currenciesArr.map((current, index) => (
                                        <option key={index} selected={current.title === 'USD' ? true : false} value={current.title}>{current.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='button-wrap column-part'>
                                <button className='feild converter--button'>Save the result</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='main-block main-block--history'>

            </div>
        </main>
    )
}

export default Converter