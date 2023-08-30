// Chapter 21 (Changing Case)


// 1. Type the characters that are missing from this code.
// var allLower = userInput.toLowerCase;
// Note: Correct this statement by yourself.

// answer......
// var allLower = userInput.toLowerCase();

// 2. Convert the string represented by x to lower-case and assign the
// result to the same variable.

// answer....
// var x="My name is Mustafa";
// x=x.toLowerCase() ; 
// console.log(x);


// 3. Convert the string represented by y to upper-case and assign the
// result to the same variable.

// answer.....
// var y="mustafa warind";
//  y=y.toUpperCase();


// 4. Convert the string represented by a variable to lower-case and
// assign the result to a second variable that hasn't been declared
// beforehand.

// answer....
// var z ="Mustafa Warind";
// var a=z.toLowerCase();


// 5. Convert the string represented by an array element to lower-case
// and assign it to a variable that hasn't been declared beforehand.

// answer....
// var arr=["my","name", "is" , "Mustafa"];
// var x=arr[3].toLowerCase();
// console.log(x);


// 6. Display in an alert the upper-case version of the string
// represented by a variable.

// answer.....
// var str="hello world!";
// var a=str.toUpperCase();
// alert(a);


// 7. var cityName = “kaRacHi”;
// Convert the string represented by a cityName in Capitalisation is
// the writing of a word with its first letter in uppercase and the
// remaining letters in lowercase.

// answer......
// var cityName = "kaRacHi";
// var x=cityName.slice(0,1);
// x=x.toUpperCase();
// var y=cityName.slice(1);
// y=y.toLowerCase();
// console.log(x+y);

// Chapter 22 - 25 (Strings)

// 1. "captain" has been assigned to variable “sameWords”. You want
// to slice "ap" out of it.

// answer...... 
// var sameWords = "captain";
// var editWord=sameWords.slice(1,3);
// console.log(editWord);

// 2. The number of characters in the string will be assigned to the
// variable.

// answer.....
// var str="hello world";
// str=str.length;
// console.log(str);

// 3. The string "elephant" has been assigned to the variable animal.
// Slice the four middle characters out of the string and assign it to
// the variable seg, which hasn't been declared beforehand.

// answer......
// var animal ="elephant";
// var seg=animal.slice(2,6);
// console.log(seg);

// 4. Find the number of characters in the string represented by a
// variable and assign the number to a second variable.

// answer.....
// var userInput="mustafa";
// var countName=userInput.length;
// console.log("The length of your name: "+countName+"characters");

// 5. In a first statement measure how many characters there are in a
// string represented by a variable. In a second statement slice all
// but the first character and last 3 characters of the string and
// assign it to a second variable that hasn't been declared
// beforehand.

// answer.....
// var text="Hello World!";
// var len=text.length;
// var seg=text.slice(1,len-3);
// console.log(seg);

// 6. var text = "To be or not to be.";
// var indx = text.indexOf("be");
// What is the value of indx?

// answer.....
// var text = "To be or not to be.";
// var indx=text.indexOf("be"); index=3
// console.log(indx);

// 7. var text = "To be or not to be.";
// var indx = text.lastIndexOf("be");
// What is the value of indx?

// answer.....
// var text = "To be or not to be.";
// var indx=text.lastIndexOf("be"); index=16
// console.log(indx);
// Note: Try the above both examples by yourself.

// 8. Find the index of the first character of the last instance of "go" in
// the string represented by the variable text and assign the number
// to the variable indx, which hasn't been declared beforehand.

// answer.....
// var text = "To be or not to be.";
// var indx=text.lastIndexOf("go"); //index=-1 (not in text variable)
// console.log(indx);


// 9. Code the first line of an if statement that tests whether a segment
// with an index represented by indexNum exists in a string.

// answer......have some confusion in it ......
// var text = "To be or not to be." ;
// var indx=text.indexOf("be");
// var indexNum=3;
// if(indx==indexNum)
// {
//     console.log("found text at "+text[indx]);
// }

// 10. In this string "abcde", what character is at index 2? (Use
// charAt)

// answer.....
// var str="abcde";
// var char=str.charAt(2);
// console.log(char);

