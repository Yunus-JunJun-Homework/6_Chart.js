"use strict";

import users from "./user_rating.js";
console.log(users)

const data = {
  labels: users.map(item => {
    const getFullName = () => {
      return `${item.firstName} ${item.lastName}`
    }
    return getFullName();
  }),
  datasets: [
    {
      label: 'Successful indicators',
      data: users.map(user => user.rating),
      borderColor: 'green',
      backgroundColor: 'hsl(0%, 50%, 50%, 0.5)',
      borderWidth: 2,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
    {
      label: 'Current rating',
      data: users.map(user => user.rating),
      borderColor: 'blue',
      backgroundColor: 'hsl(250, 100%, 50%, 0.5)',
      borderWidth: 2,
      borderRadius: 5,
      borderSkipped: false,
    }
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'JS random user rating'
      }
    }
  },
};

const myChart = new Chart(document.getElementById('myChart'), config);