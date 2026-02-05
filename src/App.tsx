import { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { DepartmentsPage } from './components/DepartmentsPage';
import { DoctorsPage } from './components/DoctorsPage';
import { BookingPage } from './components/BookingPage';
import { PatientDashboard } from './components/PatientDashboard';
import { DoctorDashboard } from './components/DoctorDashboard';
import { ComprehensiveBooking } from './components/ComprehensiveBooking';
import { InsuranceCompaniesPage } from './components/InsuranceCompaniesPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);
  const [bookingContext, setBookingContext] = useState(null);

  const navigateToBooking = (context = null) => {
    setBookingContext(context);
    setCurrentPage('comprehensive-booking');
  };

  const navigate = (page, context = null) => {
    if (page === 'comprehensive-booking') {
      navigateToBooking(context);
    } else {
      setCurrentPage(page);
      setBookingContext(null);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'departments':
        return <DepartmentsPage onNavigate={navigate} />;
      case 'doctors':
        return <DoctorsPage onNavigate={navigate} />;
      case 'booking':
        return <BookingPage onNavigate={navigate} />;
      case 'comprehensive-booking':
        return <ComprehensiveBooking onNavigate={navigate} bookingContext={bookingContext} />;
      case 'patient-dashboard':
        return <PatientDashboard onNavigate={navigate} />;
      case 'doctor-dashboard':
        return <DoctorDashboard onNavigate={navigate} />;
      case 'insurance-companies':
        return <InsuranceCompaniesPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background rtl" dir="rtl">
      <Header 
        currentPage={currentPage} 
        onNavigate={navigate}
        user={user}
        onLogin={setUser}
      />
      {renderPage()}
    </div>
  );
}