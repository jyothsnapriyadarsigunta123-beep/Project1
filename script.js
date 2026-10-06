let students = [];

let studentNumber = 1;


document.getElementById("studentForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        let name =
            document.getElementById("name").value;

        let cgpa =
            Number(document.getElementById("cgpa").value);

        let role =
            document.getElementById("role").value;

        let project =
            document.getElementById("project").value;


        let skills =
            document.getElementById("skills")
            .value
            .split(" ")
            .filter(skill => skill !== "");


        let student = {

            student_id: [
                studentNumber,
                "ALG2026"
            ],

            name: name,

            cgpa: cgpa,

            role: role,

            project: project,

            skills: skills
        };


        students.push(student);

        studentNumber++;


        displayStudents();


        document.getElementById("studentForm").reset();

    });



function displayStudents() {

    let table =
        document.getElementById("studentTable");


    table.innerHTML = "";


    students.forEach(function(student) {


        let eligible =
            student.cgpa >= 7 &&
            student.skills.some(
                skill =>
                skill.toLowerCase() === "python"
            );


        let row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                ${student.student_id[0]}-${student.student_id[1]}
            </td>

            <td>
                ${student.name}
            </td>

            <td>
                ${student.cgpa}
            </td>

            <td>
                ${student.role}
            </td>

            <td>
                ${student.project}
            </td>

            <td>
                ${student.skills.join(", ")}
            </td>

            <td class="${eligible ? "eligible" : "not-eligible"}">

                ${eligible ? "Eligible" : "Not Eligible"}

            </td>

        `;


        table.appendChild(row);

    });

}