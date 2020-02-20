import React, { useState, useEffect } from 'react';
import apodData from '../nasa_data/apod';


const Card = ({date, setModal}) => {
    const [data, setData] = useState({
        imageUrl: '',
        title: '',
        description: ''
    });



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

    const showModal = () => {
        setModal({
            active: true,
            url: data.imageUrl
        });
    }

    return (
        <div className='card' onClick={showModal}>
            <div className='img-container'>
                <img src={data.imageUrl} alt={data.title} />
            </div>
            <h4>{data.title}</h4>
            <p>{data.description.slice(0, 50)}</p>
        </div>
    )
}

export default Card
