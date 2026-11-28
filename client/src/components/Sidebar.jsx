
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar" aria-label="Dashboard sidebar">

      <h2>Menu</h2>

      <nav aria-label="Sidebar navigation">
        <ul>
          <li>
            <NavLink to="/" end>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/services">
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/users">
              Users
            </NavLink>
          </li>

          <li>
            <NavLink to="/reports">
              Reports
            </NavLink>
          </li>

          <li>
            <NavLink to="/settings">
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>

    </aside>
  );
}

export default Sidebar;
