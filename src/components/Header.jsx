import React, { useState, useEffect } from 'react';
import apodData from '../nasa_data/apod';

const Header = () => {
    const [data, setData] = useState({
        imageUrl: '',
        title: '',
        description: '',
        mediaType: ''
    });

    useEffect(() => {
        apodData.getData()
          .then(res => {
            const { url, title, explanation, media_type } = res.data;
            setData({
                imageUrl: url,
                title: title,
                description: explanation,
                mediaType: media_type
            });            
          })
          .catch(err => {
            console.log(err);
          })
      }, []);

    return (
        <div className='header'>
            { data.mediaType === 'image' ? 
              <img className='background-image' src={data.imageUrl} alt={data.title} /> 
              :
              null
            }
            <h1 className='title'>Astronomy Picture Of The Day</h1>
            <h2 className='subtitle'>{data.title}</h2>
        </div>
    )
}

export default React.memo(Header);
