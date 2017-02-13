const Company = require('../models/Company');
const Reason = require('../models/Reason');
const WouldQuit = require('../models/WouldQuit');

/**
 * GET /
 * Home page.
 */
exports.selectCompany = (req, res) => {

  Company.find((err, companies) => {
    
	  res.render('wouldquit/select_company', {
	    title: 'Select company',
	    companies: companies
	  });
  });
};

exports.selectReasons = (req, res) => {

	Reason.find((err, reasons) => {
		if(err){ res.redirect('/') }

		res.render('wouldquit/select_reasons', {
			title: 'Select reasons',
			reasons: reasons,
			company_id: req.query.company
		});
	});

};

exports.finish = (req, res) => {

	var wouldQuit = new WouldQuit({
		user: req.user._id,
		company: req.query.company,
		reasons: [
			req.query.reason1, 
			req.query.reason2, 
			req.query.reason3
		],
		other_reason: req.query.other_reason
	});

	console.log(wouldQuit);

	wouldQuit.save((err) => {
		if(err) { res.redirect('/') } else {
			res.render('wouldquit/finish', {
				title: 'Thank You !',
				content: 'Your appreciation has been taken. Thank you !'
			});
		}
	});

};


exports.stats = (req, res) => {

	WouldQuit
		.find()
		.populate('company user reasons')
		.exec((err, wouldquits) => {
			res.render('wouldquit/stats', {
				quitters: wouldquits
			});
		});
};

