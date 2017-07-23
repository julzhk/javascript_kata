// Capitalize each word of a sentence

String.prototype.toCapitalize = function () {
  return this[0].toUpperCase() + this.substring(1)
};


String.prototype.toJadenCase = function () {
  caplist = this.split(" ").map(function(s){
  	return s.toCapitalize()
  })
  return caplist.join(' ')
};

r = 'aaaa bbb ccc'.toJadenCase()

console.log(r)

console.log('aaa'.toCapitalize())