var express = require("express");
var sql = require("mssql");
const router = express.Router();
const config = {
    user: 'sa',
    password: 'ghanshyam1995',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    database: 'PortFolio',
}

router.get('/GetUser', (req, res) => {
    sql.connect(config, err => {
        if (err)
            res.json(err);
        var request = new sql.Request().query("SELECT * from Users", (err, record) => {
            sql.close();
            if(err)
            res.json(err);
            
            res.json(record.recordset);
        })
    })
});


module.exports = router;