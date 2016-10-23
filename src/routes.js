import Common from '../controllers/common'
import Cat from '../controllers/cat'

exports.endpoints = [
    { method: 'GET', path: '/', config: Common.welcomeMessage },
    { method: 'GET', path: '/{name}', config: Common.message },
    { method: 'GET', path: '/cats', config: Cat.getCats },
    { method: 'POST', path: '/cats', config: Cat.create }
]
