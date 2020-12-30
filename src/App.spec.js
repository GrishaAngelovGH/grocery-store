import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from 'components/Layout'
import HeaderBar from 'components/HeaderBar'
import Footer from 'components/Footer'
import {
  HomePage,
  ProductCategory,
  ShoppingBag,
  Checkout
} from 'components/Pages'

import App from './App'

describe('(Component) App', () => {
  it('should render component', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.equals(
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
    )).to.equal(true)
  })
})