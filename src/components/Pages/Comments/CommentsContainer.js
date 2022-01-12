import { connect } from 'react-redux'
import { fetchCommentsById, createNewComment } from 'actions/comments'

import Comments from './Comments'

const mapStateToProps = state => ({
    comments: state.comments
})

const mapDispatchToProps = ({
    fetchCommentsById,
    createNewComment
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)