import React from 'react';

const AnimeCard = ({ children, animeImg }) => {
    return (
        <>
            <div class='anime-card'>
                <img class='anime-img' src={animeImg} alt="" />
                <p class='anime-name'>{children}</p>
            </div>
        </>
    )
}

export default AnimeCard