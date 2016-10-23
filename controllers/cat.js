import {Cat} from '../models/cat'

exports.getCats = {
    handler: (request, reply) => {
        Cat.find({}, (err, cats) => {
            if (err) {
                console.log(err)
                return reply(err)
            }

            return reply(cats)
        })
    }
}

exports.create = {
    handler: (request, reply) => {
        console.log("request", request.payload)
        Cat.saveCat(request.payload, (err, cats) => {
            if (err) {
                console.log(err)
                return reply(err)
            }

            return reply(cats)
        })
    }
}
