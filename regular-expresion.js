let re;
let str;
re = /hello/;  // bez icega JE case sensitive
re = /hello/i; // i =  case insensitive
re = /hello/gi; // Global search i  insensitive

console.log(re);
console.log(re.source);

// exec() - Return result in an array or null
const result = re.exec("koko hello world vidi hello");
console.log(result);

// test() - Returns true or false
const result1 = re.test("hello");
console.log(result1);

console.log("------------------------------------------------------");
// match() - Return result array or null
str = "Hello There Hello There Hello There";
const result2 = str.match(re);
console.log(result2);

console.log("------------------------------------------------------");
// search() - Returns index of the first match if not found retuns -1
let str1 = "Brad hahah Hello There";
console.log(str1.search(re));

// replace() - Return new string with some or all matches of a pattern
const str2 = "Hello There Hello There Hello There";
const newStr = str2.replace(re, "Hi");
console.log(newStr);

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols

str = "#pokusnitext";
re = /#/i; // Zamjeni # sa blank
console.log(re.test(str), re.exec(str),str.replace(re, ''));

str = "hello world";
re = /^h/i; // Must start with h
console.log(re.test(str), re.exec(str));

str = "hello world";
re = / world$/i; // Must ends with  ' world'
console.log(re.test(str), re.exec(str));

str = "helLo";
re = /^hello$/i; // Must begin and end with
console.log(re.test(str), re.exec(str));

str = " Ajmooo hxllo?";
re = /h.llo/i; // Matches any ONE character
console.log(re.test(str), re.exec(str));

str = " Ajmooo h0llo? xx h3llo?";
re = /h*llo/i; // Matches any character 0 or more times
console.log(re.test(str), re.exec(str));

str = "012345 grey";
re = /gre?a?y/i; // Optional character
console.log(re.test(str), re.exec(str));

str = "gray?";
re = /gre?a?y\?/i; // Escape character
console.log(re.test(str), re.exec(str));

// Brackets [] - Character Sets
str = "grky?";
re = /gr[aekm]y/i; // Must be an a or e or k or m
console.log(re.test(str),re.exec(str));




str = "nesto Fray? ka je sada ovo";
re = /[GFT]ray/; // Must be a G or F or T
console.log(re.test(str),re.exec(str));

str = "Mray?";
re = /[^GF]ray/i; // Match anything except a G or F
console.log(re.test(str),re.exec(str));

str = "Gray?";
re = /[^GF]ray/i; // Match anything except a G or F
console.log(re.test(str),re.exec(str));

str = "Kray?";
re = /[A-Z]ray/; // Match any uppercase letter
console.log(re.test(str),re.exec(str));

str = "lray?";
re = /[a-z]ray/; // Match any lowercase letter
console.log(re.test(str),re.exec(str));

str = "xray?";
re = /[A-Za-z]ray/; // Match any letter, i velika i mala slova
console.log(re.test(str),re.exec(str));

str = "5ray?";
re = /[0-9]ray/; // Match any digit
console.log(re.test(str),re.exec(str));

str = "7ray?";  // FALSE
re = /[0-5]ray/; // Match any digit   
console.log(re.test(str),re.exec(str));

str = "54ray?";
re = /[0-9][0-5]ray/; // Gleda prve dvije znamenke u zadanim rangeovima
console.log(re.test(str),re.exec(str));

str = "5Kray?";
re = /[0-9][A-Z]ray/; // Gleda prve dvije znamenke u zadanim rangeovima
console.log(re.test(str),re.exec(str));


// ***********************************************
// // Braces {} - Quantifiers
str = "Ajmooo hello?";
re = /Hel{2}o/i; // Must occur exactly {m} amount of times ( slovo l se mora pojaviti m puta)
console.log(re.test(str),re.exec(str));

str = "Ajmooo hellllo?";
re = /Hel{2,4}o/i; // Slovo l se mora ponoviti između 2, 3 ili 4 puta
console.log(re.test(str),re.exec(str));

str = "Ajmooo helllllllllllllo?";
re = /Hel{2,}o/i; // Slovo l se mora ponoviti minimalno 2 puta
console.log(re.test(str),re.exec(str));


// **************************************************
// Paretheses () - Grouping
str = "1x2x5x";
re = /^([0-9]x){3}$/; // mora početi sa brojkom dodati x i to ponoviti 3 puta
console.log(re.test(str),re.exec(str));

console.log('****************************************');
str = "oajmo dlje u u x st sdeaoo";
re = /^[aeiou]/i; // string počinje sa [aeiou]
console.log(re.test(str),re.exec(str),str.replace(re, ' -XXX- '));

re = /[aeiou]$/i; // string završava sa [aeiou]
console.log(re.test(str),re.exec(str), str.replace(re, ' -XXX- '));

re = /^[aeiou](.*[aeiou])$/i; // mora početi sa [aeiou] i završiti sa [aeiou]
console.log(re.test(str),re.exec(str));


re = /^([aeiou]).*\1$/i; //počinje i završava sa istim samoglasnikom
console.log(re.test(str),re.exec(str));




console.log('****************************************');

// *********************************
// Shorthand Character Classes
str = " 1x2x5x";
re = /\w/; // jedan znak bilo koji - alphanumeric or _
console.log(re.test(str),re.exec(str));

str = "(ahshhdfo125554)";
re = /\w+/; // jedan znak bilo koji ili više
console.log(re.test(str),re.exec(str));

str = '()!"#$%&/()=?*';
re = /\W/; // sve osim brojke, znakova ili underscore
console.log(re.test(str),re.exec(str));

str = '()!"#$%&/()=?*djiujhu5';
re = /\d/; // bilo koju brojku
console.log(re.test(str),re.exec(str));

str = '()!"#$%&/()=?*d45jiujhu5';
re = /\d+/; // Match any digit 0 or more times
console.log(re.test(str),re.exec(str));

str = "12345K_akRljk()455";  // TRUE
// str = "2";   // FALSE
re = /\D/; // bilo koji znak koji nije broj
console.log(re.test(str),re.exec(str));

str = "12345K_ akRljk()455";
// str = "";  // FALSE
re = /\s/; // Match whitespace,  char ili TAB
console.log(re.test(str),re.exec(str));

str = " j1";  //TRUE
// str = " ";  //FALSE
re = /\S/; // Match non-whitespace char
console.log(re.test(str),re.exec(str));

str = "Hello, dosli u Hell";
re = /Hell\b/i; // Word boundary , mora biti cijela rijec
console.log(re.test(str),re.exec(str));

// // Assertions
str = "jhj   xy  hhh";
re = /x(?=y)/; // Match x only if followed by y
console.log(re.test(str),re.exec(str));

str = "jhj125x☺hhh";
re = /x(?!y)/; // Match x only if NOT followed by y
console.log(re.test(str),re.exec(str));



str = "http://127.0.0.1:5501/radosna/10-zrno.html";
re = /10/;
console.log(str.replace(re,'11'));



// var re = new RegExp("a|b", "i");
// // same as
// var re = /a|b/i;

str = "http://127.0.0.1:5501/radosna/10-zrno.html";
brojka = 10
console.log(typeof(brojka));
brojkaStr = brojka.toString()
console.log(typeof(brojka));
console.log(typeof(brojka));
re = new RegExp(brojkaStr, "i");

console.log(re,typeof(re),str);
console.log(str.replace(re,'11'));




