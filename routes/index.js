const routes = require('express').Router();
routes.get('/',(req,res)=>{
    res.send('<h1>Hi: </h1>Alexis Ortiz from Ecuador');
})
module.exports = routes;