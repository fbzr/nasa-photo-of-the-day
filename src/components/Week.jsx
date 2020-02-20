import React from 'react';
import Card from './Card';

const Week = () => {
    let cards = [];
    
    let today = new Date();
    let dayBefore = new Date(today);

    for(let i=1; i<7; i++) {    
        const date = new Date(dayBefore.setDate(today.getDate() - i));
        console.log(date);
        cards.push(<Card date={date} />);
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
