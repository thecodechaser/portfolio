 const name1 = document.querySelector('#name');
 const email1 = document.querySelector('#email');
const message1 = document.querySelector('#msg');

 const storeValues = (name1, email1, message1) => {
  const dataObject = JSON.stringify({ name1, email1, message1 });
  localStorage.setItem('dataObject', dataObject);
};

 

 
