var router = require('express').Router();
var teamsCtrl = require('../controllers/teams');

router.get('/teams', teamsCtrl.index);
router.get('/teams/new', isLoggedIn, teamsCtrl.new);
router.get('/teams/:id', teamsCtrl.show);
router.post('/teams', teamsCtrl.create);
router.delete('/teams/:id', teamsCtrl.delTeam);
router.put('/teams/:id', teamsCtrl.update);



function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;