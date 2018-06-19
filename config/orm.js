var connection = require('./connection.js');

var orm = {
    //Retrieve all burgers from the database
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, table, function (err, result) {
            if (err) {
                console.log(err);
            }
            cb(result);
        });
    },

    //add new burger
    createBurger: function (table, colOne, colTwo, colOneValue, colTwoValue) {
        var queryString = "INSERT INTO ?? (??,??)VALUES (?,?)";
        connection.query(queryString, [table, colOne, colTwo, colOneValue, colTwoValue], function (err, result) {
            if (err) {
                console.log(err);
            }
            // cb(result);
        });
    },

    //Update one burger in the database
    UpdateOne: function (table, colToUpdate, valueToUpdate, lookupCol, lookupId) {
        var queryString = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(queryString, [table, colToUpdate, valueToUpdate, lookupCol, lookupId], function (err, result) {
            if (err) {
                console.log(err);
            }
            // console.log(result);
        });

    },
};

module.exports = orm;