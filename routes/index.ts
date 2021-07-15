import express from 'express';
const router = express.Router();
export default router;

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});
/* GET Home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home' });
});

/*GET Tournament page. */
router.get('/tournament', function(req, res, next) 
{
  res.render('index', { title: 'Tournament', page: 'tournament' });
});

/*GET Login page. */
router.get('/login', function(req, res, next) 
{
  res.render('index', { title: 'Login', page: 'login' });
});
//module.exports = router;
