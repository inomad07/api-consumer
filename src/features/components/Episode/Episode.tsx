import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import Spinner from "../../../common/components/Spinner/Spinner";
import { openEpisode } from "../../redux/actions";
import { stateType as State } from '../../types'

export default function Episode() {
    const { episode, isFetching } = useSelector((state: State) => state.episodeReducer)
    const dispatch = useDispatch()
    const {id} = useParams();

    useEffect( () => {
        dispatch(openEpisode(id))
    },[]);

    if(isFetching) {
        return (
            <Spinner />
        )
    }

    if (!episode?.id) {
        return (
            <div className="episode-not-found">
                Episode not found
            </div>
        )
    }

    return (
        <div className="list-item">
            <h3>{episode.episode}</h3>
            <p className="">Name: {episode.name}</p>
            <p>Air date: {episode.air_date}</p>
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
