import './converter.css'

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
                    <h3>Currency converter</h3>
                    <div className='converter-block'>
                        <div className="converter-column">
                            <label htmlFor="count-have">I have:</label>
                            <div className="feilds-wrap">
                                <input type="number" id='feild-wrap' className='feild feild-input'/>
                                <select name="cuttentes" id="cuttentes" className='feild'>
                                    {currenciesArr.map((current, index) => (
                                        <option key={index} value={current.title}>{current.title}</option>
                                    ))}
                                </select>
                            </div>
                            
                        </div>
                        <div className="converter-column"></div>
                    </div>
                    
                </div>
            </div>
            <div className='main-block main-block--history'>

            </div>
        </main>
    )
}

export default Converter