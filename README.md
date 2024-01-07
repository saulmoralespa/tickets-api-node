# Deploy with Docker


## Step 1: create file .env

Create file .env or copy .env.example to .env

```bash
mv .env.example .env
```

## Step 2: Run containers Docker

```bash
docker-compose build
docker-compose up
```
## Step 3: Use REST API

# Create new ticket

```js
const axios = require('axios');
let data = JSON.stringify({
  "user": "cortuclas"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:8888/api/tickets',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

# Get tickets

```js
const axios = require('axios');
let data = JSON.stringify({
  "user": "cortuclas"
});

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'http://localhost:8888/api/tickets?limit=10&page=2',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

# Get ticket by id

```js
const axios = require('axios');
let data = JSON.stringify({
  "user": "cortuclas"
});

const id = '659b3156330af0caf92a2fef';

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: `http://localhost:8888/api/tickets/${id}`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

# Update ticket

```js
const axios = require('axios');
let data = JSON.stringify({
  "status": "cerrado"
});

const id = '659b3156330af0caf92a2fef';

let config = {
  method: 'patch',
  maxBodyLength: Infinity,
  url: `http://localhost:8888/api/tickets/${id}`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```

# Delete ticket

```js
const axios = require('axios');
const id = '659b3156330af0caf92a2fef';

let config = {
  method: 'delete',
  maxBodyLength: Infinity,
  url: `http://localhost:8888/api/tickets/${id}`,
  headers: { }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
```