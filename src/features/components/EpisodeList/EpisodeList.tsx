import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Spinner from '../Spinner'
import { loadEpisodes } from '../../redux/actions'
import { episodeType as Type, stateType as State } from '../../types'


export default function EpisodeList () {
    const { data, isFetching } = useSelector((state: State) => state.episodeReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadEpisodes())
    }, [])

    if(!data) {
        return (
            <div className="data-info">
                Episodes not found
            </div>
        )
    }

    if(isFetching) {
        return (
            <Spinner />
        )
    }

    return (
        <div className='list'>
            { data.map( (item: Type) => <div className='item' key={item.id}>
                <span>Id: {item.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Episode: {item.episode}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>)}
        </div>
    )
}
