import React, {memo} from 'react'

const CardList = ({cards, inputValue}) => {

    const sortCards = cards.filter(card => card.data.num_comments >= inputValue).sort((a, b) => b.data.num_comments - a.data.num_comments)


    return(
        sortCards.length ? sortCards.map(card => <Card card={card.data} key={card.data.id}/>) : <p>Карт нет</p>
    )
}



const Card = memo (({card}) => {
    return (
        <div className="card filter-card">
            <div className="card-img text-white">
                {card.thumbnail === 'self' ?   <p>Картинки нет</p> : <img src={card.thumbnail} className="card-img-top" alt={card.title} />}

            </div>
            <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">Количество комментариев: {card.num_comments}</p>
                <a href={`https://www.reddit.com/${card.permalink}`} target="_blank" className="btn btn-primary" rel="noopener noreferrer">Перейти</a>
            </div>
        </div>
    )

})


export default CardList