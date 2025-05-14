// global variables 
let mark = 0
let quizNumber = 0
let quizTopic = "Javascript"

// quiz question and answer storing in array as objects
let quizData = [
    {
        question : "1. Inside which HTML element do we put the JavaScript?",
        a : "javascript",
        b : "js",
        c : "src",
        d : "script",
        answer : "d"
    },
    {
        question : "2. Where is the correct place to insert a JavaScript?",
        a : "Both the head section and the body section are correct",
        b : "The head section",
        c : "The body section",
        d : "None of the above",
        answer : "a"
    },
    {
        question : "3. How do you create a function in JavaScript?",
        a : "Yes",
        b : "No",
        c : "Depends on the type of include",
        d : "None of the above",
        answer : "b"
    },
    {
        question : "4. What is the correct syntax for referring to an external script called 'gfg.js'?",
        a : 'script name="gfg.js"',
        b : 'script href="gfg.js"',
        c : 'script src="gfg.js"',
        d : "None of these",
        answer : "c"
    },
    {
        question : "5. How many ways are there with which we can declare a variable in javascript?",
        a : "Only one",
        b : "Three",
        c : "Infinitely many",
        d : "None of the above",
        answer : "b"
    },
    {
        question : "6. Which data structure in javascript is used to maintain only unique values out of the given data",
        a : "Set",
        b : "array",
        c : "strings",
        d : "All of the above",
        answer : "a"
    },
    {
        question : "7. Which of the following variable names are correct according to JavaScript? (Multiple Choices may be correct)",
        a : "let 1name;",
        b : "let #name;",
        c : "let_name;",
        d : "let _name;",
        answer : "c"
    },
    {
        question : "8. What keyword is used to declare a variable in JavaScript?",
        a : "var",
        b : "int",
        c : "float",
        d : "string",
        answer : "a"
    },
    {
        question : '9. Which of the following represent truthy values in javascript',
        a : "true",
        b : "{}",
        c : "[]",
        d : "All of the above",
        answer : "d"
    },
    {
        question : "10. An object is an unordered collection of _______.",
        a : 'values',
        b : 'names',
        c : 'Properties',
        d : 'All of the above',
        answer : "c"
    },
]

// get elements from DOM
let questionHeading = document.querySelector(".questionHeading")
let optionA = document.querySelector(".optionA")
let optionB = document.querySelector(".optionB")
let optionC = document.querySelector(".optionC")
let optionD = document.querySelector(".optionD")
let submitBtn = document.getElementById("submit")
let options = document.querySelectorAll(".option")
let quizContainer = document.querySelector(".quizz-container")
let feedback = document.getElementById("feedback")

// task 1 : get question and options to UI
function displayQuestionAndOptions(){
    questionHeading.innerHTML = quizData[quizNumber].question
    optionA.innerHTML = quizData[quizNumber].a
    optionB.innerHTML = quizData[quizNumber].b
    optionC.innerHTML = quizData[quizNumber].c
    optionD.innerHTML = quizData[quizNumber].d
}

// task 2 : get user selected option
function getUserOption(){
    let  userOption
    options.forEach( function (option){
        if(option.checked === true){
            userOption = option.id 
        }
    })
    return userOption
}

// task 3 : submit selected option
function submitOption(){
    submitBtn.addEventListener("click", function(event){
        event.preventDefault()

        // task 4 : check user selected option correct or not
        let userSelectedOption = getUserOption()

        // set feedback content nil when user select an option
        feedback.innerHTML = ""

        // Validate if an option is selected
        if (!userSelectedOption) {
            feedback.innerHTML = "Please select an option before submitting!";
            feedback.style.color = "red" ;
            return; // Stop further execution
        }

        if(userSelectedOption === quizData[quizNumber].answer){
            // alert(" yes you are right congrats "+userSelectedOption)
            mark += 1
        }
        else{
            // alert("Oops you are wrong , next time "+userSelectedOption)
        }

        // reset the checked state of option in each question
        options.forEach(function(option){
            option.checked = false
        })

        // update quiz number
        quizNumber += 1

        // check if there is another question or not
        if(quizNumber < quizData.length){
            displayQuestionAndOptions()
        } else {
            quizContainer.innerHTML = `<h2>Quiz Completed.</h2>`
            quizContainer.innerHTML += `<h2>Your score is ${mark} out of ${quizData.length}</h2>`
        }

    })
}

// function invoke
displayQuestionAndOptions()
submitOption()


