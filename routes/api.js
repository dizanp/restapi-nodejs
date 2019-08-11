const express = require('express');
const router = express.Router();
const Tool = require('../models/tools');

//get list of tools from the db
router.get('/tools', function(req, res, next){
    // Tool.find({}).then(function(tools){
    //     res.send(tool);
    // });
    Tool.aggregate().near({
        near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        maxDistance: 100000,
        spherical: true,
        distanceField: "dist.calculated"
    }).then(function(tools){
        res.send(tools);
    });
});

//add a new tools to the db
router.post('/tools', function(req, res, next){
    //console.log(req.body);
    Tool.create(req.body).then(function(tool){
        res.send(tool);    
    }).catch(next);
});

//update a tools in the db
router.put('/tools/:id', function(req, res, next){
    Tool.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Tool.findOne({_id: req.params.id}).then(function(tool){
            res.send(tool);
        });
    })
});

//delete a tools from the db
router.delete('/tools/:id', function(req, res, next){
    Tool.findByIdAndRemove({_id: req.params.id}).then(function(tool){
        res.send(tool);
    });
});

module.exports = router;