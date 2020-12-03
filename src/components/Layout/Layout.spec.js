import Layout from './Layout'

describe('(Component) Layout', () => {
    it('should render Layout', () => {
        const header = <span>header</span>
        const body = <span>body</span>

        const wrapper = shallow(
            <Layout header={header} body={body} />
        )

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <Layout.Header content={header} />
                    <Layout.Body content={body} />
                </div>
            </div>
        )).to.equal(true)
    })

    it('should render Layout Header', () => {
        const content = <span>content</span>

        const wrapper = shallow(
            <Layout.Header content={content} />
        )

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <span>content</span>
                </div>
            </div>
        )).to.equal(true)
    })

    it('should render Layout Body', () => {
        const content = <span>content</span>

        const wrapper = shallow(
            <Layout.Body content={content} />
        )

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <span>content</span>
                </div>
            </div>
        )).to.equal(true)
    })
})