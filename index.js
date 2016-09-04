'use strict';

var p = 'TGGCATGCGACCCACGCCAGTGCTCACGAAGCGGACGCAAACGATGCGACTGCAATACTGAATGCTGTTGCGGATTAT';
var data = {F: ['TTT', 'TTC'], L: ['TTA', 'TTG', 'CTT', 'CTC', 'CTA', 'CTG'], I: ['ATT', 'ATC', 'ATA'], M: ['ATG'], V: ['GTT', 'GTC', 'GTA', 'GTG'], S: ['TCT', 'TCC', 'TCA', 'TCG', 'AGT', 'AGC'], P: ['CCT', 'CCC', 'CCA', 'CCG'], T: ['ACT', 'ACC', 'ACA', 'ACG'], A: ['GCT', 'GCC', 'GCA', 'GCG'], Y: ['TAT', 'TAC'], H: ['CAT', 'CAC'], Q: ['CAA', 'CAG'], N: ['AAT', 'AAC'], K: ['AAA', 'AAG'], D: ['GAT', 'GAC'], E: ['GAA', 'GAG'], C: ['TGT', 'TGC'], W: ['TGG'], R: ['CGT', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG'], G: ['GGT', 'GGC', 'GGA', 'GGG']};
var result = '';
for(var i = 0; i < p.length / 3; i++) {
	var t = p.substr(i * 3, 3);
	for(var j in data) {
		if(data[j].indexOf(t) != -1) {
			result += j;
		}
	}
}
console.log(result);