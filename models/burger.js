//requiring orm model
const orm = require('../config/orm');

//burger model
const burger = {
    getAllBurgers: function (callBack) {
        orm.getAllBurgers("burgers", function (err, res) {
            callBack(err, res);
        });
    },
    addNewBurger: function (col1, col2 , val1, val2, callBack) {
        orm.addNewBurger("burgers", col1, col2, val1, val2, function (err, res) {
            callBack(err, res); 
        });
    },
    updateBurger: function (colToUpdate, valToUpdate , lookUpCol, lookUpVal, callBack) {
        orm.updateBurger("burgers", colToUpdate, valToUpdate, lookUpCol, lookUpVal,  function (err, res) {
            callBack(err, res);
        });
    }
};


module.exports = burger;