function Dashboard() {
  return (
    <section aria-labelledby="dashboard-heading">
      <h2 id="dashboard-heading">Dashboard</h2>
      <p>Welcome to the Accessible Service Directory.</p>

      <div className="dashboard-cards">
        <article>
          <h3>Services</h3>
          <p>Explore available public services.</p>
        </article>

        <article>
          <h3>Users</h3>
          <p>Manage user information.</p>
        </article>

        <article>
          <h3>Reports</h3>
          <p>View project reports.</p>
        </article>
      </div>
    </section>
  );
}

export default Dashboard;