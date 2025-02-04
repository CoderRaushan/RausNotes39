// // const canvas = document.getElementById("graphCanvas");
// // const ctx = canvas.getContext("2d");

// // // Clear canvas
// // ctx.clearRect(0, 0, canvas.width, canvas.height);

// // // Draw X and Y Axis
// // ctx.beginPath();
// // ctx.moveTo(50, 400);  // X-axis Start
// // ctx.lineTo(550, 400); // X-axis End
// // ctx.moveTo(50, 100);  // Y-axis Start
// // ctx.lineTo(50, 400);  // Y-axis End
// // ctx.strokeStyle = "black";
// // ctx.lineWidth = 2;
// // ctx.stroke();

// // // Grid Lines & Axis Labels
// // ctx.strokeStyle = "#ddd";
// // ctx.lineWidth = 1;
// // ctx.font = "14px Arial";
// // ctx.fillStyle = "black";

// // // X-axis: Semester from 1 to 5
// // for (let i = 100, sem = 1; i <= 500; i += 100, sem++) {
// //     ctx.beginPath();
// //     ctx.moveTo(i, 100);
// //     ctx.lineTo(i, 400);
// //     ctx.stroke();
// //     ctx.fillText(`Sem ${sem}`, i - 15, 420);
// // }

// // // Y-axis: SGPA from 7 to 10
// // for (let i = 400, sgpa = 7; i >= 100; i -= 100, sgpa++) {
// //     ctx.beginPath();
// //     ctx.moveTo(50, i);
// //     ctx.lineTo(550, i);
// //     ctx.stroke();
// //     ctx.fillText(sgpa.toFixed(1), 20, i + 5);
// // }

// // // Axis Labels
// // ctx.font = "16px Arial";
// // ctx.fillText("Semester", 535, 420);
// // ctx.fillText("SGPA", 10, 90);

// // // SGPA Data Points (Normalized to Fit)
// // const sgpaData = [8.20, 9.38, 9.10, 8.96, 9.43]; // Sample SGPA values
// // const semesters = [1, 2, 3, 4, 5]; // X-Axis values

// // // Scale SGPA values (7 to 10 range)
// // const dataPoints = sgpaData.map((sgpa, index) => ({
// //     x: 100 + index * 100,
// //     y: 400 - ((sgpa - 7) * 100), // Adjusting to the new Y-axis range (7-10)
// //     label: sgpa.toFixed(2)
// // }));

// // // Draw Line Graph
// // ctx.beginPath();
// // ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
// // dataPoints.forEach(point => {
// //     ctx.lineTo(point.x, point.y);
// // });

// // ctx.strokeStyle = "blue";
// // ctx.lineWidth = 3;
// // ctx.stroke();

// // // Draw Data Points (Circles) & Labels
// // ctx.fillStyle = "red";
// // ctx.font = "14px Arial";
// // ctx.textAlign = "center";

// // dataPoints.forEach(point => {
// //     // Draw Circle
// //     ctx.beginPath();
// //     ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
// //     ctx.fill();
// //     // Display SGPA Value
// //     ctx.fillText(point.label, point.x, point.y - 10);
// // });


// const canvas = document.getElementById("graphCanvas");
// const ctx = canvas.getContext("2d");

// // Make Canvas Responsive
// function resizeCanvas() 
// {
//     // canvas.width = window.innerWidth * 0.9; // 90% of screen width
//     // canvas.height = 400; // Fixed height for consistency
//     // drawGraph();
//     if (window.innerWidth > 600) {
//         // For Laptops and Larger Screens
//         canvas.width = 600;
//         canvas.height = 400;
//     } 
//     else {
//         // For Mobile Devices
//         canvas.width = window.innerWidth * 0.9; // 90% of screen width
//         canvas.height = 400; // Adjusted height for small screens
//     }
//     drawGraph();
// }

// // Draw Graph Function
// function drawGraph() {
//     // Clear Canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Set Dynamic Width Variables
//     const padding = 50;
//     const graphWidth = canvas.width - 2 * padding;
//     const xStep = graphWidth / 5; // 5 semesters

//     // Draw X and Y Axis
//     ctx.beginPath();
//     ctx.moveTo(padding, 350);  
//     ctx.lineTo(canvas.width - padding, 350); // X-axis
//     ctx.moveTo(padding, 100);  
//     ctx.lineTo(padding, 350); // Y-axis
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 2;
//     ctx.stroke();

