function loadStudentMarks() {
            const tableBody = document.getElementById('marksTableBody');
            tableBody.innerHTML = ''; // Clear the table

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);

                if (key.startsWith('student_')) {
                    const student = JSON.parse(localStorage.getItem(key));

                    // Create a row with the student's info
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${student.rollNumber}</td>
                        <td>${student.fullName}</td>
                        <td>${student.physicsMarks}</td>
                        <td>${student.chemistryMarks}</td>
                    `;
                    tableBody.appendChild(row);
                }
            }
        }

        // Load student marks when the page loads
        window.onload = loadStudentMarks;