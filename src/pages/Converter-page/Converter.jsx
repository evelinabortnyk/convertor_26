import { useEffect, useState } from 'react';
import './converter.css'
import calendar from './img/calendar-vector.svg'
import revers from './img/revers-vector.svg'

function Converter() {
    const today = new Date().toISOString().split("T")[0]

    const [rate, setRate]= useState()
    const [currentValues, setCurrentValues]= useState({'from': 'UAH',  'to': 'USD', 'amount': 1000, 'date': today, 'result': 38.7})

    function getRate(obj){

        async function getCurrencies() {
            const response = await fetch(`https://api.frankfurter.dev/v2/rate/${obj.from}/${obj.to}?date=${obj.date}`);
            const data = await response.json()
            setRate(data.rate)
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

    function getResult (rate, obj) {
        const data = {
            ...obj, 'result': obj.amount * rate
        }
        setCurrentValues(data)
    }

    const currenciesArr = [
        { 'title': 'UAH', },
        { 'title': 'USD', },
        { 'title': 'EUR', },
    ]

    return (
        <main>
            <div className='main-block main-block--converter'>
                <div className='main-block--wrap converter-wrap'>
                    <h3 className='convertor-title '>Currency converter</h3>
                    <div className='columns-wrap converter-block'>
                        <div className="main-column converter-column">
                            <label htmlFor="count-have column-part">I have:</label>
                            <div className="feilds-wrap column-part">
                                <input type="number" id='feild-wrap' placeholder={(currentValues.amount).toFixed(2)} className='feild feild--input' onBlur={(e)=> handleChange('amount',e.target.value )}/>
                                <select name="currentes" id="currentes" className='feild feild--select feild--vector' onChange={(e)=>handleChange('from', e.target.value)}>
                                    {currenciesArr.map((current, index) => (
                                        <option key={index} value={current.title}>{current.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='date-wrap column-part'>
                                <input type="date" defaultValue={today} max={today} className='feild feild--input feild--data feild--vector' onChange={(e) => handleChange('date', e.target.value)}/>
                                <img src={calendar} alt="calendar" className='calendar-icon' />
                            </div>

                        </div>
                        <button className='revers--icon'><img src={revers}  alt="" /></button>
                        <div className="main-column converter-column right-column">
                            <label htmlFor="count-have column-part">I want to buy:</label>
                            <div className="feilds-wrap column-part">
                                <input type="number" id='feild-wrap' placeholder={(currentValues.result).toFixed(2)} className='feild feild--input' />
                                <select defaultValue='USD' name="currentes" id="currentes" className='feild feild--select feild--vector' onChange={(e)=> handleChange('to', e.target.value)}>
                                    {currenciesArr.map((current, index) => (
                                        <option key={index}  value={current.title}>{current.title}</option>
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
                <div className="main-block--wrap history--wrap">
                    <div className='history--header'>
                        <h3>Conversion history</h3>
                        <button className='feild converter--button history--btn'>Clear history</button>
                    </div>
                    <div className="columns-wrap histori-main-block">
                        {/* <div className="history-data-wrap">
                            <p className='history-data--date'>25.11.2020</p>
                            <p className='history-data--count history-data--have'>1000 UAH</p>
                            <p className='history-data--vector'></p>
                            <p className='history-data--count history-data--buy'>36,65 USD</p>
                        </div> */}
                    </div>  
                </div>
                                       
            </div>
        </main>
    )
}

export default Converter