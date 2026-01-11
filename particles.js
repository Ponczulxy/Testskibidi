const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function initParticles() {
    if (!canvas) return;
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;
    particles = [];
    for(let i=0; i<180; i++) {
        particles.push({
            x: Math.random()*canvas.width, 
            y: Math.random()*canvas.height, 
            vx: (Math.random()-0.5)*0.6, 
            vy: (Math.random()-0.5)*0.6, 
            size: Math.random()*4
        });
    }
}

function draw() {
    ctx.clearRect(0,0,canvas.width, canvas.height); 
    ctx.fillStyle = 'rgba(0, 210, 255, 0.3)';
    particles.forEach(p => { 
        p.x+=p.vx; 
        p.y+=p.vy; 
        if(p.x<0||p.x>canvas.width)p.vx*=-1; 
        if(p.y<0||p.y>canvas.height)p.vy*=-1; 
        ctx.beginPath(); 
        ctx.arc(p.x,p.y,p.size,0,Math.PI*2); 
        ctx.fill(); 
    });
    requestAnimationFrame(draw);
}

window.onload = () => { initParticles(); draw(); };
window.onresize = initParticles;