'use strict';
var sql = require("mssql");

// config for your database
var config = {
    user: 'matrimama-admin',
    password: 'Secret@2020_Key',
    server: 'matrimama-dev.database.windows.net', 
    database: 'matrimama-dev' 
};


let select = (sqlquery)=>{
    let promise = new Promise((resolve , reject) => {
        let query = sqlquery;
        // connect to your database
        sql.connect(config, function (err) {
        
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                // create Request object
                var request = new sql.Request();
                console.log(query);
                // query to the database and get the records
                request.query(query, function (err, recordset) {
                    
                    if (err) {
                        console.log(err);
                        reject(err);
                    }

                    // send records as a response
                    //res.send(recordset);
                    //console.log(recordset);
                    resolve(recordset);
                });
            }
        });
    });
    return promise;
};
  
let insert = (query)=>{
    // connect to your database
    let promise = new Promise((resolve , reject) => {
        sql.connect(config, function (err) {
        
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                // create Request object
                var request = new sql.Request();
                
                // query to the database and get the records
                request.query(query, function (err, recordset) {
                    
                    if (err) {
                        console.log(err);
                        reject(err);
                    }

                    // send records as a response
                    //res.send(recordset);
                    //resolve(recordset);
                });
            }
        });
    });
    return promise;
}
  
module.exports = { 
    conn:config,
    select:select,
    insert:insert
};