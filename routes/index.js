// GET index.html and admin.html

exports.index = function(req, res){
  res.render('index');
};

exports.admin = function(req, res){
  res.render('admin');
};