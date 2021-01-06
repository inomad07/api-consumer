import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import EpisodeList from '../../../features/components/EpisodeList'
import NotFound from '../NotFound'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={EpisodeList}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}