// 11. Find the 10th character in the string represented by text and
// assign it to the variable cha, which hasn't been declared
// beforehand.

// answer......
// var text ="abcdefghijklmnopqrstuvwxyz";
// var cha=text.charAt(9);
// console.log(cha);

// 12. Find the last character in the string represented by str and
// assign it to x, which hasn't been declared beforehand.

// answer.......
// var str="abcdefg";
// var len=str.length;
// var x=str.charAt(len-1);
// console.log(x);

// 13. Find the the 5th character in a string represented by input
// and assign it to cha, which hasn't been declared beforehand.

// answer....
// var input=prompt("enter your name");
// var cha=input.charAt(4);
// console.log(input);
// console.log(cha);

// 14. Code the first line of an if statement that tests whether the
// 3rd character of a string represented by a variable is a particular
// character.

// answer.....
// var s="hello world"
// var cha=s.charAt(2);
// if(cha==="l")
// {
//     console.log("permission granted");
// }

// 15. Code a for loop that cycles through all the characters of a
// string represented by a variable and assigns each character to an
// element of an array that has been declared beforehand.

// In the string represented by reply replace the first instance of "no"
// with "yes" and assign the revised string to revisedReply, which hasn't
// been declared beforehand.

// answerr.....
// var arr=[];
// var str="abcdefghijklmnop";
// var len =str.length;
// for(var i=0;i<len;i++)
// {
//     arr[i]=str.charAt(i);
//     console.log(arr[i]);
// }
// console.log(arr);
// var reply="do you want parcel ..... yes";
// var revisedReply=reply.replace("yes","no");
// console.log(revisedReply);


// 16. In a string represented by str replace the first instance of "1"
// with "one" and assign the revised string to newStr, which hasn't
// been declared beforehand.

// answer......
// var str="I am 1 years old.";
// var newStr=str.replace("1","one");
// console.log(str+" "+newStr);

// 17. If you want all instances replaced, enter 3 characters that
// need to appear in this statement.
// var y = x.replace("a", "z");

// answer......
// var x="abcdeafgaaaa";
// var y=x.replaceAll("a","z");
// console.log(y);

// Chapter 26 (Rounding Numbers)

// 1. Form a statement that rounds a number to the nearest integer.

// answer......
// var num=5.3;
// var roundNum=Math.round(num);
// console.log(roundNum);

// 2. Round up a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

// answer......
// var num=5.3;
// var roundNum=Math.round(num);
// console.log(roundNum);

// 3. Round down a number represented by origNum and assign it to
// roundNum, which hasn't been declared beforehand.

// answer.......
// var num=5.5;
// var roundNum=Math.floor(num);
// console.log(roundNum);

// 4. Round a number represented by a variable and assign the result
// to a second variable that hasn't been declared beforehand.

// answerr....
// var num=8/3;
// console.log(num);
// var roundNum=Math.round(num);
// console.log(roundNum);

// 5. Round .5 to 0 and assign it to a variable that hasn't been declared
// beforehand.

// answer......
// var num=0.5;
// var roundNum=Math.floor(num);
// console.log(roundNum);

// Chapter 27 (Random Numbers)
// 1. Convert a random number generated by JavaScript to a number in
// the range 1 to 50

// // answer......
// var randNum = Math.random(); // generates numbers between [0-1]
// randNum *= 50;                // multiplies them with 50 so they are now
// randNum += 1                  // between[1 - 50].
// console.log(randNum);

// 2. Generate a random number and assign it to a variable that hasn't
// been declared beforehand.
// // answer.....
// var num=Math.random();
// console.log("The Random Number is "+num+"");

// 3. You have to create a dice in JavaScript with the use of pseudo-
// random number.

// answer.....
// var rollDice = Math.random();
// rollDice*=6;
// rollDice+=1;
// rollDice=Math.floor(rollDice);
// console.log(rollDice);

// 4. You have to create a toss (head/tail) in JavaScript with the use of
// pseudo-random number.

// answer.......
// var coinToss = Math.random() ;
// var toss=Math.round(coinToss);
// if((toss==1))
//   {
//     console.log('Heads');
//   }
//     else
//     {
//         console.log ('Tails');
//     }

// Chapter 28, 29 (Converting Strings)

