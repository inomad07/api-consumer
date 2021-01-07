import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Spinner from '../../../common/components/Spinner'
import { loadEpisodes } from '../../redux/actions'
import { episodeType as Type, stateType as State } from '../../types'


export default function EpisodeList (props: any) {
    const { data, isFetching } = useSelector((state: State) => state.episodeReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadEpisodes())
    }, [])

    const openEpisode = (id: number) => (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        const newPath = `/${id}`
        props.history.push(newPath)
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
                <span>Id: {item.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Episode: {item.episode}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>)}
        </div>
    )
}
