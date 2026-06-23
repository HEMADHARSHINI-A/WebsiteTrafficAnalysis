Chart.defaults.color = "#ffffff";
Chart.defaults.font.family = "Segoe UI";

/* ===================== */
/* 1. Sessions vs Users */
/* ===================== */
new Chart(document.getElementById("sessionsUsersChart"), {
    type: "line",
    data: {
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],

        datasets: [
            {
                label: "Sessions",

                // ⭐ CHANGE SESSIONS HERE
                data: [12500,13800,15400,14900,17200,18800,19900,19100,20500,21600,22200,24800],

                borderColor: "#a855f7",
                backgroundColor: "rgba(168,85,247,0.2)",
                fill: true,
                tension: 0.4
            },

            {
                label: "Users",

                // ⭐ CHANGE USERS HERE
                data: [9200,10100,11000,10600,11900,12600,13200,12800,13700,14100,14600,16100],

                borderColor: "#22d3ee",
                backgroundColor: "rgba(34,211,238,0.2)",
                fill: true,
                tension: 0.4
            }
        ]
    }
});


/* ===================== */
/* 2. Traffic Source */
/* ===================== */
new Chart(document.getElementById("trafficChart"), {
    type: "pie",
    data: {
        labels: ["Organic","Direct","Referral","Social","Email","Paid"],

        datasets: [{
            data: [45,18,13,10,9,5], // ⭐ CHANGE HERE

            backgroundColor: [
                "#a855f7",
                "#22d3ee",
                "#8b5cf6",
                "#10b981",
                "#f59e0b",
                "#fb7185"
            ]
        }]
    }
});


/* ===================== */
/* 3. Device Usage */
/* ===================== */
new Chart(document.getElementById("deviceChart"), {
    type: "doughnut",
    data: {
        labels: ["Desktop","Mobile","Tablet"],

        datasets: [{
            data: [35,55,10], // ⭐ CHANGE HERE

            backgroundColor: ["#a855f7","#22d3ee","#10b981"]
        }]
    }
});


/* ===================== */
/* 4. Bounce Rate */
/* ===================== */
new Chart(document.getElementById("bounceRateChart"), {
    type: "bar",
    data: {
        labels: ["Organic","Direct","Referral","Social","Email"],

        datasets: [{
            label: "Bounce Rate %",

            data: [22,35,28,40,18], // ⭐ CHANGE HERE

            backgroundColor: "#fb7185"
        }]
    }
});


/* ===================== */
/* 5. Channel Users */
/* ===================== */
new Chart(document.getElementById("channelChart"), {
    type: "bar",
    data: {
        labels: ["Organic","Direct","Referral","Social","Email"],

        datasets: [{
            label: "Users",

            data: [47000,30000,28000,26000,12000], // ⭐ CHANGE HERE

            backgroundColor: "#22d3ee"
        }]
    }
});S
