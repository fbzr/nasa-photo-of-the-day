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
        <CardDiv className='card' onClick={activeModal}>
            <div className='img-container'>
                <i className="fas fa-search-plus"></i>    
                <img src={data.url} alt={data.title} />
            </div>
            <div className='text-container'>
                <h4>{data.title}</h4>
                <p>{dateFunctions.convertFromUniversalDate(data.date).toDateString()}</p>
                {/* <p>{data.description.slice(0, 50)}</p> */}
            </div>
        </CardDiv>
    )
}

export default React.memo(Card);