// 1. How do you convert a string to an integer in JavaScript?
// answer...by using number operator method to convert string in integer
// use parseInt or parseFloat

// 2. Write a JavaScript function to convert the string "123" to an
// integer.
// var str="123";
// var convertNum=parseInt(str);
// console.log(str )
// console.log(convertNum);

// 3. How can you convert a string containing a decimal number to a
// floating-point number in JavaScript?
// answer.... By using parsefloat function


// 4. How can you check if a string can be successfully converted to an
// integer or decimal in JavaScript before performing the
// conversion?
// answerr.... by checking in console.log function if the color turns to purpel hence converted

// 5. How can you convert a number to a string in JavaScript?

// answer...by using toString() function.....

// 6. Write a JavaScript function to convert the number 42 to a string.

// answer...
// var num=42;
// var str =num.toString();
// console.log(str);

// 7. Can you convert a string representing a decimal number (e.g.,
// "3.14") to an integer in JavaScript? If so, how?

// answer.....by using parseInt() function
// var str="3.14";
// var num=parseInt(str);
// console.log(num);



// Chapter 30 (Controlling the length of  decimals)

// 1. Code a statement that rounds a number represented by num to 4
// places, converts it to a string, and assigns it to newNum, which
// hasn't been declared beforehand.

// answer......
// var num=98.64567 ; //number
// console.log(num );
// var newNum=num.toFixed(4);
// console.log(newNum);


// 2. In a single statement round a number represented by a variable to
// 2 places, convert it to a string, convert it back to a number, and
// assign it to the same variable.

// answer.....
// var num=2.4567;
// num=num.toFixed(2);
// console.log(num);
// num=Number(num);//converting string into number
// console.log(num);

// 3. Code the first line of an if statement that tests whether the
// number represented by num, rounded to 2 digits and converted
// to a string, has more than 4 characters in it.

// answer....
// var num=6789.5
// console.log("The random number is "+num+"");
// var newNum=Math.round(num,2);
// console.group(newNum);
// wrong answer....


// 4. Assign a number with many decimal places to a variable.
// Code an alert that displays the number rounded to 2 decimal
// places and converted to a string.

// answer....
// var num=Math.random();
// console.log(num);
// var newNum=num.toFixed(2);
// alert(newNum);

// Chapter 31 - 34 (Date & Time)

// 1. Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.

// // answer.....
// var dObj=new Date();
// console.log(dObj);

// 2. Code a statement that creates a new Date object, converts it to a
// string, and assigns the string to dStr, which hasn't been declared
// beforehand.

// answer....
// var date=new Date();
// var dStr=date.toDateString();
// console.log(dStr);


// 3. Code a statement that extracts the day of the week from a Date
// object represented by d and assigns it to day, which hasn't been
// declared beforehand.

// // answer...
// var d = new Date() ;
// var day=d.getDay();
// console.log(d);
// console.log(day);

// 4. The day has been extracted from the Date object and assigned to
// d. The names of the days of the week have been assigned to the
// array dayNames. Alert the current day with array index.

// // answer....
// var d = new Date();
// var arr=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
// var day=d.getDay();
// alert(arr[day]+" "+day);

// 5. Extract all parts of the Date and Time and assign it to the variable
// which has not been declared beforehand.

// // answer.....
// var d = new Date();
// console.log(d);
// var newDate=d.getDate()+" "+d.getMonth()+" "+d.getFullYear();
// console.log(newDate);


// 6. Code a statement that creates a Date object for the last day of the
// last month of 2020 and assigns it to later, which hasn't been
// declared beforehand.

//answer.....
// var later= new Date("31 december 2020");
// console.log(later);

// 7. Create a Date object for the second day of the second month of
// 1992 and assign it to a variable that hasn't been declared
// beforehand.

// answer....
// var first= new Date("feburary 2 1992");
// console.log(first);

// 8. Code a single statement that displays in an alert the milliseconds
// that elapsed between the reference date and the beginning of
// 1980.

// // answer....
// var startOf1980= new Date("january 1,1980");
// var time=startOf1980.getTime();
// alert(time);



// 9. How do you change the year of a date in JavaScript?

// answer.....by using setFullYear()...

