import React from "react";
import "./App.css";

const azureServices = [
  {
    name: "Azure App Service",
    description: "Host web apps, RESTful APIs, and mobile backends in a managed platform."
  },
  {
    name: "Azure Functions",
    description: "Run event-driven serverless code with automatic scaling and pay-per-use pricing."
  },
  {
    name: "Azure SQL Database",
    description: "Managed relational database service with built-in intelligence and security."
  },
  {
    name: "Azure Storage",
    description: "Durable, scalable cloud storage for blobs, files, queues, and tables."
  },
  {
    name: "Azure Virtual Machines",
    description: "Provision Windows and Linux VMs in seconds and scale as needed."
  }
];

function AzureServicesPage() {
  return (
    <div className="azure-container">
      <header>
        <h1>Microsoft Azure Services</h1>
        <p>Explore popular Azure cloud services and their capabilities.</p>
      </header>
      <main>
        <section className="service-list">
          <h2>Featured Azure Services</h2>
          <ul>
            {azureServices.map((service, idx) => (
              <li key={idx}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="learn-more">
          <h2>Learn More</h2>
          <p>
            Visit the <a href="https://azure.microsoft.com/en-us/services/" target="_blank" rel="noopener noreferrer">Azure Services Catalog</a> for a complete list and documentation.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Microsoft Azure Demo</p>
      </footer>
    </div>
  );
}

export default AzureServicesPage;
