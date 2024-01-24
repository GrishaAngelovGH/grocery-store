import Table from './Table'

describe('(Component) Preview.Table', () => {
    it('should render component', () => {
        const wrapper = shallow(
            <Table
                columns={['Column 1', 'Column 2']}
                data={[['a', 'b'], ['c', 'd']]}
            />
        )

        expect(wrapper.equals(
            <table className='table table-borderless table-sm text-center'>
                <thead className='thead-light'>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>a</td>
                        <td>b</td>
                    </tr>
                    <tr>
                        <td>c</td>
                        <td>d</td>
                    </tr>
                </tbody>
            </table>
        )).to.equal(true)
    })
})