// 10. Write a JavaScript function to change the month of a given
// date to January.

// // answer....
// var date=new Date();
// date.setMonth(0);
// console.log(date);

// 11. What is the method to change the day of the week for a
// specific date in JavaScript?

// // answer...
// var date= new Date();
// date.setDate(5);
// console.log(date);

// 12. Write a JavaScript function to change the minutes of a given
// time to a specific value. (Value by prompt)

// answer.....
// var date=+prompt("enter minutes");
// var newDate=new Date ;
// console.log(newDate);
// newDate.setMinutes(date);
// console.log(newDate);

// 13. Write a JavaScript function to add a specific number of
// hours to a given time.

// // answer.....
// function hour()
// {
//     var date=new Date;
//     console.log(date);
//     var hrs = +prompt('Enter Hours');
//     var getHr=date.getHours();
//     var newDate=hrs+getHr;
//     date.setHours(newDate);
//     console.log(date);
// }
// hour();

// 14. You have to create a age calculator in JavaScript.
// Create an object with two properties: name and birthyear,
// then ask user's input from console about their name & birthday respectively.
// Calculate the current age based on the formula below :
/*
var today = new Date().getFullYear(),
birthYear = 1987;
age = Math.floor((today - birthYear)/100)+1;*/
function ageCalculator()
{
    var userInput=+prompt("enter date of birth mm/dd/yyyy");
    var Dob=new Date(userInput);
    console.log(Dob);
    var monthDiff=Date.now()-Dob.getTime();
    var ageDif=new Date(monthDiff);
    console.log(ageDif);
    var year=ageDif.getFullYear();
    var age=Math.abs(year-2003);
    console.log("age is "+age+" "+"years");

    
}
ageCalculator();//need to understand......






// Chapter 35 - 37 (Functions)

// 1. Code the first line of a function displayAlert.
// // answer.....
// function displayAlert()
// {
//     alert("welcome on board");
// }
// displayAlert();
        
// 2. Code a function named askName that prompts the user to "Enter
// name" and assigns the answer to userName, which hasn't been
// declared beforehand.

// answer....
// function askName()
// {
//     var userName=prompt("enter your name");
//     console.log(userName);
// }
// askName();

// // 3. Code a function that calls 2 other functions.
// function hello()
// {
//     console.log("hello");
// }
// function bye()
// {
//     console.log("bye");
// }

// function callTwoFunction()
// {
//     hello();
//     bye();
// }
// callTwoFunction();

// 4. Code a function that displays a prompt, "Enter name" and then
// displays the name in an alert. Call the function.
// answer....
// function getName(userName)
// {
//     alert(userName);

// }
// var userName=prompt("enter your name");
// getName(userName);

// 5. Code the first line of a function named concat that has 3
// parameters, the first three letters of the alphabet. Call that takes
// a variable, a string, and a number as arguments.

// // answer.....
// function concat(a ,b,c)// 3 parameters
// {
//     console.log(a,b,c);

// }
// concat("x : ","mustafa ",22);// 3 arguments

// 6. Code a function that has 2 parameters. Concatenate them and
// assign the result to a variable that hasn't been declared
// beforehand.
// // answer.....
// function concate(inp1,inp2)
// {
//     var result=inp1+" "+inp2;
//     console.log(result);
// }
// var input1=prompt("enter first name");
// var input2=prompt("enter last name");
// concate(input1,input2);

// 7. Code a function that has three parameters. Multiply them and
// assign them to a variable that hasn't been declared yet.
// answer....
// function multiply(num1, num2,num3)
// {
//     var total=num1*num2*num3;
//     console.log(total);
// }
// multiply (80,90,-10 );

// 8. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.
// function average(arr)
// {
//     for(var i=0;i<2;i++)
//     {
//         var total;
//         var result;
//         var sum=arr[i]+arr[(i+1)];
//         console.log(sum);
//         total=sum;
//         console.log(total);
//         result=total/2;
//         console.log(result);
//     }
// }
// var arr=[10,20];
// average(arr); some questions to be asked


// 9. Write a JavaScript function that takes two parameters and returns
// their sum.
// answer.....
// function add(a ,b)
// {
//     var total=a+b;
//     console.log(total);
// }
// add(5,8);

