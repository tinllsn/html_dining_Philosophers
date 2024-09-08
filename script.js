document.addEventListener('DOMContentLoaded', () => {
    const numPhilosophers = 5;
    const philosophersContainer = document.getElementById('philosophers-container');
    const philosophers = [];
    const radius = 150; // Bán kính của vòng tròn

    // Tạo các nhà triết học và đũa
    for (let i = 0; i < numPhilosophers; i++) {
        const philosopher = document.createElement('div');
        philosopher.className = 'philosopher';
        philosopher.id = `philosopher-${i}`;
        philosopher.innerHTML = `
            <img src="./image.png" alt="Philosopher ${i + 1}">
            <br>Philosopher ${i + 1}
            <div class="status">Thinking...</div>
        `;
        philosophersContainer.appendChild(philosopher);
        philosophers.push(philosopher);
    }

    // Sắp xếp các nhà triết học thành hình tròn
    philosophers.forEach((philosopher, index) => {
        const angle = (2 * Math.PI / numPhilosophers) * index;
        const x = radius * Math.cos(angle) + radius;
        const y = radius * Math.sin(angle) + radius;
        philosopher.style.left = `${x}px`;
        philosopher.style.top = `${y}px`;
    });

    document.getElementById('start').addEventListener('click', () => {
        startSimulation();
    });
});

function startSimulation() {
    const philosophers = document.querySelectorAll('.philosopher');

    philosophers.forEach((philosopher, index) => {
        setTimeout(() => {
            philosopher.querySelector('.status').textContent = 'Thinking...';

            setTimeout(() => {
                philosopher.querySelector('.status').textContent = 'Hungry...';

                setTimeout(() => {
                    philosopher.querySelector('.status').textContent = 'Eating...';

                    setTimeout(() => {
                        philosopher.querySelector('.status').textContent = 'Thinking...';
                    }, 2000); // Thời gian ăn
                }, 2000); // Thời gian đói
            }, 2000); // Thời gian suy nghĩ
        }, index * 5000); // Thời gian bắt đầu
    });
}
