import Layout from './Layout'

describe('(Component) Layout', () => {
    it('should render Layout', () => {
        const header = <span>header</span>
        const body = <span>body</span>
        const footer = <span>footer</span>

        const wrapper = shallow(
            <Layout header={header} body={body} footer={footer} />
        )

        expect(wrapper.equals(
            <div className='row no-gutters'>
                <div className='col-md-12'>
                    <Layout.Header content={header} />
                    <Layout.Body content={body} />
                    <Layout.Footer content={footer} />
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

    it('should render Layout Footer', () => {
        const content = <span>content</span>

        const wrapper = shallow(
            <Layout.Footer content={content} />
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