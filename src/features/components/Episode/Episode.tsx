import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { getEpisode } from '../../services/consumer.service'


export default function Episode() {
    const [episode, setEpisode] = useState({
        id: null,
        name: '',
        air_date: '',
        episode: '',
        characters: [],
        url: '',
        created: ''
    });

    const {id} = useParams();

    useEffect( () => {
        getEpisode(id)
            .then(res => setEpisode(res.data))
    },[]);

    if (!episode) {
        return null
    }

    return (
        <div className="list-item">
            <h3 className="">{episode.name}</h3>
            <label>Air date: {episode.air_date}</label>
            <p>Episode: {episode.episode}</p>
            <p>Characters: {episode.characters[0]}
                <br/>
                {episode.characters[1]}
            </p>
            <p className="">URL: {episode.url}</p>
            <p className="">Created: {episode.created}</p>
        </div>
    )
}
