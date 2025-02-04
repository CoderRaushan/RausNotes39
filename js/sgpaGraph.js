const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");

// Clear canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Draw X and Y Axis
ctx.beginPath();
ctx.moveTo(50, 400);  // X-axis Start
ctx.lineTo(550, 400); // X-axis End
ctx.moveTo(50, 100);  // Y-axis Start
ctx.lineTo(50, 400);  // Y-axis End
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.stroke();

// Grid Lines & Axis Labels
ctx.strokeStyle = "#ddd";
ctx.lineWidth = 1;
ctx.font = "14px Arial";
ctx.fillStyle = "black";

// X-axis: Semester from 1 to 5
for (let i = 100, sem = 1; i <= 500; i += 100, sem++) {
    ctx.beginPath();
    ctx.moveTo(i, 100);
    ctx.lineTo(i, 400);
    ctx.stroke();
    ctx.fillText(`Sem ${sem}`, i - 15, 420);
}

// Y-axis: SGPA from 7 to 10
for (let i = 400, sgpa = 7; i >= 100; i -= 100, sgpa++) {
    ctx.beginPath();
    ctx.moveTo(50, i);
    ctx.lineTo(550, i);
    ctx.stroke();
    ctx.fillText(sgpa.toFixed(1), 20, i + 5);
}

// Axis Labels
ctx.font = "16px Arial";
ctx.fillText("Semester", 535, 420);
ctx.fillText("SGPA", 10, 90);

// SGPA Data Points (Normalized to Fit)
const sgpaData = [8.20, 9.38, 9.10, 8.96, 9.43]; // Sample SGPA values
const semesters = [1, 2, 3, 4, 5]; // X-Axis values

// Scale SGPA values (7 to 10 range)
const dataPoints = sgpaData.map((sgpa, index) => ({
    x: 100 + index * 100,
    y: 400 - ((sgpa - 7) * 100), // Adjusting to the new Y-axis range (7-10)
    label: sgpa.toFixed(2)
}));

// Draw Line Graph
ctx.beginPath();
ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
dataPoints.forEach(point => {
    ctx.lineTo(point.x, point.y);
});

ctx.strokeStyle = "blue";
ctx.lineWidth = 3;
ctx.stroke();

// Draw Data Points (Circles) & Labels
ctx.fillStyle = "red";
ctx.font = "14px Arial";
ctx.textAlign = "center";

dataPoints.forEach(point => {
    // Draw Circle
    ctx.beginPath();
    ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
    ctx.fill();
    // Display SGPA Value
    ctx.fillText(point.label, point.x, point.y - 10);
});
