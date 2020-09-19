const express = require('express')
const router = express.Router()
const notesController = require('../app/controllers/notesController')
const categoriesController = require('../app/controllers/categoriesController')

router.get('/notes', notesController.list) 
router.get('/notes/:id', notesController.show) 
router.post('/notes', notesController.create)
router.put('/notes/:id', notesController.update)
router.delete('/notes/:id', notesController.del)

router.get('/categories', categoriesController.list)
router.get('/categories/:id', categoriesController.show)
router.post('/categories', categoriesController.create)
router.put('/categories/:id', categoriesController.update)
router.delete('/categories/:id', categoriesController.del)

module.exports = router