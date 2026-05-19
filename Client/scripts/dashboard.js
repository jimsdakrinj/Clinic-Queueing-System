if (window.lucide) {
  lucide.createIcons();
}

const menuLinks = document.querySelectorAll(".MenuLink");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

const patientTrendData = {
  week: {
    caption: "This week",
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    values: [18, 24, 20, 29, 32, 16, 12],
  },
  month: {
    caption: "This month",
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    values: [92, 118, 104, 136],
  },
  year: {
    caption: "This year",
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
      "Dec",
    ],
    values: [320, 344, 390, 415, 438, 402, 451, 470, 428, 492, 510, 536],
  },
};

const trendChart = document.querySelector("#TrendChart");
const trendTotal = document.querySelector("#TrendTotal");
const trendCaption = document.querySelector("#TrendCaption");
const trendFilters = document.querySelectorAll(".TrendFilter");
const genderChart = document.querySelector("#GenderChart");
let patientTrendChart = null;
let patientGenderChart = null;

const chartBackgroundColors = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(255, 205, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(201, 203, 207, 0.2)",
];

const chartBorderColors = [
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(54, 162, 235)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)",
];

function repeatColors(colors, count) {
  return Array.from(
    { length: count },
    (_, index) => colors[index % colors.length],
  );
}

function renderPatientTrend(range) {
  if (!trendChart || !trendTotal || !trendCaption) return;

  const selectedTrend = patientTrendData[range] || patientTrendData.week;
  const totalValue = selectedTrend.values.reduce((sum, value) => sum + value, 0);

  trendTotal.textContent = totalValue.toLocaleString();
  trendCaption.textContent = selectedTrend.caption;

  if (!window.Chart) return;

  const data = {
    labels: selectedTrend.labels,
    datasets: [
      {
        label: "Patients",
        data: selectedTrend.values,
        backgroundColor: repeatColors(
          chartBackgroundColors,
          selectedTrend.values.length,
        ),
        borderColor: repeatColors(chartBorderColors, selectedTrend.values.length),
        borderWidth: 1,
      },
    ],
  };

  if (patientTrendChart) {
    patientTrendChart.data = data;
    patientTrendChart.update();
    return;
  }

  patientTrendChart = new Chart(trendChart, {
    type: "bar",
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function renderPatientGenderChart() {
  if (!genderChart || !window.Chart) return;

  const data = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Patients",
        data: [14, 10],
        backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
        hoverOffset: 4,
      },
    ],
  };

  patientGenderChart = new Chart(genderChart, {
    type: "pie",
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}

trendFilters.forEach((button) => {
  button.addEventListener("click", () => {
    trendFilters.forEach((filter) => filter.classList.remove("active"));
    button.classList.add("active");
    renderPatientTrend(button.dataset.range);
  });
});

renderPatientTrend("week");
renderPatientGenderChart();
