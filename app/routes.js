module.exports = function(app) {

  // Server routes (ex. API calls)


  // Frontend routes
  app.get('*', function(req, res){
    res.sendfile('./public/views/index.html');
  });

};