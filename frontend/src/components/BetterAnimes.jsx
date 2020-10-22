import React from 'react';
import AnimeCard from './AnimeCard'
import shingeki from '../assets/shingeki.jpg'
import mia from '../assets/madeinabyss.jpg'
import goh from '../assets/goh.jpg'

const BetterAnimes = () => {
   return (
      <div className='BetterAnimes_div'>
         <AnimeCard animeImg={shingeki}>Shingeki No Kyojin</AnimeCard>
         <AnimeCard animeImg={mia}>Made in Abyss</AnimeCard>
         <AnimeCard animeImg={goh}>The god of highscool</AnimeCard>
      </div>
   )
}

export default BetterAnimes