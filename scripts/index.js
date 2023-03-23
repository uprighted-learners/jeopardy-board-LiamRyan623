// Do not change the import statement

// This statement imports the exported file so it's contents are accessible to us.
// This make the "placeholderQuestions" act like a variable essentially

/* import placeholderQuestions from "./placeholder-questions.js";
// Is an object who's contents are the files data
console.log({ placeholderQuestions });
console.log(placeholderQuestions[0]);
 */

// Global Variables
let natureQuestions = [];

// When I need a question/Answer I can iterate over the array
function fetchQuestion() {  

    fetch("./questions.json") 
    .then(res => res.json())
    .then(data => {
        let test = data.placeholderQuestions;
        //console.log(test);
        sortCategories(test);
})
} // I want to pass test to another function that will sort out the objects by category. 

fetchQuestion();

function sortCategories(questionArray) {
    console.log("Doing sortCategories function.")
    for (let i = 0; i <= questionArray.length; i++) {
        // console.log(questionArray[i]);
        //console.log(questionArray[i].category);
        //if (questionArray[i].category === "Nature") {
            //console.log(questionArray[i]);
           // natureQuestions.push(questionArray[i]);
       // } else {
            //console.log("Not nature.")
        //}
    }
}

console.log(natureQuestions);