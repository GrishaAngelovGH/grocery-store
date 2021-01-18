import PropTypes from 'prop-types'

const Layout = ({ header, body, footer, language }) => (
    <div className='row no-gutters' key={language}>
        <div className='col-md-12'>
            <Layout.Header content={header} />
            <Layout.Body content={body} />
            <Layout.Footer content={footer} />
        </div>
    </div>
)

Layout.Header = ({ content }) => (
    <div className='row no-gutters'>
        <div className='col-md-12'>
            {content}
        </div>
    </div>
)

Layout.Body = ({ content }) => (
    <div className='row no-gutters'>
        <div className='col-md-12'>
            {content}
        </div>
    </div>
)

Layout.Footer = ({ content }) => (
    <div className='row no-gutters'>
        <div className='col-md-12'>
            {content}
        </div>
    </div>
)

Layout.propTypes = {
    header: PropTypes.element.isRequired,
    body: PropTypes.element.isRequired,
    footer: PropTypes.element.isRequired,
    language: PropTypes.string.isRequired
}

Layout.Header.propTypes = {
    content: PropTypes.element.isRequired
}

Layout.Body.propTypes = {
    content: PropTypes.element.isRequired
}

Layout.Footer.propTypes = {
    content: PropTypes.element.isRequired
}

export default Layout