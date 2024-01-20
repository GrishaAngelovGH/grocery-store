import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom'

import HeaderBar from 'components/HeaderBar'
import Footer from 'components/Footer'
import Layout from 'components/Layout'
import {
  HomePage,
  ProductCategory,
  Comments,
  ShoppingBag,
  Checkout,
  OrderHistory
} from 'components/Pages'

export const Category = () => {
  const { id: categoryId } = useParams()

  return (
    <Layout
      header={<HeaderBar />}
      body={<ProductCategory categoryId={categoryId} />}
      footer={<Footer />}
    />
  )
}

export const CommentsPage = () => {
  const { productId, categoryId } = useParams()

  return (
    <Comments productId={productId} categoryId={categoryId} />
  )
}

function App() {
  return (
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
  )
}

export default App
