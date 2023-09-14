import IntroSteps, { steps } from './IntroSteps'
import { Steps } from 'intro.js-react'

describe('(Component) IntroSteps', () => {
  it('should render component', () => {
    const wrapper = shallow(<IntroSteps />)

    expect(wrapper.equals(
      <Steps
        initialStep={0}
        enabled={true}
        steps={steps}
        options={{
          dontShowAgain: true,
          showProgress: true,
          showBullets: false
        }}
        onExit={wrapper.instance().handleExit}
      />
    )).to.equal(true)
  })
})