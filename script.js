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
  2020, 2021, 2022, 2023, '2024 YTD',
];

const civilianUnemploymentData = [
  { label: 2000, men: 3.3, women: 3.6, teens: 13.1 },
  { label: 2001, men: 4.2, women: 4.1, teens: 14.7 },
  { label: 2002, men: 5.3, women: 5.1, teens: 16.5 },
  { label: 2003, men: 5.6, women: 5.1, teens: 17.5 },
  { label: 2004, men: 5.0, women: 4.9, teens: 17.0 },
  { label: 2005, men: 4.4, women: 4.6, teens: 16.6 },
  { label: 2006, men: 4.0, women: 4.1, teens: 15.4 },
  { label: 2007, men: 4.1, women: 4.0, teens: 15.7 },
  { label: 2008, men: 5.4, women: 4.9, teens: 18.7 },
  { label: 2009, men: 9.6, women: 7.5, teens: 24.3 },
  { label: 2010, men: 9.8, women: 8.0, teens: 25.9 },
  { label: 2011, men: 8.7, women: 7.9, teens: 24.4 },
  { label: 2012, men: 7.5, women: 7.3, teens: 24.0 },
  { label: 2013, men: 7.0, women: 6.5, teens: 22.9 },
  { label: 2014, men: 5.7, women: 5.6, teens: 19.6 },
  { label: 2015, men: 4.9, women: 4.8, teens: 16.9 },
  { label: 2016, men: 4.5, women: 4.4, teens: 15.7 },
  { label: 2017, men: 4.0, women: 4.0, teens: 14.0 },
  { label: 2018, men: 3.6, women: 3.5, teens: 12.9 },
  { label: 2019, men: 3.4, women: 3.3, teens: 12.7 },
  { label: 2020, men: 7.4, women: 8.0, teens: 17.9 },
  { label: 2021, men: 5.2, women: 5.0, teens: 11.7 },
  { label: 2022, men: 3.4, women: 3.3, teens: 10.8 },
  { label: 2023, men: 3.5, women: 3.2, teens: 11.2 },
  { label: '2023 Jan.', men: 3.2, women: 3.1, teens: 10.5 },
  { label: 'Feb.', men: 3.3, women: 3.3, teens: 11.1 },
  { label: 'Mar.', men: 3.4, women: 3.2, teens: 9.9 },
  { label: 'Apr.', men: 3.3, women: 3.1, teens: 9.3 },
  { label: 'May.', men: 3.5, women: 3.3, teens: 10.3 },
  { label: 'Jun.', men: 3.4, women: 3.1, teens: 11.2 },
  { label: 'Jul.', men: 3.4, women: 3.1, teens: 11.3 },
  { label: 'Aug.', men: 3.7, women: 3.2, teens: 12.3 },
  { label: 'Sep.', men: 3.8, women: 3.1, teens: 11.8 },
  { label: 'Oct.', men: 3.7, women: 3.2, teens: 13.1 },
  { label: 'Nov.', men: 3.7, women: 3.1, teens: 11.4 },
  { label: 'Dec.', men: 3.5, women: 3.3, teens: 11.9 },
  { label: '2024 Jan.', men: 3.6, women: 3.2, teens: 10.6 },
  { label: 'Feb.', men: 3.5, women: 3.5, teens: 12.5 },
  { label: 'Mar.', men: 3.3, women: 3.6, teens: 12.6 },
  { label: 'Apr.', men: 3.6, women: 3.5, teens: 11.7 },
  { label: 'May.', men: 3.8, women: 3.4, teens: 12.3 },
  { label: 'Jun.', men: 3.8, women: 3.7, teens: 12.1 },
  { label: 'Jul.', men: 4.0, women: 3.8, teens: 12.4 },
  { label: 'Aug.', men: 4.0, women: 3.7, teens: 14.1 },
  { label: 'Sep.', men: 3.7, women: 3.6, teens: 14.3 },
  { label: 'Oct.', men: 3.9, women: 3.6, teens: 13.8 },
  { label: 'Nov.', men: 3.9, women: 3.9, teens: 13.2 },
];

const groupLabels = civilianUnemploymentData.map(({ label }) => label);
const groupData = {
  men: civilianUnemploymentData.map(({ men }) => men),
  women: civilianUnemploymentData.map(({ women }) => women),
  teens: civilianUnemploymentData.map(({ teens }) => teens),
};

