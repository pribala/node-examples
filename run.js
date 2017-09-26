var bandList = require("./bands.js");
var genre = process.argv[2];
if(genre){
	console.log(genre);
	for(band in bandList) {
		if(band === genre){
			console.log("A "+band+" band is "+bandList[band]+ ".");
		}
	}
}else {
	for(band in bandList) {
		console.log("A "+band+" band is "+bandList[band]+ ".");
	}
}		