//     // Grid Lines & Axis Labels
//     ctx.strokeStyle = "#ddd";
//     ctx.lineWidth = 1;
//     ctx.font = "14px Arial";
//     ctx.fillStyle = "black";

//     // X-axis: Semester from 1 to 5
//     for (let i = 0, sem = 1; i < 5; i++, sem++) {
//         let x = padding + i * xStep + xStep / 2;
//         ctx.beginPath();
//         ctx.moveTo(x, 100);
//         ctx.lineTo(x, 350);
//         ctx.stroke();
//         ctx.fillText(`Sem ${sem}`, x - 15, 370);
//     }

//     // Y-axis: SGPA from 7 to 10
//     for (let i = 350, sgpa = 7; i >= 100; i -= 83.33, sgpa++) {
//         ctx.beginPath();
//         ctx.moveTo(padding, i);
//         ctx.lineTo(canvas.width - padding, i);
//         ctx.stroke();
//         ctx.fillText(sgpa.toFixed(1), 20, i + 5);
//     }

//     // Axis Labels
//     ctx.font = "16px Arial";
//     ctx.fillText("Semester", canvas.width - 80, 390);
//     ctx.fillText("SGPA", 10, 90);

//     // SGPA Data Points (Normalized to Fit)
//     const sgpaData = [8.20, 9.38, 9.10, 8.96, 9.43]; // Sample SGPA values

//     const dataPoints = sgpaData.map((sgpa, index) => ({
//         x: padding + index * xStep + xStep / 2,
//         y: 350 - ((sgpa - 7) * (250 / 3)), // Adjust Y scaling dynamically
//         label: sgpa.toFixed(2)
//     }));

//     // Draw Line Graph
//     ctx.beginPath();
//     ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
//     dataPoints.forEach(point => {
//         ctx.lineTo(point.x, point.y);
//     });

//     ctx.strokeStyle = "blue";
//     ctx.lineWidth = 3;
//     ctx.stroke();

//     // Draw Data Points (Circles) & Labels
//     ctx.fillStyle = "red";
//     ctx.font = "14px Arial";
//     ctx.textAlign = "center";

//     dataPoints.forEach(point => {
//         // Draw Circle
//         ctx.beginPath();
//         ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
//         ctx.fill();
//         // Display SGPA Value
//         ctx.fillText(point.label, point.x, point.y - 10);
//     });
// }

// // Call Resize Function & Redraw on Window Resize
// window.addEventListener("resize", resizeCanvas);
// resizeCanvas();

// const canvas = document.getElementById("graphCanvas");
// const ctx = canvas.getContext("2d");

// // Function to Set Canvas Size Responsively
// function resizeCanvas() {
//     const screenWidth = window.innerWidth;

//     if (screenWidth > 600) {
//         // For Laptops (Fixed size)
//         canvas.width = 600;
//         canvas.height = 400;
//     } else {
//         // For Mobile Devices (Responsive)
//         canvas.width = screenWidth - 20; // 20px margin for safety
//         canvas.height = 300; // Adjusted height for small screens
//     }
//     drawGraph();
// }

// // Function to Draw the Graph
// function drawGraph() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Define Padding and Dynamic Scaling
//     const padding = 50;
//     const graphWidth = canvas.width - 2 * padding;
//     const xStep = graphWidth / 5; // 5 semesters

//     // Draw X and Y Axis
//     ctx.beginPath();
//     ctx.moveTo(padding, canvas.height - 50);
//     ctx.lineTo(canvas.width - padding, canvas.height - 50); // X-axis
//     ctx.moveTo(padding, 50);
//     ctx.lineTo(padding, canvas.height - 50); // Y-axis
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 2;
//     ctx.stroke();

//     // Grid Lines & Axis Labels
//     ctx.strokeStyle = "#ddd";
//     ctx.lineWidth = 1;
//     ctx.font = "14px Arial";
//     ctx.fillStyle = "black";

//     // X-axis: Semester from 1 to 5
//     for (let i = 0, sem = 1; i < 5; i++, sem++) {
//         let x = padding + i * xStep + xStep / 2;
//         ctx.beginPath();
//         ctx.moveTo(x, 50);
//         ctx.lineTo(x, canvas.height - 50);
//         ctx.stroke();
//         ctx.fillText(`Sem ${sem}`, x - 15, canvas.height - 30);
//     }

