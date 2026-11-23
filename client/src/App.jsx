
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [services, setServices] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch services')
        }
        return response.json()
      })
      .then((data) => {
        setServices(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Unable to load services. Please try again.')
        setLoading(false)
      })
  }, [])

  const filteredServices = services.filter((service) =>
    `${service.name} ${service.description} ${service.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
    <>
      <header>
        <h1>Accessible Service Directory</h1>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="home">
        <section aria-labelledby="welcome-heading">
          <h2 id="welcome-heading">Welcome to the Service Directory</h2>
          <p>
            Find useful public services through a simple and accessible
            interface.
          </p>
        </section>

        <section id="services" aria-labelledby="services-heading">
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

        <section id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About This Project</h2>
          <p>
            This project demonstrates accessible web development using
            semantic HTML and React.
          </p>
        </section>
      </main>

      <footer>
        <p>Accessibility Architecture Audit Project</p>
      </footer>
    </>
  )
}

export default App
