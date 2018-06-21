//requiring database connection 
const connection = require('./connection.js');

const orm = {
    //Retrieve all burgers from the database
    getAllBurgers: function (table, callBack) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function (err, result) {
            if (err) {
                console.log(err);
            }
            callBack(err, result);
        });
    },

    //add new burger
    addNewBurger: function (table, colOne, colTwo, colOneValue, colTwoValue, callBack) {
        let queryString = "INSERT INTO ?? (??,??)VALUES (?,?)";
        connection.query(queryString, [table, colOne, colTwo, colOneValue, colTwoValue], function (err, result) {
            if (err) {
                console.log(err);
            }
            callBack(err, result);
        });
    },

    //Update one burger in the database
    updateBurger: function (table, colToUpdate, valueToUpdate, lookupCol, lookupId, callBack) {
        let queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [table, colToUpdate, valueToUpdate, lookupCol, lookupId], function (err, result) {
            if (err) {
                console.log(err);
            }
            callBack(err, result);
        });
    },
};

module.exports = orm;