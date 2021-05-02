const welcome = require ('./welcome')
const foodsRouter = require('./foodRuotes');
const mainRouter = require('express').Router()

mainRouter.use('/',welcome)
mainRouter.use('/foods', foodsRouter)

module.exports=mainRouter;