// WAIT UNTIL PAGE LOADS
window.onload = function () {

    const ctx = document.getElementById('trafficChart');

    if (!ctx) {
        console.log("Chart canvas not found!");
        return;
    }

    new Chart(ctx, {
        type: 'line', // bar / line / pie

        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

            datasets: [{
                label: 'Website Visitors',
                data: [120, 190, 300, 250, 220, 400, 350],

                borderColor: '#8e44ad',
                backgroundColor: 'rgba(142, 68, 173, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            plugins: {
                legend: {
                    labels: {
                        color: 'white'
                    }
                }
            },

            scales: {
                x: {
                    ticks: { color: 'white' }
                },
                y: {
                    ticks: { color: 'white' }
                }
            }
        }
    });
};
