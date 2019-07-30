const express = require('express');
const router = express.Router();


//get list of tools from the db
router.get('/tools', function(req, res){
    res.send({type:'GET'});
});

//add a new tools to the db
router.post('/tools', function(req, res){
    res.send({type:'POST'});
});

//update a tools in the db
router.put('/tools/:id', function(req, res){
    res.send({type:'PUT'});
});

//delete a tools from the db
router.delete('/tools/:id', function(req, res){
    res.send({type:'DELETE'});
});

module.exports = router;