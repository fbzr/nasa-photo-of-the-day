import React, { useState, useEffect } from 'react';
import apod from '../nasa_data/apod';

const Header = () => {
    const [data, setData] = useState({
        imageUrl: '',
        title: '',
        description: ''
    });

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
        <div className='header'>
            <img className='background-image' src={data.imageUrl} alt={data.title} />
            <h1 className='title'>{data.title}</h1>
            <p className='description'>{data.description}</p>
        </div>
    )
}

export default Header
