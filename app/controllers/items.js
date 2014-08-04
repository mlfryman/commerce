'use strict';

var Item = require('../models/item');

exports.init = function(req, res){
  res.render('items/init');
};

exports.create = function(req, res){
  console.log(req.body);
  var item = new Item(req.body);
  item.save(function(){
    res.redirect('/');
  });
};

exports.index = function(req, res){
  res.render('items/index');
};

exports.show = function(req, res){
  res.render('items/:id');
};

exports.destroy = function(req, res){
  console.log(req.body);
  var item = new Item(req.body);
  item.deleteById(function(){
    res.redirect('/items');
  });
};
