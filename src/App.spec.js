import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from 'components/Layout'
import HeaderBar from 'components/HeaderBar'
import Footer from 'components/Footer'

import {
  HomePage,
  ShoppingBag,
  Checkout,
  OrderHistory
} from 'components/Pages'

import App, { Category, CommentsPage } from './App'

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

          <Route path='/comments/:categoryId/:productId' element={<CommentsPage />} />

          <Route path='/shopping-bag' element={<ShoppingBag />} />

          <Route path='/checkout' element={<Checkout />} />

          <Route path='/order-history' element={<OrderHistory />} />
        </Routes>
      </Router>
    )).to.equal(true)
  })
})