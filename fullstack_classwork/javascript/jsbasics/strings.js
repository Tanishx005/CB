//  strings 

let string1 = "original string 1" 

string2 = new String("       original string 2        ")

string1 = "overwritted!" 

console.log(string1)

// .trim() - used to remove trail and prefix space from the string. 

console.log(string2.trim())

// .length - used to give me length of the string. 

console.log(string1.length)

// .indexOf - give the index of the particular element in a string. 

console.log(string1.indexOf('w'))

// .slice - gives the first and last index

console.log(string1.slice(0,4))

// .toUpperCase()
// .toLowerCase()

// .includes() - return true or false , check the given substring in present or not in string.

console.log(string2.includes('str'))

// backend Url .

let backendUrl = "https://mystore.com"

console.log('My backend is running on: '+ backendUrl)


// task1: 

/* print the MOVIE name in uppercase 
print its length 
...

*/




