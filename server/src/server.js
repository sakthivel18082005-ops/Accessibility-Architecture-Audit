const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Home route
app.get('/', (req, res) => {
  res.send('Accessibility Architecture Audit API is running!');
});

// Services data
const services = [
  {
    id: 1,
    name: 'Government Services',
    category: 'Government',
    description: 'Access government services and information.',
  },
  {
    id: 2,
    name: 'Education Services',
    category: 'Education',
    description: 'Find educational resources and opportunities.',
  },
  {
    id: 3,
    name: 'Healthcare Services',
    category: 'Healthcare',
    description: 'Explore healthcare information and services.',
  },
  {
    id: 4,
    name: 'Public Information',
    category: 'Information',
    description: 'Find public announcements and useful information.',
  },
];

// Get all services
app.get('/api/services', (req, res) => {
  res.json(services);
});

// Start server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
