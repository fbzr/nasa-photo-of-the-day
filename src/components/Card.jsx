import React, { useState, useCallback, useEffect } from 'react';
import apodData from '../nasa_data/apod';


const Card = ({ date, showModal, setModalApod }) => {
    const [data, setData] = useState({
        url: '',
        title: '',
        description: '',
        date: ''
    });

    useEffect(() => {
        apodData.getData(date)
            .then(res => {
                const { url, title, explanation, date } = res.data;
                
                setData({
                    url: url,
                    title: title,
                    description: explanation,
                    date: date
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, [date]);

    const activeModal = useCallback(() => {
        setModalApod(data);
        showModal();
    }, [showModal, setModalApod, data]);

    console.log('its rendering card');
    return (
        <div className='card' onClick={activeModal}>
            <div className='img-container'>
                <img src={data.url} alt={data.title} />
            </div>
            <h4>{data.title}</h4>
            <p>{data.description.slice(0, 50)}</p>
        </div>
    )
}

export default React.memo(Card);
