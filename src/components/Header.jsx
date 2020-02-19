import React, { useState, useEffect } from 'react'
import apod from '../nasa_data/apod';

const Header = () => {
    const [data, setData] = useState({
        imageUrl: '',
        title: '',
        description: ''
    });

    // useEffect(() => {
    //     apod.getData()
    //       .then(res => {
    //         const { url, title, explanation } = res.data;
    //         setData({
    //             imageUrl: url,
    //             title: title,
    //             description: explanation
    //         });            
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       })
    //   }, []);

    return (
        <div>
            <p>{`Title ${data.title}`}</p>
            <p>{`Descriptiion ${data.description}`}</p>
            <p>{`url ${data.imageUrl}`}</p>
        </div>
    )
}

export default Header
