import Layout from 'components/Layout'

import App from './App'

describe('(Component) App', () => {
  it('should render component', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.equals(
      <Layout header={<span>header</span>} body={<span>body</span>} />
    )).to.equal(true)
  })
})