const Note = require('../models/note')
// const Catagory = require('../models/catagory')

module.exports.list =  (req, res) => {
    Note.find().populate('category',['_id','name'])
    // Note.find()
        .then((response) => {
            res.json(response)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Note.findByIdAndUpdate(id).populate()
    Note.findById(id).populate('category',['_id','name'])
    // Note.findById(id)
        .then(note => {
            if(note) {
                res.json(note)
            } else {
                res.json({}) // value of note will be a null
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const note = new Note(body)
    note.save() 
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Note.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(note => {
            console.log(note)
            if(note) {
                res.json(note)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })

}

module.exports.del = (req, res) => {
    const id = req.params.id
    Note.findByIdAndRemove(id)
        .then(note => {
            if(note) {
                res.json(note)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}