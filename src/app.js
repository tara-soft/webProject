const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

// public static 
// console.log(path.join(__dirname, "../public"));
// const static_Path = path.join(__dirname, "../public")

const static_Path = path.join(__dirname, "../public")
const template_Path = path.join(__dirname, "../templates/views")
const partial_Path = path.join(__dirname, "../templates/partials")

app.set('view engine', 'hbs');
app.set('views', template_Path);
hbs.registerPartials(partial_Path);

app.use(express.static(static_Path))

// routing
app.get("", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.get("/weather", (req, res) => {
    res.render('weather');
});

app.get("*", (req, res) => {
    res.render('404error', {
        errorMsg: 'Opps! Page Not Found '
    });
});

app.listen(port, () => {
    console.log(`listen at port ${port}`);
});