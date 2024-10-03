"use client"
import { useEffect, useState } from 'react';

export default function Home() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch('/api/clients');
      
      // Log the response status and text
      console.log('Response status:', response.status);
      const text = await response.text(); // Get the response text
      console.log('Response text:', text); // Log the response text
    
      try {
        const data = JSON.parse(text); // Attempt to parse the text as JSON
        setClients(data);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    };    

    fetchClients();
  }, []);

  return (
    <div>
      <h1>Clients List</h1>
      <ul>
        {clients.map(client => (
          <li key={client._id}>
            <strong>Name:</strong> {client.name}<br />
            <strong>Phone:</strong> {client.phone}<br />
            <strong>Email:</strong> {client.email}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}
