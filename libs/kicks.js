var kicks = [
"Air Jordan 11",
"SB Dunk",
"Chuck Taylor",
"Supertar",
"Lebron James 7",
];

exports.getKicks = function(){
	var idx = Math.floor(Math.random()*kicks.length);
	return kicks[idx];
}