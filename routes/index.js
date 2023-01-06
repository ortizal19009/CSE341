const routes = require('express').Router();
routes.get('/',(req,res)=>{
    res.send('<h2>Hi: </h2>Alexis Ortiz  ');
})
module.exports = routes;