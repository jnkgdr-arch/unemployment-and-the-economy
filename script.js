const colors = {
  blue: '#62a8ff',
  cyan: '#48d5d1',
  yellow: '#ffd166',
  orange: '#ff9f5a',
  red: '#ff6b6b',
  green: '#7bd88f',
  purple: '#b692ff',
  muted: '#aab8cf',
  grid: 'rgba(255, 255, 255, 0.09)',
  text: '#f6f8fb',
};

Chart.defaults.color = colors.muted;
Chart.defaults.borderColor = colors.grid;
Chart.defaults.font.family = 'Inter, ui-sans-serif, system-ui, sans-serif';
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(8, 17, 31, 0.94)';
Chart.defaults.plugins.tooltip.borderColor = 'rgba(255, 255, 255, 0.16)';
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.padding = 12;

const years = [
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021, 2022, 2023,
];

const groupData = {
  men: [3.3, 4.2, 5.3, 5.6, 5.0, 4.4, 4.0, 4.1, 5.4, 9.6, 9.8, 8.7, 7.5, 7.0, 5.7, 4.9, 4.5, 4.0, 3.6, 3.4, 7.4, 5.2, 3.4, 3.5],
  women: [3.6, 4.1, 5.1, 5.1, 4.9, 4.6, 4.1, 4.0, 4.9, 7.5, 8.0, 7.9, 7.3, 6.5, 5.6, 4.8, 4.4, 4.0, 3.5, 3.3, 8.0, 5.0, 3.3, 3.2],
  teens: [13.1, 14.7, 16.5, 17.5, 17.0, 16.6, 15.4, 15.7, 18.7, 24.3, 25.9, 24.4, 24.0, 22.9, 19.6, 16.9, 15.7, 14.0, 12.9, 12.7, 17.9, 11.7, 10.8, 11.2],
};

const educationData = {
  noDiploma: [6.3, 7.2, 8.4, 8.8, 8.5, 7.6, 6.8, 7.1, 9.0, 14.6, 14.9, 14.1, 12.4, 11.0, 9.0, 8.0, 7.4, 6.5, 5.6, 5.4, 11.7, 8.3, 5.5, 5.6],
  highSchool: [3.4, 4.2, 5.3, 5.5, 5.0, 4.7, 4.3, 4.4, 5.7, 9.7, 10.3, 9.4, 8.3, 7.5, 6.0, 5.4, 5.2, 4.6, 4.1, 3.7, 9.0, 6.2, 4.0, 3.9],
  someCollege: [2.7, 3.3, 4.5, 4.8, 4.2, 3.9, 3.6, 3.6, 4.6, 8.0, 8.4, 8.0, 7.1, 6.4, 5.4, 4.5, 4.1, 3.8, 3.3, 3.0, 7.8, 5.1, 3.1, 3.0],
  bachelors: [1.7, 2.3, 2.9, 3.1, 2.7, 2.3, 2.0, 2.0, 2.6, 4.6, 4.7, 4.3, 4.0, 3.7, 3.2, 2.6, 2.5, 2.3, 2.1, 2.1, 4.8, 3.1, 2.0, 2.1],
};

const durationData = {
  short: [2558, 2853, 2893, 2785, 2696, 2667, 2614, 2542, 2932, 3165, 2771, 2677, 2644, 2584, 2471, 2399, 2362, 2270, 2170, 2086, 3708, 2140, 2216, 2112],
  mid: [1815, 2196, 2580, 2612, 2382, 2304, 2121, 2232, 2804, 3828, 3267, 2993, 2866, 2759, 2432, 2302, 2226, 2008, 1876, 1789, 4728, 1981, 1711, 1866],
  longish: [669, 951, 1369, 1442, 1293, 1130, 1031, 1061, 1427, 2775, 2371, 2061, 1859, 1807, 1497, 1267, 1158, 1017, 917, 860, 2516, 1164, 756, 925],
  long: [649, 801, 1535, 1936, 1779, 1490, 1235, 1243, 1761, 4496, 6415, 6016, 5136, 4310, 3218, 2328, 2005, 1687, 1350, 1266, 1995, 3337, 1314, 1177],
};

