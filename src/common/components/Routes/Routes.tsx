import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import EpisodeList from '../../../features/components/EpisodeList'
import NotFound from '../NotFound'
import Episode from '../../../features/components/Episode/Episode'


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    <EpisodeList/>
                    <Route path="/:id" component={Episode}/>
                </Route>

                <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}
