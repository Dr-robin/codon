'use strict';

var p = 'TGGCATGCGACCCACGCCAGTGCTCACGAAGCGGACGCAAACGATGCGACTGCAATACTGAATGCTGTTGCGGATTAT';
for(var i = 0; i < p.length / 3; i++) {
	var t = p.substr(i * 3, 3);
	console.log(t);
}