const express = require('express');
const app = express();
const { v4 } = require('uuid')
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render("index.ejs", { uuid: v4() })
});

app.get('/redirect', (req, res) => {
	res.redirect("/")
});

app.listen(3000)