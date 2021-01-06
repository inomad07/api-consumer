import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import { loadCartoons } from "../../redux/actions"
import { episodeType as Type, stateType as State } from '../../types'



export default function EpisodeList () {
    const list = useSelector((state: State) => state.rootReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCartoons())
    }, [])

    return (
        <div className='list'>
            { list.map( (item: Type) => <div className='item' key={item.id}>
                <span>Id: {item.id}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span>Episode: {item.episode}</span>&nbsp;&nbsp;
                <span>{item.name}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            </div>)}
        </div>
    );
}
