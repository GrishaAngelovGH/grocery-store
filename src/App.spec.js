import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from 'components/Layout'
import HeaderBar from 'components/HeaderBar'
import Footer from 'components/Footer'

import {
  HomePage,
  ShoppingBag,
  Checkout
} from 'components/Pages'

import App, { Category } from './App'

describe('(Component) App', () => {
  it('should render component', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.equals(
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Layout
                header={<HeaderBar />}
                body={<HomePage />}
                footer={<Footer />}
              />
            }
          />

          <Route path='/category/:id' element={<Category />} />

          <Route path='/shopping-bag' element={<ShoppingBag />} />

          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>
    )).to.equal(true)
  })
})