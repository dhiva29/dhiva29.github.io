function calculateCGPA() {
    let credits = [4, 4, 4, 3, 3, 4, 2];
    let totalCredits = 24;
    let totalPoints = 0;

    let grades = document.querySelectorAll(".grade");
    
    grades.forEach((grade, index) => {
        let gradePoint = parseFloat(grade.value);
        totalPoints += gradePoint * credits[index];
    });

    let cgpa = totalPoints / totalCredits;
    let message = "";

    if (cgpa >= 9) {
        message = "🌟 Excellent work! Keep it up!";
    } else if (cgpa >= 8) {
        message = "🎉 Great job! Keep pushing!";
    } else if (cgpa >= 7) {
        message = "👍 Good effort! Stay consistent!";
    } else if (cgpa >= 6) {
        message = "😊 Keep improving!";
    } else {
        message = "📖 Work harder, you can do it!";
    }

    document.getElementById("result").innerHTML = `Your CGPA: ${cgpa.toFixed(2)} <br> ${message}`;
}
