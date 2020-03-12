import React, {useEffect, useState} from 'react'
import CardList from "./CardList/CardList";
import Range from "./Range/Range";

const Home = () => {

    const [cards, setCards] = useState('')
    const [loading, setLoading] = useState(true)
    const [autoRefresh, setAutoRefresh] = useState(false)
    const [intervalID, setIntervalID] = useState('')
    const [inputValue, setInputValue] = useState('')


    const changeInputValue = (value) => {
        setInputValue(value)

        cards.filter(card => value < card.data.num_comments)

    }



    const getCards = () => {
        setLoading(true)
        fetch('https://www.reddit.com/r/reactjs.json?limit=100').then(response => response.json()).then(cards => {
                setCards(cards.data.children)
                setLoading(false)

            },
        )

    }


    useEffect(() => {
        getCards()

    }, [])


    const updateAutoRefresh = () => {
        var intervalIDR

        if(!autoRefresh){
            setAutoRefresh(true)
            intervalIDR = setInterval(() => {
                getCards()
            }, 3000);
            setIntervalID(intervalIDR)
        } else {
            setAutoRefresh(false)
            clearInterval(intervalID)
        }
    }



    return (
        <>
        <button type="button" className="btn btn-secondary btn-lg btn-block mb-5"
                onClick={updateAutoRefresh}>{autoRefresh ? "Остановить" : "Запустить"} автообновление
        </button>

        <Range changeInputValue={changeInputValue} value={inputValue}/>
        <div className="cards">
            {loading ? <p>ЗАГРУЗКА...</p> : <CardList cards={cards} inputValue={inputValue}/>}

        </div>
        </>


    )

}


export default Home