import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from 'components/Layout'
import HeaderBar from 'components/HeaderBar'
import Footer from 'components/Footer'
import { HomePage, ProductCategory } from 'components/Pages'

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

          <Route path='/category/:id' children={props => <ProductCategory {...props} />} />
        </Switch>
      </Router>
    )).to.equal(true)
  })
})