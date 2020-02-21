import React, { useState, useEffect } from 'react';
import apodData from '../nasa_data/apod';

const Header = () => {
    const [data, setData] = useState({
        imageUrl: '',
        title: '',
        description: ''
    });

    useEffect(() => {
        apodData.getData()
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
            <h1 className='title'>Astronomy Picture Of The Day</h1>
            <h2 className='subtitle'>{data.title}</h2>
        </div>
    )
}

export default React.memo(Header);