// 10. Write a JavaScript function that takes an array of numbers as
// input and returns the average of those numbers.
// question to be asked...........


// 11. You have to capture the returned value from a function and
// store it in a variable?
// // answer......
// function myFunction()
// {
//     var total=5+8;
//     return(total);
// }

// var result=myFunction();
// console.log(result);

// 12. Write a function which tells letter counts of (word).
// answer.......
// function countLetter(str)
// {
//     var count=countLetter(str);
//        console.log(count);
// }
// var str="ab&c";
// countLetter(str); need solution

// 13. Write a function to set (year) in date object.
// answer....
// function setYearInDateObject(dateObj)
// {
//     var date=new Date;
//     console.log(date);
//     date.setFullYear(dateObj);
//     console.log(date);
// }
// setYearInDateObject(2020);

// 14. Write a function which tells the age of a person who Born on
// (dateOfBirth)
// answer..
// function getAgeOfPerson(birthDay)
// {
//     var today = new Date();
//      var getYear=today.getFullYear();
//      var age=getYear-birthDay;
//      console.log(age);

// }
// var birthDay=2003;
// getAgeOfPerson(birthDay);

// 15. Write a function which tells the presense of (word) in an
// array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima']
// result should be in true or false
// // answer....
// function checkPresenseofWordinArray(array, word)
// {
//     var flag=false ;
//     for(var i=0;i<array.length;++i)
//     {
//         if(array[i]===word)
//         {
//             flag=true;
//             break;
//         }

//     }
//     if(flag)
//     {
//         console.log("true");
//     }
//     else{
//         console.log("false");
//     }
    
// }
//  var array = ['zaid','haris','raza','abubakar','hassan','hussain','fatima'];
//  var word=prompt("enter name you want to search");
//  checkPresenseofWordinArray(array ,word );

// 16. Write a function which repeat (letter) 10 times.
// Hint: "abcde" str.repeat(10)
// answer.....
// function letterRepeat(str)
// {
//     var repeat=str.repeat(10);
//     console.log('the string is '+repeat+'');

// }
// var str="abcdefgh";
// letterRepeat(str);

// 17. write a function which reverse array = ['a','b','c','d','e']
// Hint: arr.reverse()
// // answer.....
// function reversingArray(arr)
// {
//     var arrRev=arr.reverse();
//     console.log(arrRev);
// }
// var arr=["a","b","c","d","e","f"];
// reversingArray(arr);

// Chapter 38 (Local vs. Global

// Variables)

// 1. Write a JavaScript function that demonstrates the usage of a local
// variable.
// answer......
// function myFunction()
// {
//     var greet="hello buddy";// this is local variable will only work once function is called
//     console.log(greet);
// }
// myFunction();

// 2. How can you access a global variable inside a function in
// JavaScript?
// function myFunction(str)
// {
//     greet="hello "+str;//thats how we use global variable it can be used without calling of function
//     console.log(greet);
// }
// var greet;
// var str=prompt("enter your name");
// myFunction(str);



// Chapter 39, 40 (Switch Statements)
// 1. Write a JavaScript switch statement that checks the value of a
// variable and performs different actions based on different cases.
// answer.....
// var num1=+prompt("enter input 1");
// var num2=+prompt("enter input 2");
// var operator=prompt("choose one of the operators + ,-,/,*");
// switch(operator)
// {
//     case "*":
    
//         console.log((num1*num2));
//         break;

//     case "+":
//         console.log(num1+num2);
//         break;    
//     case "/":
//         console.log(num1/num2);
//         break;
//     case "-":
//         console.log(num1-num2);
//         break;
//      default:
//         console.log('invalid');
// }

// 2. Write a JavaScript switch statement that check whether cityName
// given by user check the cityName if match alert the user and
// break the statement, if not default message will be shown to user.

// answer....
// var cityname = prompt ("Enter City Name : ");
// switch(cityname){
//     case "Mumbai" || 'mumbai':
//         console.log ('Welcome To Mumbai')
//         break ;
//         case "Delhi"||'delhi'||'new delhi':
//             console.log('welcome to Delhi');
//             break;
//          default:
//             console.log("Sorry we don't serve this " +cityname);
// }