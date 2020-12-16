import HeaderBar from 'components/HeaderBar'
import Footer from 'components/Footer'
import HomePage from 'components/Pages/HomePage'
import Layout from 'components/Layout'

function App() {
  return (
    <Layout
      header={<HeaderBar />}
      body={<HomePage />}
      footer={<Footer />}
    />
  )
}

export default App
