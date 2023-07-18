const express = require('express');
const port = 3000
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

app.listen(port, () => console.log(`App listening at ${port}`))