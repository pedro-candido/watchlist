import React from 'react';

const AnimeCard = ({ children, animeImg }) => {
    return (
        <>
            <div className='anime-card'>
                <img className='anime-img' src={animeImg} alt="" />
                <p className='anime-name'>{children}</p>
            </div>
        </>
    )
}

export default AnimeCard