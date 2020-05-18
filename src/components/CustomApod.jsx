import React, { useState, useEffect, Fragment } from 'react';
import apodData from '../nasa_data/apod';
import functions from '../functions';

const CustomApod = ({showModal, setModalApod}) => {
    const [date, setDate] = useState(new Date());
    const [dateInput, setDateInput] = useState(functions.convertToUniversalDate(new Date()));

    const [data, setData] = useState({
        url: '',
        title: '',
        description: '',
        date: date,
        mediaType: ''
    });

    const submitDate = e => {
        console.log(dateInput);
        e.preventDefault();
        setDate(functions.convertFromUniversalDate(dateInput));
    }

    const changeDate = e => {
        setDateInput(e.target.value);
    }
    
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

    const activeModal = React.useCallback(() => {
        setModalApod(data);
        showModal();
    }, [showModal, setModalApod, data]);
    
    return (
        <section className='custom-apod'>
            <form onSubmit={submitDate} className='date-container'>
                <label><h4>Select a date:</h4>
                    <input onChange={changeDate} value={dateInput} type='date' max={functions.convertToUniversalDate(new Date())}></input>
                </label>
                <button type='submit'>Submit</button>
            </form>
            <div className='content' >
                <div className='description-wrapper'>
                    <div>
                        <h3 className='title'>{data.title}</h3>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className='img-wrapper' onClick={activeModal} >
                    { data.mediaType === 'image' ? 
                        <Fragment >
                            <i className="fas fa-search-plus"></i>    
                            <img src={data.url} alt={data.title} /> 
                        </Fragment> 
                        :
                        <iframe title={data.title} src={ data.url } frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen />
                     }
                </div>
            </div>
        </section>
    )
}

export default React.memo(CustomApod);
