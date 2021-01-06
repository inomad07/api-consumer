import React, { useState, useEffect } from 'react'

import { getEpisode } from '../../services/consumer.service';


export default function Episode ({ id }: {id: number}) {
    const [episode, setEpisode] = useState({
        id: null,
        name: '',
        air_date: '',
        episode: '',
        characters: [],
        url: '',
        created: ''
    });

    useEffect( () => {
        getEpisode(id)
            .then(res => setEpisode(res.data))
    },[]);

    if (!episode) {
        return null
    }

    return (
        <div className="">
            <div className="">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
