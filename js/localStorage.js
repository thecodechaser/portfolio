 const name1 = document.querySelector('#name');
 const email1 = document.querySelector('#email');
const message1 = document.querySelector('#msg');

populateStorage();
 
const storeValues = (name1, email1, message1) => {
  const dataObject = JSON.stringify({ name1, email1, message1 });
  localStorage.setItem('dataObject', dataObject);
};

function populateStorage() {
  const formValues = JSON.parse(localStorage.getItem('dataObject'));
  if (formValues) {
    name1.value = formValues.name1;
    email1.value = formValues.email1;
    message1.value = formValues.message1;
  }
}


 

 
