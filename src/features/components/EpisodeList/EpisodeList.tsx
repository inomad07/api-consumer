import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

import Spinner from '../../../common/components/Spinner'
import { loadEpisodes } from '../../redux/actions'
import { episodeType as Type, stateType as State } from '../../types'


export default function EpisodeList () {
    const { data, isFetching } = useSelector((state: State) => state.episodeReducer)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(loadEpisodes())
    }, [])

    const openEpisode = (id: number) => (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        const newPath = `/episodes/${id}`
        history.push(newPath)
    };

    if(isFetching) {
        return (
            <Spinner />
        )
    }

    if (!data?.length) {
        return (
            <div className="data-info">
                Episodes not found
            </div>
        )
    }

    return (
        <div className='list'>
            { data.map( (item: Type) => <div className='item' key={item.id} onClick={openEpisode(item.id)}>
                <span className="element">Id: {item.id}</span>
                <span className="element">Episode: {item.episode}</span>
                <span className="element">{item.name}</span>
            </div>)}
        </div>
    )
}
