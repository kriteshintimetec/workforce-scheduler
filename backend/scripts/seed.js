require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const Resource = require('../models/resource.model');
const Schedule = require('../models/schedule.model');

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Sample Users
const users = [
  {
    username: 'admin',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    username: 'manager',
    email: 'manager@example.com',
    password: 'manager123',
    role: 'manager'
  },
  {
    username: 'user',
    email: 'user@example.com',
    password: 'user123',
    role: 'user'
  }
];

// Sample Resources
const resources = [
  {
    name: 'John Doe',
    role: 'Senior Developer',
    skills: ['React', 'Node.js', 'MongoDB'],
    availability: 'Full Time',
    assignedShift: 'Morning',
    hoursPerWeek: 40
  },
  {
    name: 'Jane Smith',
    role: 'Project Manager',
    skills: ['Agile', 'Scrum', 'Team Lead'],
    availability: 'Full Time',
    assignedShift: 'Morning',
    hoursPerWeek: 40
  },
  {
    name: 'Mike Johnson',
    role: 'Developer',
    skills: ['JavaScript', 'Python', 'SQL'],
    availability: 'Part Time',
    assignedShift: 'Afternoon',
    hoursPerWeek: 20
  },
  {
    name: 'Sarah Wilson',
    role: 'QA Engineer',
    skills: ['Testing', 'Automation', 'Selenium'],
    availability: 'Full Time',
    assignedShift: 'Night',
    hoursPerWeek: 40
  }
];

// Sample Schedules (we'll fill in the resources after they're created)
const schedules = [
  {
    date: new Date('2025-10-27'),
    shift: 'Morning',
    time: {
      start: '06:00',
      end: '14:00'
    },
    location: 'Main Office',
    status: 'Confirmed'
  },
  {
    date: new Date('2025-10-27'),
    shift: 'Afternoon',
    time: {
      start: '14:00',
      end: '22:00'
    },
    location: 'Branch Office',
    status: 'Pending'
  },
  {
    date: new Date('2025-10-28'),
    shift: 'Night',
    time: {
      start: '22:00',
      end: '06:00'
    },
    location: 'Remote',
    status: 'Confirmed'
  }
];

// Function to seed the database
async function seedDatabase() {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Resource.deleteMany({});
    await Schedule.deleteMany({});

    // Create users
    const createdUsers = await Promise.all(
      users.map(async user => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return User.create({ ...user, password: hashedPassword });
      })
    );
    console.log('Users created:', createdUsers.length);

    // Create resources
    const createdResources = await Resource.insertMany(resources);
    console.log('Resources created:', createdResources.length);

    // Create schedules with references to resources and users
    const adminUser = createdUsers[0];
    const schedulesWithRefs = schedules.map(schedule => ({
      ...schedule,
      resources: [createdResources[0]._id, createdResources[1]._id], // Assign first two resources to each schedule
      createdBy: adminUser._id
    }));

    const createdSchedules = await Schedule.insertMany(schedulesWithRefs);
    console.log('Schedules created:', createdSchedules.length);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seed function
seedDatabase();