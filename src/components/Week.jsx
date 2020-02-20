import React from 'react';
import Card from './Card';

const Week = ({showModal, setModalApod}) => {
    let cards = [];
    
    let today = new Date();
    let dayBefore = new Date(today);

    // Create a Card component to each day (6 previous days)
    for(let i=1; i<2; i++) {    
        const date = new Date(dayBefore.setDate(today.getDate() - i));
        cards.push(<Card date={date} key={i} showModal={showModal} setModalApod={setModalApod} />);
    }

    return (
        <section>
            <h3>Pictures Of The Week</h3>
            <div className='cards-container'>
                {cards}
            </div>
        </section>
    )
}

export default Week
