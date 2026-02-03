# StartupHR - AI-Powered HRIS Platform

A comprehensive, fully functional Human Resource Information System (HRIS) designed specifically for startups from bootstrapped to Series-B, built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Functionality
- **Fully Interactive CRUD Operations**: Create, read, update employees, job postings, and candidates
- **Real-time Data Management**: All changes persist throughout the session
- **Role-Based Access Control**: Admin and Employee dashboards with appropriate permissions
- **Mobile-First Responsive Design**: Works seamlessly on all devices

### Admin Modules (12 Total)
1. **Dashboard** - Overview with key metrics and quick actions
2. **Employee Directory** - Complete employee management with detailed profiles
3. **Onboarding** - 5-step wizard that creates actual employee records
4. **Payroll** - Salary processing with bank details integration
5. **Time Tracking** - Clock in/out with attendance monitoring
6. **Leave Management** - PTO requests and approval workflows
7. **Performance** - Goal setting, reviews, and feedback
8. **Benefits** - Health insurance and perks management
9. **Recruitment** - Job posting creation and candidate pipeline
10. **Compliance** - HR audits and regulatory checks
11. **Documents** - Secure storage for contracts and policies
12. **Analytics** - Real-time insights with interactive charts

### Employee Self-Service (8 Modules)
1. **Dashboard** - Personal overview and quick actions
2. **My Profile** - View complete profile including bank details
3. **Payslips** - Access salary statements
4. **Time Off** - Request and track leave
5. **Performance** - View goals and feedback
6. **Timesheet** - Log hours and track time
7. **Benefits** - Manage enrollment
8. **Documents** - Access personal documents

## 💡 What Makes It \"Beyond Clickable\"

### 1. Employee Management
- **Create New Employees**: Complete onboarding flow that adds employees to the system
- **View Detailed Profiles**: Click any employee to see:
  - Personal information (name, email, phone, DOB)
  - Employment details (role, department, salary, start date)
  - **Bank account information** for payroll processing
  - Full address and location
  - Emergency contact details
  - Equity grants with vesting schedules
- **Search & Filter**: Real-time filtering by department and search

### 2. Recruitment
- **Create Job Postings**: Fully functional form to add new positions
- **View Job Details**: Click any job to see complete posting
- **Manage Candidates**: 
  - View detailed candidate profiles
  - Update their stage in the pipeline (Applied → Screening → Interview → Offer)
  - Track skills, experience, and education
- **Kanban Board**: Visual pipeline with drag-and-drop style interface

### 3. Bank Details for Payroll
As specified in the PRD, the system captures and displays comprehensive banking information:
- Account holder name
- Bank name
- Account number (masked for security)
- Routing number
- Account type (checking/savings)

This information is collected during onboarding and visible in:
- Employee directory (admin view)
- Employee profile (self-service view)

## 🛠 Technical Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: React Context API
- **UI Components**: Custom component library (80+ components)
- **Icons**: Lucide React
- **Notifications**: Sonner (toast notifications)
- **Charts**: Recharts (for analytics)

## 📁 Project Structure

```
ai_hr_system/
├── App.tsx                          # Main application entry
├── contexts/
│   └── DataContext.tsx              # Centralized data management
├── components/
│   ├── AdminDashboard.tsx          # Admin router
│   ├── EmployeeDashboard.tsx       # Employee router
│   ├── Login.tsx                   # Authentication
│   ├── Navigation.tsx              # Sidebar navigation
│   ├── admin/
│   │   ├── DashboardHome.tsx
│   │   ├── EmployeeDirectoryEnhanced.tsx    # ✨ Enhanced with CRUD
│   │   ├── OnboardingFlowEnhanced.tsx       # ✨ Creates actual employees
│   │   ├── RecruitmentModuleEnhanced.tsx    # ✨ Job & candidate management
│   │   ├── PayrollModule.tsx
│   │   ├── TimeTracking.tsx
│   │   ├── LeaveManagement.tsx
│   │   ├── PerformanceModule.tsx
│   │   ├── BenefitsModule.tsx
│   │   ├── ComplianceModule.tsx
│   │   ├── DocumentsModule.tsx
│   │   └── AnalyticsModule.tsx
│   ├── employee/
│   │   ├── EmployeeHome.tsx
│   │   ├── MyProfileEnhanced.tsx            # ✨ Shows bank details
│   │   ├── MyPayslips.tsx
│   │   ├── MyLeave.tsx
│   │   ├── MyPerformance.tsx
│   │   ├── MyTimesheet.tsx
│   │   ├── MyBenefits.tsx
│   │   └── MyDocuments.tsx
│   └── ui/                         # 80+ reusable UI components
└── styles/
    └── globals.css                 # Global styles with CSS variables
```

