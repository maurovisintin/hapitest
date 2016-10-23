import mongoose from 'mongoose'

let CatSchema = new mongoose.Schema ({
    name: {type: String}
})

CatSchema.statics.saveCat = function(requestData, callback) {
    this.create(requestData, callback)
}

let cat = mongoose.model("Cat", CatSchema)

module.exports = {
    Cat: cat
}
