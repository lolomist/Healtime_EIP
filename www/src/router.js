import React from 'react'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'
import App from './components/App'
import Landing from './components/Landing'
import First from './components/first'



/*const router = () => {
    return (
        <Router history={HashRouter}>
        <Route path="/" component={App}>
           <Route exact path="/" component={Landing} />
           <Route path="first" component=        {First} />
        </Route>
      </Router>
      )
}

export default router*/

export default function router() {
    return (
    <Router history={HashRouter}>
      <Route path="/" component={App}>
        <Route exact path="/" component={Landing} />
        <Route path="/Landing" component={Landing} />
        <Route path="/first" component={First} />
      </Route>
    </Router>
    )
}