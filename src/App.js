import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import HeaderBar from 'components/HeaderBar'
import Footer from 'components/Footer'
import Layout from 'components/Layout'
import {
  HomePage,
  ProductCategory,
  ShoppingBag,
  Checkout
} from 'components/Pages'

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
        <Route path='/checkout' children={<Checkout />} />
      </Switch>
    </Router>
  )
}

export default App
