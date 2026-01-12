import React, { useEffect, useRef } from 'react';

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w: number, h: number;
    let cols: number, rows: number;
    const size = 40; // Size of grid cells
    const pixels: { x: number; y: number; age: number; life: number; color: string }[] = [];

    const colors = [
      'rgba(59, 130, 246, 0.15)', // Blue
      'rgba(6, 182, 212, 0.15)', // Cyan
      'rgba(147, 51, 234, 0.15)', // Purple
    ];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.ceil(w / size);
      rows = Math.ceil(h / size);
    };

    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      ctx.beginPath();

      for (let i = 0; i <= cols; i++) {
        ctx.moveTo(i * size, 0);
        ctx.lineTo(i * size, h);
      }

      for (let i = 0; i <= rows; i++) {
        ctx.moveTo(0, i * size);
        ctx.lineTo(w, i * size);
      }

      ctx.stroke();
    };

    const updatePixels = () => {
      // Add new pixel occasionally
      if (Math.random() < 0.15) {
        pixels.push({
          x: Math.floor(Math.random() * cols),
          y: Math.floor(Math.random() * rows),
          age: 0,
          life: Math.random() * 50 + 50,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      // Update and draw pixels
      for (let i = pixels.length - 1; i >= 0; i--) {
        const p = pixels[i];
        p.age++;

        if (p.age >= p.life) {
          pixels.splice(i, 1);
          continue;
        }

        // Fade in and out
        const opacity = p.age < p.life / 2
          ? p.age / (p.life / 2)
          : 1 - (p.age - p.life / 2) / (p.life / 2);

        ctx.fillStyle = p.color.replace('0.15)', `${0.15 * opacity})`);
        ctx.fillRect(p.x * size, p.y * size, size, size);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      drawGrid();
      updatePixels();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
      {/* Ambient Gradient Overlay to soften the look */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-[#0a0f1c]/50" />
    </div>
  );
};

export default BackgroundAnimation;