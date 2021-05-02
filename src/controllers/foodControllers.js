const { foods } = require('../models')
const response = require('../helpers/response')
module.exports = {
    postFoods: (req, res) => {
        let { body } = req;
        foods.create(body)
            .then((data) => {
                response.success(res, "Succes Post Foods", 200, data)
            })
            .catch((err) => {
                response.error(res, 500, err)
            });
    },
    getAllFoods: (req, res) => {
        foods.findAll()
            .then((data) => {
                response.success(res, "success Get All Foods", 200, data)
            })
            .catch((err) => {
                response.error(res, 500, err)
            });
    },
    getDataById: (req, res) => {
        let { id } = req.params;
        foods.findOne({
            where: { id }
        })
            .then((data) => {
                response.success(res, "Succes Get Data By Id", 200, data)
                    .catch((err) => {
                        response.error(res, 500, err)
                    });
            })
    },
    updateFoods: (req, res) => {
        let { id } = req.params;
        let { body } = req
        foods.update(body, {
            where: {
                id: id
            }
        }).then((data) => {
            response.success(res, "Succes Update Foods", 200, data)
        }).catch((err) => {
            response.error(res, 500, err)
        })
    },
    deleteFood: (req, res) => {
        let { id } = req.params;
        foods.destroy({
            where: {
                id: id
            }
        }).then((data) => {
            response.success(res, "Succes Delete Foods", 200, data)
        }).catch((err) => {
            response.error(res, 500, err)
        })
    }
}