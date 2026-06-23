/* ===========================================
   CHART.JS DEFAULT SETTINGS
=========================================== */

Chart.defaults.color = "#ffffff";
Chart.defaults.font.family = "Segoe UI";

/* ===========================================
   1. SESSIONS VS USERS
=========================================== */

const sessionsUsersChart = new Chart(

    document.getElementById("sessionsUsersChart"),

    {

        type: "line",

        data: {

            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ],

            datasets: [

                {

                    label: "Sessions",

                    data: [
                        12500,
                        13800,
                        15400,
                        14900,
                        17200,
                        18800,
                        19900,
                        19100,
                        20500,
                        21600,
                        22200,
                        24800
                    ],

                    borderColor: "#a855f7",

                    backgroundColor: "rgba(168,85,247,0.25)",

                    fill: true,

                    tension: 0.4

                },

                {

                    label: "Users",

                    data: [
                        9200,
                        10100,
                        11000,
                        10600,
                        11900,
                        12600,
                        13200,
                        12800,
                        13700,
                        14100,
                        14600,
                        16100
                    ],

                    borderColor: "#22d3ee",

                    backgroundColor: "rgba(34,211,238,0.20)",

                    fill: true,

                    tension: 0.4

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    labels: {

                        color: "#ffffff"

                    }

                }

            }

        }

    }

);

/* ===========================================
   2. TRAFFIC SOURCE
=========================================== */

const trafficChart = new Chart(

    document.getElementById("trafficChart"),

    {

        type: "pie",

        data: {

            labels: [

                "Organic",

                "Direct",

                "Referral",

                "Social",

                "Email",

                "Paid"

            ],

            datasets: [

                {

                    data: [

                        45,

                        18,

                        13,

                        10,

                        9,

                        5

                    ],

                    backgroundColor: [

                        "#a855f7",

                        "#22d3ee",

                        "#8b5cf6",

                        "#10b981",

                        "#f59e0b",

                        "#fb7185"

                    ]

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    }

);

/* ===========================================
   3. DEVICE DISTRIBUTION
=========================================== */

const deviceChart = new Chart(

    document.getElementById("deviceChart"),

    {

        type: "doughnut",

        data: {

            labels: [

                "Desktop",

                "Mobile",

                "Tablet"

            ],

            datasets: [

                {

                    data: [

                        35,

                        55,

                        10

                    ],

                    backgroundColor: [

                        "#a855f7",

                        "#22d3ee",

                        "#10b981"

                    ]

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    }

);

/* ===========================================
   4. BOUNCE RATE
=========================================== */

const bounceRateChart = new Chart(

    document.getElementById("bounceRateChart"),

    {

        type: "bar",

        data: {

            labels: [

                "Organic",

                "Direct",

                "Referral",

                "Social",

                "Email"

            ],

            datasets: [

                {

                    label: "Bounce Rate %",

                    data: [

                        22,

                        35,

                        28,

                        40,

                        18

                    ],

                    backgroundColor: "#fb7185",

                    borderRadius: 8

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    }

);

/* ===========================================
   5. USERS BY CHANNEL
=========================================== */

const channelChart = new Chart(

    document.getElementById("channelChart"),

    {

        type: "bar",

        data: {

            labels: [

                "Organic",

                "Direct",

                "Referral",

                "Social",

                "Email"

            ],

            datasets: [

                {

                    label: "Users",

                    data: [

                        47000,

                        30000,

                        28000,

                        26000,

                        12000

                    ],

                    backgroundColor: "#22d3ee",

                    borderRadius: 8

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    display: false

                }

            },

            scales: {

                y: {

                    beginAtZero: true

                }

            }

        }

    }

);

/* ===========================================
   CONSOLE MESSAGE
=========================================== */

console.log("Website Traffic Analysis Dashboard Loaded Successfully");
