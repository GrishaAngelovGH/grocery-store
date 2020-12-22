import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderBar from 'components/HeaderBar'
import Footer from 'components/Footer'
import HomePage from 'components/Pages/HomePage'
import Layout from 'components/Layout'

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          children={
            <Layout
              header={<HeaderBar />}
              body={<HomePage />}
              footer={<Footer />}
            />
          }
        />
      </Switch>
    </Router>
  )
}

export default App
