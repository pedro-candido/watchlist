import React, { useState } from 'react'

import Input from '../components/Input'
import axios from 'axios'
import SubmitButton from '../components/SubmitButton'

const RegisterAnime = () => {

    const [title, setTitle] = useState("")
    const [season, setSeason] = useState("")
    const [episodes, setEpisodes] = useState("")
    const [comment, setComment] = useState("")
    const [genre, setGenre] = useState("")
    const [tags, setTags] = useState("")
    const [rate, setRate] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            axios.post('http://localhost:3333/animes', {
                title, season, episodes, comment, genre, tags, rate
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    name="title"
                    placeholder=""
                >Nome do anime</Input>
                <Input
                    value={season}
                    onChange={e => setSeason(e.target.value)}
                    type="number"
                    name="season"
                    placeholder=""
                >Número de temporadas</Input>
                <Input
                    value={episodes}
                    onChange={e => setEpisodes(e.target.value)}
                    type="number"
                    name="episodes"
                    placeholder=""
                >Número de Episódios</Input>
                <Input
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    type="text"
                    name="comment"
                    placeholder=""
                >Comentário</Input>
                <Input
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                    type="text"
                    name="genre"
                    placeholder=""
                >Gêneros</Input>
                <Input
                    value={tags}
                    onChange={e => setTags(e.target.value)}
                    type="text"
                    name="tags"
                    placeholder=""
                >Tags</Input>
                <Input
                    value={rate}
                    onChange={
                        (e) => Number(e.target.value) > 5 ? setRate(5) : setRate(Number(e.target.value.replace(/\D/, "")))
                    }
                    type="text"
                    name="rate"
                    placeholder=""
                >Nota do anime</Input>
                <div className="container mt-3">
                    <SubmitButton />
                </div>
            </form>
        </div>
    )
}

export default RegisterAnime
