import React, { useState, useEffect } from 'react';
import apodData from '../nasa_data/apod';
import functions from '../functions';

const CustomDate = () => {
    const [date, setDate] = useState(new Date());

    const [data, setData] = useState({
        imageUrl: '',
        title: '',
        description: ''
    });

    const changeDate = e => {
        setDate(new Date(`${e.target.value}T00:00:00`));
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
        <section>
            <div>
                <p>Custom Date</p>
                <input type='date' onChange={changeDate} max={functions.convertToUniversalDate(new Date())}></input>
            </div>
            <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <img src={data.imageUrl} alt={data.title} />
            </div>
        </section>
    )
}

export default CustomDate
