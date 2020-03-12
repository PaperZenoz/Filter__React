import React from 'react'




const Range = ({changeInputValue, value}) => {
    const changeRange = (e) => {
        changeInputValue(Number(e.target.value))
    }

    return(
        <div className="filter mb-5">
            <label htmlFor="customRange2">Сортировка по количеству комментариев: {value}</label>
            <input type="range" className="custom-range" value={value} min="0" max="206" id="customRange2" onChange={changeRange}/>
        </div>
    )
}

export default Range