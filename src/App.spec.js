import Layout from 'components/Layout'
import HeaderBar from 'components/HeaderBar'

import App from './App'

describe('(Component) App', () => {
  it('should render component', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.equals(
      <Layout header={<HeaderBar />} body={<span>body</span>} />
    )).to.equal(true)
  })
})