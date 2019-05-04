var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
const PORT = process.env.PORT || 5000;
app.get('/',function(req,res){
    res.render('fade7a');
})
app.listen(PORT,function(){
    console.log('server started')
})