function lineDataset(label, data, color, extra = {}) {
  return {
    label,
    data,
    borderColor: color,
    backgroundColor: color,
    borderWidth: 3,
    pointRadius: 2,
    pointHoverRadius: 5,
    tension: 0.28,
    ...extra,
  };
}

function makeLineChart(id, datasets, yTitle, stacked = false) {
  return new Chart(document.getElementById(id), {
    type: 'line',
    data: { labels: years, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { position: 'bottom' },
      },
      scales: {
        x: { grid: { display: false }, ticks: { maxRotation: 0, autoSkipPadding: 18 } },
        y: {
          beginAtZero: true,
          stacked,
          title: { display: true, text: yTitle },
          ticks: { callback: (value) => stacked ? value.toLocaleString() : `${value}%` },
        },
      },
    },
  });
}

new Chart(document.getElementById('febSnapshotChart'), {
  type: 'bar',
  data: {
    labels: ['Overall', 'White', 'Black', 'Hispanic', 'Adult women', 'Teenagers'],
    datasets: [{
      label: 'Unemployment rate',
      data: [4.1, 3.8, 6.0, 5.2, 3.8, 12.9],
      backgroundColor: [colors.blue, colors.cyan, colors.orange, colors.yellow, colors.green, colors.red],
      borderRadius: 12,
      borderSkipped: false,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, title: { display: true, text: 'Percent unemployed' }, ticks: { callback: (value) => `${value}%` } },
    },
  },
});

makeLineChart('groupTrendChart', [
  lineDataset('Men 20 years and over', groupData.men, colors.blue),
  lineDataset('Women 20 years and over', groupData.women, colors.cyan),
  lineDataset('Both sexes 16–19', groupData.teens, colors.red),
], 'Unemployment rate');

makeLineChart('educationChart', [
  lineDataset('Less than high school diploma', educationData.noDiploma, colors.red),
  lineDataset('High school graduates, no college', educationData.highSchool, colors.orange),
  lineDataset('Some college or associate degree', educationData.someCollege, colors.yellow),
  lineDataset('Bachelor’s degree and higher', educationData.bachelors, colors.cyan),
], 'Unemployment rate');

makeLineChart('durationChart', [
  lineDataset('Less than 5 weeks', durationData.short, colors.cyan, { fill: true, backgroundColor: 'rgba(72, 213, 209, 0.12)' }),
  lineDataset('5–14 weeks', durationData.mid, colors.blue, { fill: true, backgroundColor: 'rgba(98, 168, 255, 0.12)' }),
  lineDataset('15–26 weeks', durationData.longish, colors.yellow, { fill: true, backgroundColor: 'rgba(255, 209, 102, 0.12)' }),
  lineDataset('27 weeks and over', durationData.long, colors.red, { fill: true, backgroundColor: 'rgba(255, 107, 107, 0.14)' }),
], 'Thousands of workers');

new Chart(document.getElementById('monthlyInflationChart'), {
  type: 'doughnut',
  data: {
    labels: ['January 2025', 'February 2025'],
    datasets: [{
      label: 'Monthly CPI-U change',
      data: [0.5, 0.2],
      backgroundColor: [colors.orange, colors.cyan],
      borderColor: '#14243d',
      borderWidth: 4,
      hoverOffset: 8,
    }],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { callbacks: { label: (ctx) => `${ctx.label}: +${ctx.raw}%` } },
    },
  },
});

new Chart(document.getElementById('categoryInflationChart'), {
  type: 'bar',
  data: {
    labels: ['Motor vehicle insurance', 'Meats, poultry, fish & eggs', 'Cereals & bakery products', 'Other food at home', 'Energy commodities', 'Fuel oil'],
    datasets: [{
      label: '12-month price change',
      data: [11.1, 7.7, 0.3, 0.1, -3.2, -5.1],
      backgroundColor: (ctx) => ctx.raw >= 0 ? colors.orange : colors.cyan,
      borderRadius: 10,
      borderSkipped: false,
    }],
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { title: { display: true, text: 'Percent change' }, ticks: { callback: (value) => `${value}%` } },
      y: { grid: { display: false } },
    },
  },
});