//     // Y-axis: SGPA from 7 to 10
//     for (let i = canvas.height - 50, sgpa = 7; i >= 50; i -= (canvas.height - 100) / 3, sgpa++) {
//         ctx.beginPath();
//         ctx.moveTo(padding, i);
//         ctx.lineTo(canvas.width - padding, i);
//         ctx.stroke();
//         ctx.fillText(sgpa.toFixed(1), 20, i + 5);
//     }

//     // Axis Labels
//     ctx.font = "16px Arial";
//     ctx.fillText("Semester", canvas.width - 80, canvas.height - 10);
//     ctx.fillText("SGPA", 10, 40);

//     // SGPA Data Points
//     const sgpaData = [8.20, 9.38, 9.10, 8.96, 9.43];

//     const dataPoints = sgpaData.map((sgpa, index) => ({
//         x: padding + index * xStep + xStep / 2,
//         y: canvas.height - 50 - ((sgpa - 7) * ((canvas.height - 100) / 3)),
//         label: sgpa.toFixed(2)
//     }));

//     // Draw Line Graph
//     ctx.beginPath();
//     ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
//     dataPoints.forEach(point => ctx.lineTo(point.x, point.y));
//     ctx.strokeStyle = "blue";
//     ctx.lineWidth = 3;
//     ctx.stroke();

//     // Draw Data Points (Circles) & Labels
//     ctx.fillStyle = "red";
//     ctx.font = "14px Arial";
//     ctx.textAlign = "center";

//     dataPoints.forEach(point => {
//         ctx.beginPath();
//         ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.fillText(point.label, point.x, point.y - 10);
//     });
// }

// // Resize Canvas on Window Load & Resize
// window.addEventListener("resize", resizeCanvas);
// resizeCanvas();

const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");

// Function to Set Canvas Size Responsively
function resizeCanvas() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 600) {
        // For Laptops (Fixed size)
        canvas.width = 600;
        canvas.height = 400;
    } else {
        // For Mobile Devices (Responsive)
        canvas.width = screenWidth - 30; // 20px margin for safety
        canvas.height = 300; // Adjusted height for small screens
    }
    drawGraph();
}

// Function to Draw the Graph
function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Define Padding and Dynamic Scaling
    const padding = 50;
    const graphWidth = canvas.width - 2 * padding;
    const xStep = graphWidth / 5; // 5 semesters

    // Draw X and Y Axis
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - 50);
    ctx.lineTo(canvas.width - padding, canvas.height - 50); // X-axis
    ctx.moveTo(padding, 50);
    ctx.lineTo(padding, canvas.height - 50); // Y-axis
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Grid Lines & Axis Labels
    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 1;
    ctx.font = "14px Arial";
    ctx.fillStyle = "black";

    // X-axis: Semester from 1 to 5
    for (let i = 0, sem = 1; i < 5; i++, sem++) {
        let x = padding + i * xStep + xStep / 2;
        ctx.beginPath();
        ctx.moveTo(x, 50);
        ctx.lineTo(x, canvas.height - 50);
        ctx.stroke();
        ctx.fillText(`Sem ${sem}`, x - 15, canvas.height - 30);
    }

    // Y-axis: SGPA from 7 to 10
    for (let i = canvas.height - 50, sgpa = 7; i >= 50; i -= (canvas.height - 100) / 3, sgpa++) {
        ctx.beginPath();
        ctx.moveTo(padding, i);
        ctx.lineTo(canvas.width - padding, i);
        ctx.stroke();
        ctx.fillText(sgpa.toFixed(1), 20, i + 5);
    }

    // Axis Labels
    ctx.font = "16px Arial";
    ctx.fillText("Semester", canvas.width - 80, canvas.height - 10);
    ctx.fillText("SGPA", 10, 40);

    // SGPA Data Points
    const sgpaData = [8.20, 9.38, 9.10, 8.96, 9.43];

    const dataPoints = sgpaData.map((sgpa, index) => ({
        x: padding + index * xStep + xStep / 2,
        y: canvas.height - 50 - ((sgpa - 7) * ((canvas.height - 100) / 3)),
        label: sgpa.toFixed(2)
    }));

    // Draw Line Graph
    ctx.beginPath();
    ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
    dataPoints.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw Data Points (Circles) & Labels
    ctx.fillStyle = "red";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";

    dataPoints.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText(point.label, point.x, point.y - 10);
    });
}

// Debounce Function to Prevent Frequent Resizing Issues
let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        resizeCanvas();
    }, 200); // 200ms delay to avoid rapid redraws
});

// Initial Call
resizeCanvas();