const groupMonthly2024Data = {
  labels: civilianUnemploymentData.slice(-11).map(({ label }) => label),
  men: civilianUnemploymentData.slice(-11).map(({ men }) => men),
  women: civilianUnemploymentData.slice(-11).map(({ women }) => women),
  teens: civilianUnemploymentData.slice(-11).map(({ teens }) => teens),
};

const months2024 = groupMonthly2024Data.labels.map((label) => label.replace('2024 ', ''));

const educationalAttainmentData = [
  { label: 2000, noDiploma: 6.3, highSchool: 3.4, someCollege: 2.7, bachelors: 1.7 },
  { label: 2001, noDiploma: 7.2, highSchool: 4.2, someCollege: 3.3, bachelors: 2.3 },
  { label: 2002, noDiploma: 8.4, highSchool: 5.3, someCollege: 4.5, bachelors: 2.9 },
  { label: 2003, noDiploma: 8.8, highSchool: 5.5, someCollege: 4.8, bachelors: 3.1 },
  { label: 2004, noDiploma: 8.5, highSchool: 5.0, someCollege: 4.2, bachelors: 2.7 },
  { label: 2005, noDiploma: 7.6, highSchool: 4.7, someCollege: 3.9, bachelors: 2.3 },
  { label: 2006, noDiploma: 6.8, highSchool: 4.3, someCollege: 3.6, bachelors: 2.0 },
  { label: 2007, noDiploma: 7.1, highSchool: 4.4, someCollege: 3.6, bachelors: 2.0 },
  { label: 2008, noDiploma: 9.0, highSchool: 5.7, someCollege: 4.6, bachelors: 2.6 },
  { label: 2009, noDiploma: 14.6, highSchool: 9.7, someCollege: 8.0, bachelors: 4.6 },
  { label: 2010, noDiploma: 14.9, highSchool: 10.3, someCollege: 8.4, bachelors: 4.7 },
  { label: 2011, noDiploma: 14.1, highSchool: 9.4, someCollege: 8.0, bachelors: 4.3 },
  { label: 2012, noDiploma: 12.4, highSchool: 8.3, someCollege: 7.1, bachelors: 4.0 },
  { label: 2013, noDiploma: 11.0, highSchool: 7.5, someCollege: 6.4, bachelors: 3.7 },
  { label: 2014, noDiploma: 9.0, highSchool: 6.0, someCollege: 5.4, bachelors: 3.2 },
  { label: 2015, noDiploma: 8.0, highSchool: 5.4, someCollege: 4.5, bachelors: 2.6 },
  { label: 2016, noDiploma: 7.4, highSchool: 5.2, someCollege: 4.1, bachelors: 2.5 },
  { label: 2017, noDiploma: 6.5, highSchool: 4.6, someCollege: 3.8, bachelors: 2.3 },
  { label: 2018, noDiploma: 5.6, highSchool: 4.1, someCollege: 3.3, bachelors: 2.1 },
  { label: 2019, noDiploma: 5.4, highSchool: 3.7, someCollege: 3.0, bachelors: 2.1 },
  { label: 2020, noDiploma: 11.7, highSchool: 9.0, someCollege: 7.8, bachelors: 4.8 },
  { label: 2021, noDiploma: 8.3, highSchool: 6.2, someCollege: 5.1, bachelors: 3.1 },
  { label: 2022, noDiploma: 5.5, highSchool: 4.0, someCollege: 3.1, bachelors: 2.0 },
  { label: 2023, noDiploma: 5.6, highSchool: 3.9, someCollege: 3.0, bachelors: 2.1 },
  { label: '2023 Jan.', noDiploma: 4.5, highSchool: 3.8, someCollege: 2.9, bachelors: 2.0 },
  { label: 'Feb.', noDiploma: 5.8, highSchool: 3.6, someCollege: 3.3, bachelors: 2.1 },
  { label: 'Mar.', noDiploma: 4.8, highSchool: 4.0, someCollege: 3.0, bachelors: 2.0 },
  { label: 'Apr.', noDiploma: 5.4, highSchool: 3.9, someCollege: 2.9, bachelors: 1.9 },
  { label: 'May.', noDiploma: 5.7, highSchool: 3.9, someCollege: 3.2, bachelors: 2.0 },
  { label: 'Jun.', noDiploma: 6.0, highSchool: 3.9, someCollege: 3.0, bachelors: 2.0 },
  { label: 'Jul.', noDiploma: 5.3, highSchool: 3.3, someCollege: 3.1, bachelors: 2.0 },
  { label: 'Aug.', noDiploma: 5.4, highSchool: 3.9, someCollege: 3.1, bachelors: 2.2 },
  { label: 'Sep.', noDiploma: 5.5, highSchool: 4.1, someCollege: 3.0, bachelors: 2.2 },
  { label: 'Oct.', noDiploma: 5.8, highSchool: 4.0, someCollege: 3.1, bachelors: 2.1 },
  { label: 'Nov.', noDiploma: 6.3, highSchool: 4.1, someCollege: 2.8, bachelors: 2.1 },
  { label: 'Dec.', noDiploma: 6.0, highSchool: 4.2, someCollege: 3.1, bachelors: 2.1 },
  { label: '2024 Jan.', noDiploma: 6.0, highSchool: 4.3, someCollege: 3.3, bachelors: 2.1 },
  { label: 'Feb.', noDiploma: 6.1, highSchool: 4.2, someCollege: 3.1, bachelors: 2.2 },
  { label: 'Mar.', noDiploma: 4.9, highSchool: 4.1, someCollege: 3.4, bachelors: 2.1 },
  { label: 'Apr.', noDiploma: 6.0, highSchool: 4.0, someCollege: 3.3, bachelors: 2.2 },
  { label: 'May.', noDiploma: 5.9, highSchool: 4.3, someCollege: 3.1, bachelors: 2.1 },
  { label: 'Jun.', noDiploma: 5.9, highSchool: 4.2, someCollege: 3.4, bachelors: 2.4 },
  { label: 'Jul.', noDiploma: 6.7, highSchool: 4.6, someCollege: 3.5, bachelors: 2.3 },
  { label: 'Aug.', noDiploma: 7.1, highSchool: 4.0, someCollege: 3.4, bachelors: 2.5 },
  { label: 'Sep.', noDiploma: 6.8, highSchool: 4.0, someCollege: 3.4, bachelors: 2.3 },
  { label: 'Oct.', noDiploma: 6.6, highSchool: 4.0, someCollege: 3.4, bachelors: 2.5 },
  { label: 'Nov.', noDiploma: 6.0, highSchool: 4.6, someCollege: 3.6, bachelors: null },
];

