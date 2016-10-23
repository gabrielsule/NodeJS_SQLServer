var sql = require("mssql");
var config = {
    "server": "127.0.0.1"
    , "user": "usuario"
    , "password": "password"
    , "database": "baseDeDatos"
};

exports.all = function (req, res) {
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select * from Fleet', function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        });
    });
};
exports.id = function (req, res) {
    var id = parseInt(req.params.id);
    sql.connect(config, function (err) {
        if (err) console.log(err);
        var request = new sql.Request();
        request.query('select * from Fleet where id_company=' + id, function (err, recordset) {
            if (err) console.log(err)
            res.send(recordset);
        });
    });
};