var express = require('express');
var router = express.Router();
var db=require("../db.js")

//Added these to support file upload
var gfsService = require('../gfsService')(db.mongoose.connection);
var multer  = require('multer');
var fs = require('fs');


//ROUTE 1
router.route('/')

//CREATE
      .post(multer({dest:'./uploads'}).single('photo'),function(req,res){

        if(req.file) {
            //Upload file upload first
            gfsService.writeFileToDb({
        			readStream:fs.createReadStream(req.file.path),
        			fileName:req.file.originalname,
        			collection:'photos'
        		})
        		.then(function (objectId) {
              var basic = new db.Basic(req.body);
              basic.pictureId=objectId;
              basic.save(function(err,basic){
                if(err)
                res.status(500).json('INTERNAL SERVER ERROR');
                res.status(200).json(basic);
              });
        		},function (error) {
        			res.status(500).send(error);
        		}).finally(function () {
        			fs.unlink(req.file.path);
        		});
        }
        else {
          var basic = new db.Basic(req.body);
          basic.save(function(err,basic){
            if(err)
            res.status(500).json('INTERNAL SERVER ERROR');
            res.status(200).json(basic);
          });
        }
      })

//READ
      .get(function(req,res){
        db.Basic.find(function(err,basic){
          if (err)
          res.status(500).json('INTERNAL SERVER ERROR');
          res.status(200).json(basic);
        })
      })

//ROUTE 2
router.route('/:basic_id')

//READ
    .get(function(req,res){
      db.Basic.find(
      {_id:req.params.basic_id},function(err,basic){
       if (err)
       res.status(500).json('INTERNAL SERVER ERROR');
       res.status(200).json(basic);
      })
     })

//UPDATE

      .put(function(req,res){
        db.Basic.findById(req.params.basic_id, function(err,basic){
          if(err)
          res.status(500).json('INVALID SERVER ERROR');
          basic.name = req.body.name;
          basic.save(function(err,basic){
            if(err)
            res.status(500).json('INVALID SERVER ERROR');
            res.status(200).json(basic);
          })
        })
      })

//DELETE
      .delete(function(req,res){
        db.Basic.remove(
          {_id:req.params.basic_id}, function(err,basic){
            if(err)
            res.status(500).json('INTERNAL SERVER ERROR');
            res.status(200).json('Basic information of Student is  Deleted');
          }
        );
      });

router.route('/picture/:basic_id')

      //READ
          .get(function(req,res){
            db.Basic.findOne(
            {_id:req.params.basic_id},function(err,basic){
             if (err)
             res.status(500).json('INTERNAL SERVER ERROR');

             console.log(JSON.stringify(basic));
             gfsService.readFileFromDb({
               objectId:basic.pictureId,
               writeStream:res,
               collection:'photos'
             })
             .then(function (objectId) {
               res.end();
             },function (error) {
               res.status(500).send(error);
             });
            })
           })

module.exports = router;
