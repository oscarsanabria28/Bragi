var Logger = new Object();

Logger.error = function(msg){
	console.log("ERROR: "+msg);
};

Logger.info = function(msg){
	console.log("INFO: "+msg);
};

Logger.debug = function(msg){
	console.log("DEBUG: "+msg);
};

Logger.warn = function(msg){
	console.log("WARN: "+msg);
};

module.exports = Logger;