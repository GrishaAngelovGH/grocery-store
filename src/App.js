import HeaderBar from 'components/HeaderBar'
import Layout from 'components/Layout'

function App() {
  return (
    <Layout header={<HeaderBar />} body={<span>body</span>} />
  )
}

export default App
