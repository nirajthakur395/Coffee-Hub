const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./models/User');
const MenuItem = require('./models/MenuItem');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await MenuItem.deleteMany({});

    // Create admin user
    const admin = new User({
      name: 'Admin User',
      email: 'admin@coffee.com',
      password: '123456',
      role: 'admin'
    });
    await admin.save();

    // Create customer user
    const customer = new User({
      name: 'Customer User',
      email: 'customer@coffee.com',
      password: '123456',
      role: 'customer'
    });
    await customer.save();

    // Create menu items
    const menuItems = [
      {
        name: 'Espresso',
        description: 'Rich and bold espresso shot',
        category: 'coffee',
        price: 120,
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&h=300&fit=crop',
        available: true,
        sizes: [
          { name: 'Single', price: 120 },
          { name: 'Double', price: 180 }
        ],
        addOns: [
          { name: 'Extra Shot', price: 40 },
          { name: 'Decaf', price: 0 }
        ]
      },
      {
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam',
        category: 'coffee',
        price: 180,
        image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop',
        available: true,
        sizes: [
          { name: 'Small', price: 180 },
          { name: 'Medium', price: 220 },
          { name: 'Large', price: 280 }
        ],
        addOns: [
          { name: 'Extra Shot', price: 40 },
          { name: 'Vanilla Syrup', price: 25 },
          { name: 'Caramel Syrup', price: 25 },
          { name: 'Oat Milk', price: 30 }
        ]
      },
      {
        name: 'Latte',
        description: 'Smooth espresso with steamed milk',
        category: 'coffee',
        price: 200,
        image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=400&h=300&fit=crop',
        available: true,
        sizes: [
          { name: 'Small', price: 200 },
          { name: 'Medium', price: 250 },
          { name: 'Large', price: 320 }
        ],
        addOns: [
          { name: 'Extra Shot', price: 40 },
          { name: 'Vanilla Syrup', price: 25 },
          { name: 'Hazelnut Syrup', price: 25 },
          { name: 'Almond Milk', price: 30 }
        ]
      },
      {
        name: 'Americano',
        description: 'Espresso with hot water',
        category: 'coffee',
        price: 150,
        image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400&h=300&fit=crop',
        available: true,
        sizes: [
          { name: 'Small', price: 150 },
          { name: 'Medium', price: 190 },
          { name: 'Large', price: 240 }
        ],
        addOns: [
          { name: 'Extra Shot', price: 40 },
          { name: 'Sugar', price: 0 },
          { name: 'Cream', price: 15 }
        ]
      },
      {
        name: 'Green Tea',
        description: 'Fresh brewed green tea',
        category: 'tea',
        price: 80,
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
        available: true,
        sizes: [
          { name: 'Small', price: 80 },
          { name: 'Medium', price: 100 },
          { name: 'Large', price: 130 }
        ],
        addOns: [
          { name: 'Honey', price: 15 },
          { name: 'Lemon', price: 10 }
        ]
      },
      {
        name: 'Earl Grey',
        description: 'Classic Earl Grey tea with bergamot',
        category: 'tea',
        price: 90,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
        available: true,
        sizes: [
          { name: 'Small', price: 90 },
          { name: 'Medium', price: 110 },
          { name: 'Large', price: 140 }
        ],
        addOns: [
          { name: 'Milk', price: 20 },
          { name: 'Sugar', price: 0 },
          { name: 'Honey', price: 15 }
        ]
      },
      {
        name: 'Croissant',
        description: 'Buttery, flaky French croissant',
        category: 'pastry',
        price: 120,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop',
        available: true,
        addOns: [
          { name: 'Butter', price: 10 },
          { name: 'Jam', price: 20 }
        ]
      },
      {
        name: 'Blueberry Muffin',
        description: 'Fresh baked muffin with blueberries',
        category: 'pastry',
        price: 150,
        image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop',
        available: true
      },
      {
        name: 'Turkey Sandwich',
        description: 'Fresh turkey with lettuce and tomato',
        category: 'sandwich',
        price: 280,
        image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=400&h=300&fit=crop',
        available: true,
        addOns: [
          { name: 'Cheese', price: 40 },
          { name: 'Avocado', price: 60 },
          { name: 'Bacon', price: 80 }
        ]
      },
      {
        name: 'Veggie Wrap',
        description: 'Fresh vegetables in a whole wheat wrap',
        category: 'sandwich',
        price: 220,
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop',
        available: true,
        addOns: [
          { name: 'Hummus', price: 30 },
          { name: 'Cheese', price: 40 }
        ]
      }
    ];

    await MenuItem.insertMany(menuItems);

    console.log('Database seeded successfully!');
    console.log('Admin login: admin@coffee.com / 123456');
    console.log('Customer login: customer@coffee.com / 123456');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();