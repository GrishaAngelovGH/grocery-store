import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { items, comments } from './axios-mock-data'

const mock = new MockAdapter(axios)

mock.onGet('/category/all-cakes').reply(200, { items })

// regex will match the following pattern /comments/all-cakes/1
mock.onGet(/\/comments\/((?:\w+-)+\w+)\/\d+/).reply(config => {
    const [_, categoryId, productId] = config.url.split('/')

    return [
        200,
        {
            productId,
            categoryId,
            comments: comments[categoryId][productId]
        }
    ]
})

mock.onPost('/comments').reply(config => {
    const request = JSON.parse(config.data)
    const { id, categoryId, productId, user, message } = request

    const newComment = {
        id: Date.now(),
        user: user,
        image: 'https://randomuser.me/api/portraits/men/18.jpg',
        posted: new Date().toLocaleString(),
        value: message,
        votes: 0,
        replies: []
    }

    const comment = findComment(comments[categoryId][productId], id)
    comment.replies.push(newComment)

    return [200, {}]
})

const findComment = (comments, id) => {
    const target = comments.find(v => v.id === id)

    if (target) {
        return target
    }

    const foundComments = comments.map(v => findComment(v.replies, id)).filter(v => v.id)

    return foundComments.length && foundComments[0]
}