// Question 1:

// Variaables + Operator

// Create two variables num1 and num2 with any two numbers. Check which number is greater and print the greater number in the console.

var num1 = 30;
var num2 = 25;

console.log(num1);

// Ans will be 30.


// Question 2:

//  If Else + Comparison Operator

// Creat a variable age. If age is 18 or greater than 18, print "You are eligible to vote", otherwise print "You are not eligible to vote.

var age = 21;

if(age > 18){
    console.log("You are eligible for vote.");
}
else{
    console.log("Not eligible for vote");
}

// "You are eligible for vote" is Ans.


// Question 3:

// If Else + Logical Operator

// Create a variable marks. If marks are greater than 50 AND less than or equal to 100, print "Pass", otherwise print "Fail or Invalid Marks".

var marks = 45;

if(marks > 50 && marks <= 100){
    console.log("Pass");
}
else{
    console.log("Fail or Invalid Marks");
}

// "Fail or Invalid Marks" is Ans.


// Question 4:

// Nested If Else

// Create a variable num. First check if the number is Positive, Negative or Zero. If the number is Positive, then inside it again check if it is Even or Odd.

var num = 12;

if(num > 0){
    console.log("Positive");
    if (num % 2 ===0){
        console.log("Even");
    } else{
        console.log("Odd");
    }
} else if(num < 0){
    console.log("Negative");
}else{
    console.log("Zero");
}
// Positive and Even are ans..




// Question 5:

// Question 5: Nested If Else + Variables

// Create two variables username and password. First check if username is correct or not. If it is correct, then inside it check if password is correct or not. If both are correct, print "Login Successful", otherwise print the message of which one is wrong.

var username = "jhon";
var password = "12911";

if(username === "jhon"){
    console.log("USER NAME IS CORRECT");

if(password === "12911"){
    console.log("Login Successfull");
}
else{
    console.log("Password is wrong");
}
} else{
    console.log("User Name is Wrong");
}
// "USER NAME IS CORRECT"
// "Login Successfull" are Right ans.