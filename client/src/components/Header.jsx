
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <h1>Accessible Service Directory</h1>

      <nav aria-label="Main navigation">
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
