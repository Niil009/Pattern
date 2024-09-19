import React from 'react'

const Place = ({ item }) => {
    return (
        <div>
            <article className="place">
                <img src={item.image} alt={item.title} />
                <div>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </article>
        </div>
    )
}

export default Place