## 🎯 Key Enhancements

### DataContext (`/contexts/DataContext.tsx`)
Centralized state management with:
- **Employee CRUD**: Add, Update, Delete, Get by ID
- **Job CRUD**: Add, Update, Delete, Get by ID
- **Candidate CRUD**: Add, Update, Delete, Get by ID
- **Leave Request Management**: Add and Update
- **Rich Data Models**: Comprehensive TypeScript interfaces

### Enhanced Components

#### EmployeeDirectoryEnhanced
- Click-to-view detailed employee modals
- Complete profile information including bank details
- Real-time search and filtering
- Export functionality

#### OnboardingFlowEnhanced
- 5-step wizard collecting all employee information
- Automatic employee ID generation (EMP-00001, EMP-00002, etc.)
- Actually creates employee records that appear in directory
- Success notifications with email preview

#### RecruitmentModuleEnhanced
- Create job postings with full details
- View complete job descriptions
- Click candidates to see profiles and update stages
- Kanban-style pipeline visualization

#### MyProfileEnhanced
- Employee self-service view
- Bank details display for transparency
- Equity grant information
- Emergency contact access

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/chandurkars/ai_hr_system.git

# Navigate to project directory
cd ai_hr_system

# Install dependencies
npm install

# Start development server
npm run dev
```

### Demo Accounts

**Admin Account**
- Role: CEO & Founder
- Access: Full system administration

**Employee Account**
- Role: Senior Developer
- Access: Self-service features only

## 📊 Data Models

### Employee Interface
```typescript
{
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  location: string;
  avatar: string;
  status: 'active' | 'on-leave' | 'inactive';
  startDate: string;
  employeeId: string;
  salary?: number;
  employmentType?: string;
  manager?: string;
  bankDetails?: {
    accountHolderName: string;
    bankName: string;
    accountNumber: string;
    routingNumber: string;
    accountType: 'checking' | 'savings';
  };
  address?: { /* ... */ };
  emergencyContact?: { /* ... */ };
  equity?: { /* ... */ };
}
```

## 🎨 Design System

- **Primary Color**: #007BFF (Blue)
- **Accent Color**: #28A745 (Green)
- **Typography**: Inter font family
- **Spacing**: Tailwind's default scale
- **Components**: Custom component library with consistent styling

## 🔐 Security Considerations

⚠️ **Important**: This is a prototype application. For production use:
- Implement proper authentication (OAuth, JWT)
- Encrypt sensitive data (bank details, SSN)
- Add role-based access control at API level
- Use environment variables for configuration
- Implement audit logging
- Add data validation and sanitization
- Follow GDPR, CCPA, SOC 2 compliance requirements

## 📝 Testing the Application

### As Admin:
1. Login as Admin
2. **View Employees**: Go to Employee Directory → Click any employee card → See complete profile with bank details
3. **Add Employee**: Click \"Add Employee\" → Complete 5-step onboarding → New employee appears in directory
4. **Create Job**: Go to Recruitment → \"Post New Job\" → Fill form → New job appears immediately
5. **View Candidates**: Click any candidate → See full profile → Update their stage
6. **View Job Details**: Click any job posting → See complete description

### As Employee:
1. Login as Employee
2. Go to \"My Profile\" → See complete information including:
   - Personal and employment details
   - Bank account information for payroll
   - Emergency contact
   - Equity grant details

## 🚀 Future Enhancements

- [ ] Backend API integration
- [ ] Database persistence (PostgreSQL)
- [ ] Real authentication system
- [ ] Email notifications
- [ ] Document upload functionality
- [ ] Calendar integration
- [ ] Slack/Teams integration
- [ ] Advanced analytics with AI insights
- [ ] Bulk import/export (CSV/Excel)
- [ ] Multi-language support
- [ ] Mobile apps (React Native)

## 📄 License

This project is created as a demonstration of an HRIS system.

## 🤝 Contributing

This is a prototype project. For collaboration opportunities, please reach out.

## 📧 Contact

For questions or feedback about this HRIS platform, please open an issue.

---

**Built with ❤️ for startups who want to automate HR and focus on growth**