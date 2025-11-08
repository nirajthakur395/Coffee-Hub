# Coffee Shop Orders Hub

A full-stack web application for managing coffee shop orders with real-time tracking, customer ordering system, and admin dashboard.

## 🚀 Features

### Customer Features
- **Browse Menu**: View categorized coffee menu with detailed descriptions
- **Customize Orders**: Select sizes, add-ons, and special instructions
- **Shopping Cart**: Add multiple items and manage quantities
- **Order Tracking**: Real-time order status updates
- **Order History**: View past orders and their status
- **User Authentication**: Secure login and registration

### Admin Features
- **Order Management**: View, update, and track all orders in real-time
- **Menu Management**: Add, edit, and delete menu items
- **Analytics Dashboard**: Sales reports, top-selling items, and order statistics
- **Real-time Notifications**: Instant notifications for new orders

### Technical Features
- **Real-time Updates**: WebSocket integration for live order tracking
- **Responsive Design**: Mobile-friendly interface
- **JWT Authentication**: Secure user authentication
- **RESTful API**: Well-structured backend API
- **Data Visualization**: Charts and analytics using Recharts

## 🛠️ Tech Stack

### Frontend
- **React.js** with TypeScript
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API calls
- **Socket.io Client** for real-time updates
- **Recharts** for data visualization
- **Lucide React** for icons

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **Socket.io** for real-time communication
- **bcryptjs** for password hashing
- **Express Validator** for input validation

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd coffee-shop-hub
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 3. Environment Configuration

Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/coffeeshop
JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_secure
NODE_ENV=development
```

### 4. Database Setup

Start MongoDB and seed the database:
```bash
# Make sure MongoDB is running
# Then seed the database
cd backend
node seed.js
```

### 5. Start the Application

Option 1 - Start both servers simultaneously:
```bash
# From root directory
npm run dev
```

Option 2 - Start servers separately:
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5001

## 👥 Demo Accounts

After seeding the database, you can use these demo accounts:

**Admin Account:**
- Email: admin@coffee.com
- Password: 123456

**Customer Account:**
- Email: customer@coffee.com
- Password: 123456

## 🏗️ Project Structure

```
coffee-shop-hub/
├── backend/
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── server.js        # Main server file
│   ├── seed.js          # Database seeding script
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── contexts/    # React contexts
│   │   ├── services/    # API services
│   │   ├── types/       # TypeScript types
│   │   └── App.tsx      # Main App component
│   └── package.json
└── README.md
```

## 🔄 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Menu
- `GET /api/menu` - Get all menu items
- `GET /api/menu/:id` - Get menu item by ID
- `POST /api/menu` - Create menu item (Admin)
- `PUT /api/menu/:id` - Update menu item (Admin)
- `DELETE /api/menu/:id` - Delete menu item (Admin)

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/my-orders` - Get user's orders
- `GET /api/orders` - Get all orders (Admin)
- `GET /api/orders/:id` - Get order by ID
- `PATCH /api/orders/:id/status` - Update order status (Admin)

### Analytics
- `GET /api/analytics/dashboard` - Get analytics data (Admin)

## 🎨 UI/UX Design

The application features a coffee-themed design with:
- **Color Palette**: Warm browns, creams, and coffee tones
- **Typography**: Clean, readable fonts
- **Layout**: Responsive grid system
- **Components**: Reusable, accessible components
- **Icons**: Consistent iconography using Lucide React

## 🔧 Development

### Adding New Features
1. Create new components in appropriate directories
2. Add new API routes in the backend
3. Update TypeScript types as needed
4. Test functionality thoroughly

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Implement proper error handling
- Add loading states for better UX

## 🚀 Deployment

### Backend Deployment (Railway/Render)
1. Create account on Railway or Render
2. Connect your GitHub repository
3. Set environment variables
4. Deploy the backend service

### Frontend Deployment (Vercel/Netlify)
1. Create account on Vercel or Netlify
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Add environment variables for API URLs

### Environment Variables for Production
```env
# Backend
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_production_jwt_secret
NODE_ENV=production

# Frontend
REACT_APP_API_URL=your_backend_api_url
REACT_APP_SOCKET_URL=your_backend_socket_url
```

## 📱 Screenshots

[Add screenshots of the application here]

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the existing issues on GitHub
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

## 🔮 Future Enhancements

- [ ] Payment integration (Stripe/PayPal)
- [ ] Email notifications
- [ ] Push notifications
- [ ] Mobile app (React Native)
- [ ] Inventory management
- [ ] Customer loyalty program
- [ ] Multi-location support
- [ ] Advanced analytics and reporting