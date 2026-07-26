
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
        canvas.width = screenWidth - 30; // 20px margin
        canvas.height = 300;
    }
    drawGraph();
}

// Function to Draw the Graph
function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const padding = 50;
    const bottomPadding = 50;
    const topPadding = 50;
    const graphWidth = canvas.width - 2 * padding;
    const graphHeight = canvas.height - topPadding - bottomPadding;
    const xStep = graphWidth / 8; // 6 semesters

    // Draw X and Y Axis
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - bottomPadding);
    ctx.lineTo(canvas.width - padding, canvas.height - bottomPadding); // X-axis
    ctx.moveTo(padding, topPadding);
    ctx.lineTo(padding, canvas.height - bottomPadding); // Y-axis
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Grid Lines & Axis Labels
    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 1;
    ctx.font = "14px Arial";
    ctx.fillStyle = "black";

    // X-axis: Sem 1 to 6
    for (let i = 0; i < 8; i++) {
        const x = padding + i * xStep + xStep / 2;
        ctx.beginPath();
        ctx.moveTo(x, topPadding);
        ctx.lineTo(x, canvas.height - bottomPadding);
        ctx.stroke();
        ctx.fillText(`S${i + 1}`, x - 15, canvas.height - 25);
    }

    // Y-axis: SGPA from 7.0 to 10.0
    const yMin = 7.0;
    const yMax = 10.0;
    const ySteps = 3;
    for (let i = 0; i <= ySteps; i++) {
        const sgpa = yMin + i * (yMax - yMin) / ySteps;
        const y = canvas.height - bottomPadding - (i * graphHeight / ySteps);
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(canvas.width - padding, y);
        ctx.stroke();
        ctx.fillText(sgpa.toFixed(1), padding - 35, y + 5);
    }

    // Axis Labels
    ctx.font = "16px Arial";
    ctx.fillText("Semester", canvas.width - 100, canvas.height - 10);
    ctx.fillText("SGPA", 10, 40);

    // SGPA Data
    const sgpaData = [8.20, 9.38, 9.10, 8.96, 9.43, 9.21,9.31,10.00];

    const dataPoints = sgpaData.map((sgpa, index) => {
        const x = padding + index * xStep + xStep / 2;
        const y = canvas.height - bottomPadding - ((sgpa - yMin) / (yMax - yMin)) * graphHeight;
        return { x, y, label: sgpa.toFixed(2) };
    });

    // Draw Line Graph
    ctx.beginPath();
    ctx.moveTo(dataPoints[0].x, dataPoints[0].y);
    dataPoints.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 3;
    ctx.stroke();

    // Draw Data Points & Labels
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

// Debounce Resize
let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCanvas, 200);
});

// Initial Render
resizeCanvas();

