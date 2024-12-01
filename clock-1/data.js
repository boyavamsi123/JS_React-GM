const canvas = document.getElementById('clock');
const ctx = canvas.getContext('2d');
const radius = canvas.height / 2;
ctx.translate(radius,radius);
function drawClock() {
    ctx.clearRect(-radius, -radius, canvas.width, canvas.height); // Clear the canvas

    // Draw the clock face
    ctx.beginPath();
    ctx.arc(0, 0, radius - 10, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();

    // Draw clock ticks
    for (let i = 0; i < 12; i++) {
        ctx.save();
        ctx.rotate(i * Math.PI / 6);
        ctx.beginPath();
        ctx.moveTo(0, -radius + 20);
        ctx.lineTo(0, -radius + 40);
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
    }

    // Get the current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Draw the hour hand
    ctx.save();
    ctx.rotate((Math.PI / 6) * (hours % 12) + (Math.PI / 360) * minutes);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -radius + 50);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 6;
    ctx.stroke();
    ctx.restore();

    // Draw the minute hand
    ctx.save();
    ctx.rotate((Math.PI / 30) * minutes + (Math.PI / 1800) * seconds);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -radius + 30);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.restore();

    // Draw the second hand
    ctx.save();
    ctx.rotate((Math.PI / 30) * seconds);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -radius + 20);
    ctx.strokeStyle = '#f00';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
}

function updateClock() {
    drawClock();
    setTimeout(updateClock, 1000); // Update every second
}

updateClock(); // Start the clock