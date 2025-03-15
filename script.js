function convertToRoman(num) {
    const symbs = [
	    ["M", 1000],
	    ["CM", 900],
	    ["D", 500],
	    ["CD", 400],
	    ["C", 100],
	    ["XC", 90],
	    ["L", 50],
	    ["XL", 40],
	    ["X", 10],
	    ["IX", 9],
	    ["V", 5],
	    ["IV", 4],
	    ["I", 1]
	];
    
	let roman = "";

    symbs.forEach((item) => {
		const [symb, val]=item;
		
        while (num >= val) {
            roman += symb;
            num -= val;
        }
    })

    return roman;
}

console.log(convertToRoman(14));
console.log(convertToRoman(36))

// You can test your code by running the above function:
console.log(convertToRoman(798)); // Output: DCCXCVIII

// Do not edit below this line
module.exports = convertToRoman;
