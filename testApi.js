const axios = require('axios');

// Register User
axios.post('http://localhost:5000/api/auth/signup', {
  username: 'testuser',
  password: 'password'
})
.then(response => {
  console.log('User Registered:', response.data);
})
.catch(error => {
  console.log('Error:', error.response.data);
});

// Login User
axios.post('http://localhost:5000/api/auth/login', {
  username: 'testuser',
  password: 'password'
})
.then(response => {
  const token = response.data.token;
  console.log('Login Success, JWT Token:', token);

  // Use Token to Create Product
  axios.post('http://localhost:5000/api/products', {
    name: 'Product 1',
    price: 100,
    description: 'Sample product'
  }, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(response => {
    console.log('Product Created:', response.data);
  })
  .catch(error => {
    console.log('Error Creating Product:', error.response.data);
  });
})
.catch(error => {
  console.log('Login Error:', error.response.data);
});
