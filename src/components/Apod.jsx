import React, { useState, useEffect } from 'react'
import apod from '../nasa_data/apod';
import functions from '../functions';

const Apod = () => {
    const [data, setData] = useState({
        imageUrl: '',
        title: '',
        description: ''
    });

    const date = functions.convertDateToString(new Date());

    useEffect(() => {
        apod.getData()
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
          })
      }, []);

    return (
        <section className='apod'>
            <div>
                <h3>{data.title}</h3>
                <h4>{date}</h4>
                <p>{data.description}</p>
            </div>
            <img src={data.imageUrl} alt={data.title} />
        </section>
    )
}

export default Apod
