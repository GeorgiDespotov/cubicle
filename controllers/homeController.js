const router = require('express').Router();

router.get('/', (req, res) => res.redirect('/products'));

router.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

router.all('*', (req, res) => {
    console.log('here');
    res.render('404', { title: 'Not Found' });
});

module.exports = router;