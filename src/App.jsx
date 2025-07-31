// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [location, setLocation] = useState('');
  const [month, setMonth] = useState('');
  const [packingList, setPackingList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Placeholder — will fetch from backend later
    const fakeResponse = {
      items: [
        'Light jacket',
        'Power adapter (Type A/B)',
        'Travel umbrella',
        'Walking shoes',
        'Local currency',
        'Pocket tissues',
        'SIM card or mobile Wi-Fi',
        'Toiletries',
        'Translation app',
        'Weather-appropriate clothes',
      ],
    };

    setPackingList(fakeResponse.items);
  };

  return (
    <div className="app-container">
      <h1>🌍 Travel Essentials</h1>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Destination:
          <select value={location} onChange={(e) => setLocation(e.target.value)} required>
            <option value="">-- Select Location --</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Paris">Paris</option>
            <option value="New York">New York</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Cape Town">Cape Town</option>
          </select>
        </label>

        <label>
          Month:
          <select value={month} onChange={(e) => setMonth(e.target.value)} required>
            <option value="">-- Select Month --</option>
            {[
              'January', 'February', 'March', 'April', 'May', 'June',
              'July', 'August', 'September', 'October', 'November', 'December',
            ].map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </label>

        <button type="submit">Get Packing List</button>
      </form>

      {packingList.length > 0 && (
        <div className="results">
          <h2>Top 10 Essentials for {location} in {month}</h2>
          <ul>
            {packingList.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
