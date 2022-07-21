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
      borderColor: 'red',
      backgroundColor: 'hsl(125%, 100%, 50%, 0.5)',
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