const educationLabels = educationalAttainmentData.map(({ label }) => label);
const educationData = {
  noDiploma: educationalAttainmentData.map(({ noDiploma }) => noDiploma),
  highSchool: educationalAttainmentData.map(({ highSchool }) => highSchool),
  someCollege: educationalAttainmentData.map(({ someCollege }) => someCollege),
  bachelors: educationalAttainmentData.map(({ bachelors }) => bachelors),
};

const durationEmploymentData = [
  { label: 2000, short: 2558, mid: 1815, longish: 669, long: 649 },
  { label: 2001, short: 2853, mid: 2196, longish: 951, long: 801 },
  { label: 2002, short: 2893, mid: 2580, longish: 1369, long: 1535 },
  { label: 2003, short: 2785, mid: 2612, longish: 1442, long: 1936 },
  { label: 2004, short: 2696, mid: 2382, longish: 1293, long: 1779 },
  { label: 2005, short: 2667, mid: 2304, longish: 1130, long: 1490 },
  { label: 2006, short: 2614, mid: 2121, longish: 1031, long: 1235 },
  { label: 2007, short: 2542, mid: 2232, longish: 1061, long: 1243 },
  { label: 2008, short: 2932, mid: 2804, longish: 1427, long: 1761 },
  { label: 2009, short: 3165, mid: 3828, longish: 2775, long: 4496 },
  { label: 2010, short: 2771, mid: 3267, longish: 2371, long: 6415 },
  { label: 2011, short: 2677, mid: 2993, longish: 2061, long: 6016 },
  { label: 2012, short: 2644, mid: 2866, longish: 1859, long: 5136 },
  { label: 2013, short: 2584, mid: 2759, longish: 1807, long: 4310 },
  { label: 2014, short: 2471, mid: 2432, longish: 1497, long: 3218 },
  { label: 2015, short: 2399, mid: 2302, longish: 1267, long: 2328 },
  { label: 2016, short: 2362, mid: 2226, longish: 1158, long: 2005 },
  { label: 2018, short: 2170, mid: 1876, longish: 917, long: 1350 },
  { label: 2019, short: 2086, mid: 1789, longish: 860, long: 1266 },
  { label: 2020, short: 3708, mid: 4728, longish: 2516, long: 1995 },
  { label: 2021, short: 2140, mid: 1981, longish: 1164, long: 3337 },
  { label: 2022, short: 2216, mid: 1711, longish: 756, long: 1314 },
  { label: 2023, short: 2112, mid: 1866, longish: 925, long: 1177 },
  { label: '2023 Jan.', short: 1942, mid: 1795, longish: 929, long: 1073 },
  { label: 'Feb.', short: 2294, mid: 1838, longish: 812, long: 1051 },
  { label: 'Mar.', short: 2279, mid: 1765, longish: 797, long: 1050 },
  { label: 'Apr.', short: 1867, mid: 1920, longish: 748, long: 1089 },
  { label: 'May.', short: 2080, mid: 1863, longish: 911, long: 1132 },
  { label: 'Jun.', short: 2065, mid: 1850, longish: 905, long: 1117 },
  { label: 'Jul.', short: 2007, mid: 1741, longish: 956, long: 1205 },
  { label: 'Aug.', short: 2224, mid: 1913, longish: 970, long: 1326 },
  { label: 'Sept.', short: 2053, mid: 2043, longish: 985, long: 1303 },
  { label: 'Oct.', short: 2269, mid: 1836, longish: 1079, long: 1291 },
  { label: 'Nov.', short: 2069, mid: 2060, longish: 931, long: 1220 },
  { label: 'Dec.', short: 2191, mid: 1791, longish: 1104, long: 1245 },
  { label: '2024 Jan.', short: 2140, mid: 1848, longish: 867, long: 1277 },
  { label: 'Feb.', short: 2326, mid: 1933, longish: 974, long: 1203 },
  { label: 'Mar.', short: 2189, mid: 1979, longish: 982, long: 1246 },
  { label: 'Apr.', short: 2262, mid: 1987, longish: 869, long: 1250 },
  { label: 'May.', short: 2309, mid: 1918, longish: 955, long: 1350 },
  { label: 'Jun.', short: 2128, mid: 2102, longish: 1087, long: 1516 },
  { label: 'Jul.', short: 2351, mid: 2141, longish: 1087, long: 1535 },
  { label: 'Aug.', short: 2468, mid: 2019, longish: 1167, long: 1533 },
  { label: 'Sept.', short: 2146, mid: 1982, longish: 1119, long: 1630 },
  { label: 'Oct.', short: 2112, mid: 2080, longish: 1234, long: 1608 },
  { label: 'Nov.', short: 2209, mid: 2067, longish: 1232, long: 1661 },
];

