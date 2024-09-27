const rollNumber = localStorage.getItem('rollNumber');
        const fullName = localStorage.getItem('fullName');
        
        // Get marks from localStorage
        const chemistryMarks = localStorage.getItem('chemistryMarks');
        const physicsMarks = localStorage.getItem('physicsMarks');

        // Display student details and results
        document.getElementById('studentDetails').innerHTML = `Roll Number: ${rollNumber} <br> Full Name: ${fullName}`;
        document.getElementById('resultDetails').innerHTML = `Chemistry Marks: ${chemistryMarks} <br> Physics Marks: ${physicsMarks}`;
