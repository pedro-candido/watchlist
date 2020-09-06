import React from 'react';
import AnimeCard from './AnimeCard'

const BetterAnimes = () => {
    return(
        <div className='BetterAnimes_div'>
            <AnimeCard animeImg="">Shingeki No Kyojin</AnimeCard>
            <AnimeCard animeImg="">Made in Abyss</AnimeCard>
            <AnimeCard animeImg="">The god of highscool</AnimeCard>
        </div>
    )
}

export default BetterAnimes