const durationLabels = durationEmploymentData.map(({ label }) => label);
const durationData = {
  short: durationEmploymentData.map(({ short }) => short),
  mid: durationEmploymentData.map(({ mid }) => mid),
  longish: durationEmploymentData.map(({ longish }) => longish),
  long: durationEmploymentData.map(({ long }) => long),
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

function makeLineChart(id, datasets, yTitle, stacked = false, labels = years, tickSuffix = '%') {
  return new Chart(document.getElementById(id), {
    type: 'line',
    data: { labels, datasets },
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
          ticks: { callback: (value) => stacked || !tickSuffix ? value.toLocaleString() : `${value}${tickSuffix}` },
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
], 'Unemployment rate', false, groupLabels);

makeLineChart('groupMonthly2024Chart', [
  lineDataset('Men 20 years and over', groupMonthly2024Data.men, colors.blue),
  lineDataset('Women 20 years and over', groupMonthly2024Data.women, colors.cyan),
  lineDataset('Both sexes 16–19', groupMonthly2024Data.teens, colors.red),
], 'Unemployment rate', false, months2024);

makeLineChart('educationChart', [
  lineDataset('Less than high school diploma', educationData.noDiploma, colors.red),
  lineDataset('High school graduates, no college', educationData.highSchool, colors.orange),
  lineDataset('Some college or associate degree', educationData.someCollege, colors.yellow),
  lineDataset('Bachelor’s degree and higher', educationData.bachelors, colors.cyan),
], 'Unemployment rate', false, educationLabels);

makeLineChart('durationChart', [
  lineDataset('Less than 5 weeks', durationData.short, colors.cyan, { fill: true, backgroundColor: 'rgba(72, 213, 209, 0.12)' }),
  lineDataset('5–14 weeks', durationData.mid, colors.blue, { fill: true, backgroundColor: 'rgba(98, 168, 255, 0.12)' }),
  lineDataset('15–16 weeks', durationData.longish, colors.yellow, { fill: true, backgroundColor: 'rgba(255, 209, 102, 0.12)' }),
  lineDataset('27 weeks and over', durationData.long, colors.red, { fill: true, backgroundColor: 'rgba(255, 107, 107, 0.14)' }),
], 'Thousands of workers', false, durationLabels, '');

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
