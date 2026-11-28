
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <>
      <Header />

      <div className="dashboard-container">
        <Sidebar />

        <main id="main-content" tabIndex="-1">
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default DashboardLayout;
