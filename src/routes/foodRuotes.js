const foodsRouter = require ('express').Router()
const foodControllers = require('../controllers/foodControllers')

foodsRouter.post('/',foodControllers.postFoods);
foodsRouter.get('/',foodControllers.getAllFoods);
foodsRouter.get('/:id',foodControllers.getDataById);
foodsRouter.put('/:id',foodControllers.updateFoods);
foodsRouter.delete('/:id',foodControllers.deleteFood);

module.exports=foodsRouter;