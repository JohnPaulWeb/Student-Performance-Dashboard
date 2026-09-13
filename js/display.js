import {
    calculateFinalGrade,
    getAcademicStatus,
    getPerformanceRemark,
    calculateClassAverage,
    countPassingStudents,
    getTopStudent
} from "./gradeUtils.js";



export function displayStudents(students) {

    const studentList =
        document.querySelector("#studentList");


   
    if (students.length === 0) {

        studentList.innerHTML =
            '<div class="empty">No students found</div>';

        return;
    }


    studentList.innerHTML = "";


    
    students.forEach(
        ({
            id,
            name,
            block,
            quiz,
            lab,
            exam
        }) => {

            const finalGrade =
                calculateFinalGrade({
                    id,
                    name,
                    block,
                    quiz,
                    lab,
                    exam
                });


            const status =
                getAcademicStatus(finalGrade);


            const remark =
                getPerformanceRemark(finalGrade);


            const article =
                document.createElement("article");


            article.className =
                "student-card";


            article.innerHTML = `

                <div class="student-header">

                    <div>

                        <h2>
                            ${name}
                        </h2>

                        <div class="block">
                            ${block} · ID ${id}
                        </div>

                    </div>


                    <div class="grade">
                        ${finalGrade.toFixed(2)}
                    </div>

                </div>


                <div class="score-grid">

                    <div class="score">

                        <span>
                            Quiz (25%)
                        </span>

                        <strong>
                            ${quiz}
                        </strong>

                    </div>


                    <div class="score">

                        <span>
                            Laboratory (35%)
                        </span>

                        <strong>
                            ${lab}
                        </strong>

                    </div>


                    <div class="score">

                        <span>
                            Prelim Exam (40%)
                        </span>

                        <strong>
                            ${exam}
                        </strong>

                    </div>

                </div>


                <div class="status-row">

                    <span class="badge">
                        Status: ${status}
                    </span>

                    <span class="badge">
                        Remark: ${remark}
                    </span>

                </div>

            `;


            studentList.appendChild(article);

        }
    );

}




export function displaySummary(students) {

    const average =
        calculateClassAverage(students);


    const passing =
        countPassingStudents(students);


    const topStudent =
        getTopStudent(students);


    document.querySelector(
        "#classAverage"
    ).textContent =
        average.toFixed(2);


    document.querySelector(
        "#passingCount"
    ).textContent =
        passing;


    document.querySelector(
        "#displayedCount"
    ).textContent =
        students.length;


    document.querySelector(
        "#topStudent"
    ).textContent =

        topStudent

            ? `${topStudent.name} (${calculateFinalGrade(topStudent).toFixed(2)})`

            : "None";

}



export function displayMessage(message) {

    document.querySelector(
        "#messageArea"
    ).textContent = message;

}