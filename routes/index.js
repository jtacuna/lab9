 /*
 * GET home page.
 */
var labs = require('../labs.json');
console.log(labs);

exports.view = function(req, res){
  if(labs.length < 9) {
	// ! ERROR FIX, no [] around {}
  	var todaysLab = {
		"id": "lab-9",
		"title": "Debugging 101",
		"date": "March 7",
		"image": "debug.png"
	};

  	labs.push(todaysLab);
  }
  else {
	console.log("not entering the if statement");
	}
  	console.log(labs);

  res.render('index', {
	'labs': labs
  });
};
