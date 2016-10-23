import Common from '../controllers/common'

exports.endpoints = [
    { method: 'GET', path: '/', config: Common.welcomeMessage },
    { method: 'GET', path: '/{name}', config: Common.message },
    { method: 'GET', path: '/list', config: Common.list  }
]
