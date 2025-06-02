# Social Media App

A modern, full-stack social media application built with Next.js, featuring real-time interactions, user authentication, and a responsive design.

## 🚀 Features

- **User Authentication**: Secure login/register with NextAuth.js and bcrypt password hashing
- **User Profiles**: Customizable profiles with bio, profile images, and cover photos
- **Posts & Comments**: Create, like, and comment on posts
- **Follow System**: Follow/unfollow other users
- **Real-time Notifications**: Get notified about likes, comments, and follows
- **Image Upload**: Upload and manage profile pictures and cover images
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Dark/Light Mode Support**: Modern UI with theme switching capabilities

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **React Hot Toast** - Toast notifications
- **React Dropzone** - File upload handling
- **React Spinners** - Loading indicators

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **NextAuth.js** - Authentication solution
- **Prisma** - Database ORM
- **MongoDB** - NoSQL database
- **bcrypt** - Password hashing

### State Management & Data Fetching
- **SWR** - Data fetching and caching
- **Zustand** - Lightweight state management
- **Axios** - HTTP client

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** database (local or cloud instance like MongoDB Atlas)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd social-media-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```env
# Database
DATABASE_URL="your-mongodb-connection-string"

# NextAuth Configuration
NEXTAUTH_JWT_SECRET="your-jwt-secret"
NEXTAUTH_SECRET="your-nextauth-secret"

# Optional: For production
NEXTAUTH_URL="http://localhost:3000"
```

**Environment Variables Explained:**
- `DATABASE_URL`: Your MongoDB connection string
- `NEXTAUTH_JWT_SECRET`: Secret key for JWT token signing
- `NEXTAUTH_SECRET`: Secret key for NextAuth.js session encryption
- `NEXTAUTH_URL`: Your application URL (required for production)

### 4. Database Setup

Initialize and generate the Prisma client:

```bash
# Generate Prisma client
npx prisma generate

# Push the schema to your database
npx prisma db push
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🗄️ Database Schema

The application uses the following main models:

- **User**: User profiles with authentication data
- **Post**: User posts with content and metadata
- **Comment**: Comments on posts
- **Notification**: User notifications for interactions

## 🔐 Authentication

The app uses NextAuth.js with credentials provider for authentication:
- Email/password login
- Secure password hashing with bcrypt
- JWT-based sessions
- Protected API routes

## 🎨 UI/UX Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern Interface**: Clean, intuitive design with smooth animations
- **Toast Notifications**: Real-time feedback for user actions
- **Loading States**: Elegant loading indicators throughout the app
- **Form Validation**: Client-side and server-side validation

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues & Support

If you encounter any issues or have questions:
1. Check existing issues in the repository
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

## 🔮 Future Enhancements

- [ ] Real-time messaging
- [ ] Story/Status updates
- [ ] Advanced search functionality
- [ ] Content moderation
- [ ] Mobile app (React Native)
- [ ] Video/GIF support
- [ ] Advanced analytics dashboard

---

**Happy coding! 🎉**
