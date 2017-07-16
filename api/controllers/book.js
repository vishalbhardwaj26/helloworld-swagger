'use strict';
    // Include our "db"
    var db = require('../../config/db')();
    // Exports all the functions to perform on the db
    module.exports = {getAll, save, getOne, update, delBook};

    //GET /book operationId
    function getAll(req, res, next) {
      res.json({ books: db.find()});
    }
    //POST /book operationId
    function save(req, res, next) {
        res.json({success: db.save(req.body), description: "book added to the list!"});
    }
    //GET /book/{id} operationId
    function getOne(req, res, next) {
        var id = req.swagger.params.id.value; //req.swagger contains the path parameters
        var book = db.find(id);
        if(book) {
            res.json(book);
        }else {
            res.status(204).send();
        }       
    }
    //PUT /book/{id} operationId
    function update(req, res, next) {
        var id = req.swagger.params.id.value; //req.swagger contains the path parameters
        var book = req.body;
        if(db.update(id, book)){
            res.json({success: 1, description: "book updated!"});
        }else{
            res.status(204).send();
        }

    }
    //DELETE /book/{id} operationId
    function delBook(req, res, next) {
        var id = req.swagger.params.id.value; //req.swagger contains the path parameters
        if(db.remove(id)){
            res.json({success: 1, description: "book deleted!"});
        }else{
            res.status(204).send();
        }

    }