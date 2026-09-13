

import { students } from "./students.js";


import {
    searchStudents,
    filterStudentsByBlock,
    filterStudentsByStatus
} from "./gradeUtils.js";




import {
    displayStudents,
    displaySummary,
    displayMessage
} from "./display.js";




const searchInput =
    document.querySelector("#searchInput");

const blockFilter =
    document.querySelector("#blockFilter");

const statusFilter =
    document.querySelector("#statusFilter");

const applyBtn =
    document.querySelector("#applyBtn");

const resetBtn =
    document.querySelector("#resetBtn");




function updateDashboard() {

    // Start with searching
    let results =
        searchStudents(
            students,
            searchInput.value
        );


 
    results =
        filterStudentsByBlock(
            results,
            blockFilter.value
        );


   
    results =
        filterStudentsByStatus(
            results,
            statusFilter.value
        );


    
    displayStudents(results);


    
    displaySummary(results);


  
    if (results.length === 0) {

        displayMessage(
            "No students found"
        );

    } else {

        displayMessage("");

    }

}




function resetDashboard() {

    // Clear search
    searchInput.value = "";


    
    blockFilter.value = "All";



    statusFilter.value = "All";


    
    displayStudents(students);


    
    displaySummary(students);


  
    displayMessage("");

}




applyBtn.addEventListener(
    "click",
    updateDashboard
);

 

resetBtn.addEventListener(
    "click",
    resetDashboard
);




searchInput.addEventListener(
    "input",
    updateDashboard
);




blockFilter.addEventListener(
    "change",
    updateDashboard
);




statusFilter.addEventListener(
    "change",
    updateDashboard
);



displayStudents(students);

displaySummary(students);

displayMessage("");