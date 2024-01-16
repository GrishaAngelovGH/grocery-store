import PropTypes from 'prop-types'

const Table = ({ columns, data }) => (
    <table className='table table-borderless table-sm text-center'>
        <thead className='thead-light'>
            <tr>{columns.map((v, i) => <th key={i}>{v}</th>)}</tr>
        </thead>
        <tbody>
            {
                data.map((v, i) => (
                    <tr key={i}>
                        {
                            v.map((column, j) => (
                                <td key={j}>
                                    {column}
                                </td>
                            ))
                        }
                    </tr>
                ))
            }
        </tbody>
    </table>
)

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired
}

export default Table