const express = require('express');
const path = require('path');
// Init App
const app = express();
//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

// Home route
app.get('/', function (req, res) {
    let articles = [{
            id: 1,
            title: 'article One',
            author: 'John',
            body: 'This is article'
      },
        {
            id: 2,
            title: 'article two',
            author: 'mary',
            body: 'This is article'
      },
        {
            id: 3,
            title: 'article Three',
            author: 'karola',
            body: 'This is article'
      },
        {
            id: 4,
            title: 'article F0ur',
            author: 'will',
            body: 'This is article'
      }
                   ];
    res.render('index', {
        title: 'Atricles',
        articles: articles
    });
});
//Add route
app.get('/articles/add', function (req, res) {
    res.render('add_article', {
        title: 'Add Article'
    });
});
//Start server
app.listen(3000, function () {
    console.log('Server started on port 3000 my Queen..:)')
});
