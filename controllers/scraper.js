var request = require('request');
var cheerio = require('cheerio');
 
//srchStr: is one of:
//search by id: id=' + idNum
//state: 's=' + state
//zip/distance: 's=all&zc=' + zip + '&zd=' + distance + 'of=3';
//program: 'p=' + programCode: options: 
//name: 'q=' + name + '&s=all'
//
//*/
module.exports = function scraper(srchStr) {

	var string = "q=" + srchStr;
	return request('http://nces.ed.gov/collegenavigator/?' + string, function (error, response, data) {
		if (!error && response.statusCode === 200) {
			var $ = cheerio.load(data);


			var general = $('#ctl00_cphCollegeNavBody_ucInstitutionMain_dtpGeneral').html();
			
			return general;
		}
	else {
		return "no results found"
	}
	})
}
//
//
//			var expenses = $('#expenses').html();
//
//			var finaid = $('#finaid').html();
//
//			var netprc = $('#netprc').html();
//			var enrolmt = $('#enrolmt').html();
//			var admsns = $('#admsns').html();
//			var retgrad = $('#retgrad').html();
//			var programs = $('#programs').html();
//			var accred = $('#accred').html();
//			var crime = $('#crime').html();
//			var fedloans = $('#fedloans').html();
//
//			/*			
//						var profile = {
//							general: general,
//							expenses: expenses,
//							finaid: finaid,
//							netprc: netprc,
//							enrolmt: enrolmt,
//							admsns: admsns,
//							retgrad: retgrad,
//							programs: programs,
//							accred: accred,
//							crime: crime,
//							fedloans: fedloans
//						};
//						return profile;*/
//
//
////			return [general, expenses, finaid, netprc, enrolmt, admsns, retgrad, programs, accred, crime, fedloans];
////
////		}
//	});*/
//}