# Beauty Center Booking System MVP

A multi-tenant booking system for beauty centers built with Next.js, TypeScript, and shadcn/ui. Each beauty center has its own landing page where clients can view available services and schedule appointments.

## 🚀 Features

- **Multi-tenant Architecture**: Each beauty center has its own unique landing page accessible via `/[center-slug]`
- **Service Listing**: Display services with name, duration, price, and description
- **Booking Form**: Comprehensive form with validation for name, email, date, and time
- **Date/Time Validation**: Ensures bookings can only be made for future dates and times
- **Booking Confirmation**: Success page with detailed booking information
- **Loading States**: Skeleton loaders and loading indicators for better UX
- **Error Handling**: Graceful error messages and 404 pages
- **Responsive Design**: Mobile-first design using TailwindCSS
- **Type Safety**: Full TypeScript implementation
- **LocalStorage Persistence**: Bookings are saved to browser localStorage

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **UI Components**: shadcn/ui
- **Styling**: TailwindCSS
- **Form Handling**: React Hook Form + Zod
- **Date Handling**: date-fns
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

## 🏃 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd arionkoder
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Centers

The application includes three sample beauty centers:

- **Serenity Beauty Spa** - `/serenity-spa`
- **Glamour Studio** - `/glamour-studio`
- **Urban Beauty Bar** - `/urban-beauty`

## 📁 Project Structure

```
arionkoder/
├── app/
│   ├── [center]/          # Dynamic route for center landing pages
│   │   ├── page.tsx       # Center page component
│   │   └── loading.tsx    # Loading state
│   ├── booking/
│   │   └── [id]/          # Booking confirmation page
│   │       └── page.tsx
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page with center selection
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── BookingDialog.tsx  # Booking dialog component
│   ├── BookingForm.tsx    # Booking form with validation
│   ├── BookingConfirmation.tsx # Confirmation component
│   └── ServiceListing.tsx # Service cards listing
├── lib/
│   ├── api.ts             # API simulation layer
│   ├── types.ts           # TypeScript interfaces
│   └── utils.ts           # Utility functions
└── package.json
```

## 🎯 Key Features Implementation

### 1. Center Landing Page (`/[center]`)

- Displays center name, description, and logo
- Lists all available services
- Each service card shows:
  - Service name
  - Duration (formatted as hours/minutes)
  - Price (formatted as currency)
  - Description
  - "Book Appointment" button

### 2. Booking Form

- **Fields**:
  - Name (minimum 2 characters)
  - Email (valid email format)
  - Date (calendar picker, must be today or future)
  - Time (dropdown with 30-minute intervals from 9:00 AM to 5:30 PM)
  
- **Validation**:
  - All fields are required
  - Email must be valid format
  - Date must be today or in the future
  - Date and time combination must be in the future
  - Real-time validation feedback

### 3. Booking Confirmation

- Displays booking details:
  - Service name
  - Date and time (formatted)
  - Client name and email
  - Unique booking ID
- Provides navigation options to book another service or return home

### 4. API Simulation

- All API calls include a ~1.5 second delay to simulate network latency
- Bookings are persisted to localStorage
- Mock data includes 3 centers with various services

## 🎨 Design Decisions

1. **shadcn/ui**: Chosen for its modern, accessible components and easy customization
2. **React Hook Form + Zod**: Provides robust form validation with excellent TypeScript support
3. **App Router**: Utilizes Next.js 16 App Router for better performance and developer experience
4. **TailwindCSS**: Enables rapid UI development with utility-first approach
5. **LocalStorage**: Simple persistence solution for MVP; easily replaceable with a real backend

## 🧪 Testing the Application

1. **Home Page**: Visit `/` to see all available centers
2. **Center Page**: Click on a center or visit `/[center-slug]` directly
3. **Booking Flow**:
   - Click "Book Appointment" on any service
   - Fill out the booking form
   - Submit and view confirmation
4. **Validation**: Try submitting invalid data to see validation messages
5. **Past Dates**: Try selecting a past date to see validation error

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

The application is ready to deploy and will work out of the box.

## ⏱️ Time Investment

- **Setup & Configuration**: ~30 minutes
- **Core Features Development**: ~4 hours
- **UI/UX Polish**: ~1 hour
- **Testing & Bug Fixes**: ~30 minutes
- **Documentation**: ~30 minutes

**Total**: ~6.5 hours

## 🔮 Future Enhancements

With more time, I would implement:

1. **Backend Integration**:
   - Real database (PostgreSQL/MongoDB)
   - RESTful API or GraphQL endpoint
   - User authentication and authorization

2. **Advanced Features**:
   - Calendar view for available time slots
   - Real-time availability checking
   - Email notifications (using services like SendGrid or Resend)
   - SMS reminders
   - Booking cancellation and rescheduling
   - Multiple service booking in one transaction

3. **Admin Dashboard**:
   - Center management interface
   - Service CRUD operations
   - Booking management
   - Analytics and reporting

4. **User Features**:
   - User accounts and profiles
   - Booking history
   - Favorite centers
   - Reviews and ratings

5. **Enhanced UX**:
   - Search and filter services
   - Service categories
   - Image galleries
   - Virtual tours
   - Online payment integration (Stripe/PayPal)

6. **Performance**:
   - Image optimization
   - Caching strategies
   - Service Worker for offline support
   - Progressive Web App (PWA) features

7. **Testing**:
   - Unit tests (Jest/Vitest)
   - Integration tests
   - E2E tests (Playwright/Cypress)
   - Accessibility testing

8. **Internationalization**:
   - Multi-language support (i18n)
   - Currency conversion
   - Timezone handling

## 📝 Assumptions

1. **Time Slots**: Fixed 30-minute intervals from 9:00 AM to 5:30 PM
2. **Business Hours**: All centers operate during the same hours
3. **No Conflicts**: No validation for overlapping bookings (would require backend)
4. **Single Service**: One service per booking (no multi-service packages)
5. **No Authentication**: No user accounts required for booking
6. **LocalStorage**: Client-side persistence is sufficient for MVP

## 🐛 Known Limitations

- Bookings are stored in localStorage (browser-specific, not shared across devices)
- No real-time availability checking
- No conflict detection for overlapping bookings
- Fixed time slots (no custom time selection)
- No email/SMS notifications
- No payment processing

## 📄 License

This project is created for demonstration purposes.

## 👤 Author

Built as part of a coding challenge for a multi-tenant booking system MVP.

---

**Note**: This is an MVP (Minimum Viable Product) focused on core functionality. Production-ready features like authentication, payment processing, and real-time availability would require additional development time and backend infrastructure.
# Arionkoder
