var express = require('express');
var app = express();


app.use(express.static(__dirname+ '/public'));

app.get('/:fecha', function(req, res){
	
	
		var d = new Date(req.params.fecha*1000); 

		if(d == "Invalid Date")
		{
			var fecha = new Date(req.params.fecha);
			console.log(fecha);
			var natural = fecha.toDateString()
			if(natural == "Invalid Date")
			{
				natural = null;
			}

			res.json({
				unix: fecha.getTime() / 1000,
				natural: natural
			})
		} 
		else
		{
			console.log(d);
			res.json({
				unix: req.params.fecha,
				natural: d.toDateString()
			})
		}

})



app.listen(process.env.PORT);
