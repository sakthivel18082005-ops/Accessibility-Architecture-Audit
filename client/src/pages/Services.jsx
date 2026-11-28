import { useEffect, useState } from 'react';

function Services() {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch services');
        }
        return response.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Unable to load services. Please try again.');
        setLoading(false);
      });
  }, []);

  const filteredServices = services.filter((service) =>
    `${service.name} ${service.description} ${service.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section aria-labelledby="services-heading">
      <h2 id="services-heading">Explore Services</h2>

      <label htmlFor="service-search">Search for a service</label>
      <input
        id="service-search"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Enter a service name..."
      />

      {loading && <p>Loading services...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && (
        <>
          <p aria-live="polite">
            {filteredServices.length} services found
          </p>

          {filteredServices.length > 0 ? (
            <ul>
              {filteredServices.map((service) => (
                <li key={service.id}>
                  <article>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <p>Category: {service.category}</p>
                  </article>
                </li>
              ))}
            </ul>
          ) : (
            <p>No services found. Try another search.</p>
          )}
        </>
      )}
    </section>
  );
}

export default Services;