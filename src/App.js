import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderBar from 'components/HeaderBar'
import Footer from 'components/Footer'
import { HomePage, ProductCategory, ShoppingBag } from 'components/Pages'
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

        <Route path='/category/:id' children={
          props => (
            <Layout
              header={<HeaderBar />}
              body={<ProductCategory {...props} />}
              footer={<Footer />}
            />
          )}
        />

        <Route path='/shopping-bag' children={<ShoppingBag />} />
      </Switch>
    </Router>
  )
}

export default App
