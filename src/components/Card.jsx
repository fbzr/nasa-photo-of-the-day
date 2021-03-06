import React, { useState, useCallback, useEffect } from 'react';
import apodData from '../nasa_data/apod';
import dateFunctions from '../functions';
import styled from 'styled-components';

const CardDiv = styled.div`
    margin: 15px 0;
`

const Card = ({ date, showModal, setModalApod }) => {
    const [data, setData] = useState({
        url: '',
        title: '',
        description: '',
        date: '',
        mediaType: ''
    });

    useEffect(() => {
        apodData.getData(date)
            .then(res => {
                const { url, title, explanation, date, media_type } = res.data;
                
                setData({
                    url: url,
                    title: title,
                    description: explanation,
                    date: date,
                    mediaType: media_type
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
        <CardDiv className='card' onClick={activeModal}>
            <div className='img-container'>
                { data.mediaType === 'image' ? 
                    <>
                        <i className="fas fa-search-plus"></i>    
                        <img src={data.url} alt={data.title} />
                    </>
                    :
                    <iframe title={data.title} src={ data.url } frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
                }
            </div>
            <div className='text-container'>
                <h4>{data.title}</h4>
                <p>{dateFunctions.convertFromUniversalDate(data.date).toDateString()}</p>
            </div>
        </CardDiv>
    )
}

export default React.memo(Card);
