var orm = require('../config/orm');


var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (col1, col2 , val1, val2) {
        orm.createBurger("burgers", col1, col2, val1, val2, function (res) {
            
        });
    },
    Update: function (colToUpdate, valToUpdate , lookUpCol, lookUpVal) {
        orm.UpdateOne("burgers", colToUpdate, valToUpdate, lookUpCol, lookUpVal,  function (res) {
        });
    }
};










module.exports = burger;