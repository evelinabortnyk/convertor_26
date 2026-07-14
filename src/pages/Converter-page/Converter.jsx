import { useEffect, useState } from 'react';
import './converter.css'
import calendar from './img/calendar-vector.svg'
import reversIcon from './img/revers-vector.svg'

function Converter() {
    const today = new Date().toISOString().split("T")[0]

    const [currentValues, setCurrentValues] = useState({ 'from': 'UAH', 'to': 'USD', 'amount': 1000, 'date': today, 'result': 38.7 })
    const [results, setResults] = useState([])

    const currenciesArr = [
        { 'title': 'UAH', },
        { 'title': 'USD', },
        { 'title': 'EUR', },
    ]

    function getRate(obj) {

        async function getCurrencies() {
            const response = await fetch(`https://api.frankfurter.dev/v2/rate/${obj.from}/${obj.to}?date=${obj.date}`);
            const data = await response.json()

            getResult(data.rate, obj)
        }
        getCurrencies()
    }

    function handleChange(optionValue, value) {
        const data = {
            ...currentValues, [optionValue]: value
        }
        setCurrentValues(data)
        getRate(data)
    }

    function getResult(rate, obj) {
        const data = {
            ...obj, 'result': obj.amount * rate
        }
        setCurrentValues(data)
    }

    function saveResult() {
        const data = [
            ...results, currentValues
        ]
        setResults(data)
    }
    function revers() {
        const data = {
            ...currentValues,
            'from' : currentValues.to,
            'to' : currentValues.from,
            'amount' : currentValues.result,
            'result' : currentValues.amount,
            'date' : currentValues.date,
        }
        setCurrentValues(data)
    }

    return (
        <main id='converter'>
            <div className='main-block main-block--converter'>
                <div className='main-block--wrap converter-wrap'>
                    <h3 className='convertor-title '>Currency converter</h3>
                    <div className='columns-wrap converter-block'>
                        <div className="main-column converter-column">
                            <label htmlFor="count-have column-part">I have:</label>
                            <div className="feilds-wrap column-part">
                                <input type="number" id='feild-wrap' placeholder={currentValues.amount} className='feild feild--input' onBlur={(e) => handleChange('amount', e.target.value)} />
                                <select name="currentes" id="currentes" value={currentValues.from} className='feild feild--select feild--vector' onChange={(e) => handleChange('from', e.target.value)}>
                                    {currenciesArr.map((current, index) => (
                                        <option key={index} value={current.title}>{current.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='date-wrap column-part'>
                                <input type="date" defaultValue={today} max={today} className='feild feild--input feild--data feild--vector' onChange={(e) => handleChange('date', e.target.value)} />
                                <img src={calendar} alt="calendar" className='calendar-icon' />
                            </div>

                        </div>
                        <button className='revers--icon' onClick={()=>revers(currentValues)}><img src={reversIcon} alt="revers" /></button>
                        <div className="main-column converter-column right-column">
                            <label htmlFor="count-have column-part">I want to buy:</label>
                            <div className="feilds-wrap column-part">
                                <input type="number" id='feild-wrap' placeholder={(+currentValues.result).toFixed(2)} className='feild feild--input' />
                                <select value={currentValues.to} name="currentes" id="currentes" className='feild feild--select feild--vector' onChange={(e) => handleChange('to', e.target.value)}>
                                    {currenciesArr.map((current, index) => (
                                        <option key={index} value={current.title}>{current.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='button-wrap column-part'>
                                <button className='feild converter--button' onClick={() => saveResult()}>Save the result</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='main-block main-block--history'>
                <div className="main-block--wrap history--wrap">
                    <div className='history--header'>
                        <h3>Conversion history</h3>
                        <button className='feild converter--button history--btn' onClick={() => setResults([])}>Clear history</button>
                    </div>
                    <div className="columns-wrap histori-main-block">
                        {results.map((item, index) => (
                            <div className="history-data-wrap" key={index}>
                                <p className='history-data--date'>{item.date}</p>
                                <p className='history-data--count history-data--have'>{item.amount} {item.from}</p>
                                <p className='history-data--vector'></p>
                                <p className='history-data--count history-data--buy'>{item.result} {item.to}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Converter