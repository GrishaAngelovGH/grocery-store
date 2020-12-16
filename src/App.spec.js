import Layout from 'components/Layout'
import HeaderBar from 'components/HeaderBar'
import Footer from 'components/Footer'
import HomePage from 'components/Pages/HomePage'

import App from './App'

describe('(Component) App', () => {
  it('should render component', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.equals(
      <Layout
        header={<HeaderBar />}
        body={<HomePage />}
        footer={<Footer />}
      />
    )).to.equal(true)
  })
})