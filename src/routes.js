import React from 'react'
import {  Switch } from 'react-router-dom'

import { Home } from './views/Home'
import { About } from './views/About'
import { TopicList } from './views/TopicList'
import { NoMatch } from './views/NoMatch'
import { NavBar } from './components/NavBar'
import { TopicDetail } from './components/TopicDetail'
import { MakeRouteWithSubRoutes } from './makeRouteWithSubRoutes'

const fetchXYZApiRoutes = () => {
  return [
    {
      path: '/HelloWorld',
      component: 'AAA'
    }
  ]
}

const routes = [
  {
    path: "/Home",
    component: Home
  },
  {
    path: "/About",
    component: About
  },
  {
    path: "/Topics",
    component: TopicList,
    exact: 'exact'
  },
  {
    path: "/Topics/:topicId",
    component: TopicDetail,
  },
  {
    path: "/:WhereTheHeckIsThat",
    component: NoMatch,
  }
]

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        {
          routes.map(
            (route, index) => <MakeRouteWithSubRoutes key={index} {...route} />
          )
        }
      </Switch>
    </div>
  )
}
