import StepTitle from './StepTitle'

describe('(Component) StepTitle', () => {
  it('should render component', () => {
    const wrapper = shallow(<StepTitle>Title</StepTitle>)

    expect(wrapper.equals(
      <h1 className='bg-light border rounded text-center text-secondary'>
        Title
      </h1>
    )).to.equal(true)
  })
})