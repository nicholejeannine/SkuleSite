// My custom web-scraper-on-the-fly tool. Requires a user id, and nothing else.  Will return an html string that contains all of the data necessary to render all of the tables on the page.

var request = require('request');
var cheerio = require('cheerio');

module.exports = function scraper(idNum) {

	return request('http://nces.ed.gov/collegenavigator/?id=' + idNum, function (error, response, data) {
		if (!error && response.statusCode === 200) {
			var $ = cheerio.load(data);


			var general = $('#ctl00_cphCollegeNavBody_ucInstitutionMain_dtpGeneral').html();


			var expenses = $('#expenses').html();

			var finaid = $('#finaid').html();

			var netprc = $('#netprc').html();
			var enrolmt = $('#enrolmt').html();
			var admsns = $('#admsns').html();
			var retgrad = $('#retgrad').html();
			var programs = $('#programs').html();
			var accred = $('#accred').html();
			var crime = $('#crime').html();
			var fedloans = $('#fedloans').html();

			//TODO: CHOOSE BETWEEN OBJECT AND ARRAY FORMAT
			/*			
						var profile = {
							general: general,
							expenses: expenses,
							finaid: finaid,
							netprc: netprc,
							enrolmt: enrolmt,
							admsns: admsns,
							retgrad: retgrad,
							programs: programs,
							accred: accred,
							crime: crime,
							fedloans: fedloans
						};
						return profile;*/


			return [general, expenses, finaid, netprc, enrolmt, admsns, retgrad, programs, accred, crime, fedloans];

		}
	});
}