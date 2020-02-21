import React, { useState, useEffect } from 'react';
import apodData from '../nasa_data/apod';
import functions from '../functions';

const CustomApod = () => {
    const [date, setDate] = useState(new Date());

    const [data, setData] = useState({
        imageUrl: '',
        title: '',
        description: ''
    });

    const changeDate = e => {
        setDate(functions.convertFromUniversalDate(e.target.value));
    }
    
    useEffect(() => {
        apodData.getData(date)
            .then(res => {
                const { url, title, explanation } = res.data;
                
                setData({
                    imageUrl: url,
                    title: title,
                    description: explanation
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, [date]);
    
    return (
        <section className='custom-apod'>
            <div className='content'>
                <div>
                    <div className='date-container'>
                        <p>Custom Date</p>
                        <input type='date' onChange={changeDate} max={functions.convertToUniversalDate(new Date())}></input>
                    </div>
                    <div>
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                </div>
                <img src={data.imageUrl} alt={data.title} />
            </div>
        </section>
    )
}

export default React.memo(CustomApod);
