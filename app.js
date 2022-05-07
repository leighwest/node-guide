const path = require('path');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


// app.<something> is middleware. Middleware functions handle a request and should call next() to forward the request to
// the next function in line or send a response. 

app.use(express.urlencoded({ extended: false }));
// automatically forwards any request for css or js file to the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// catch all route
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
