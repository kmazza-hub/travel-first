import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);

  const tips = [
    {
      text: '1. Know Before You Go — Research local laws, safety, and customs.',
      link: 'https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html',
    },
    {
      text: '2. Pack Smart & Light — Use packing cubes and versatile clothing.',
      link: 'https://www.realsimple.com/work-life/travel/travel-packing-tips',
    },
    {
      text: '3. Backup Insurance & Docs — Get insurance and duplicate documents.',
      link: 'https://www.insuremytrip.com/',
    },
    {
      text: '4. Health Precautions — Pack a med kit and follow safe food/water habits.',
      link: 'https://www.cdc.gov/travel/page/travelers-health.html',
    },
    {
      text: '5. Stay Aware — Avoid scams and use VPNs over public Wi-Fi.',
      link: 'https://www.nomadicmatt.com/travel-blogs/common-travel-scams/',
    },
    {
      text: '6. Understand Local Risks — Check travel and weather advisories.',
      link: 'https://www.weather.gov/safety',
    },
    {
      text: '7. Plan with Flexibility — Include rest days and leave room to explore.',
      link: 'https://www.nomadicmatt.com/travel-blogs/how-to-plan-a-trip/',
    },
    {
      text: '8. Embrace the Unknown — Try new foods and meet new people.',
      link: 'https://www.lonelyplanet.com/articles/how-to-meet-people-when-traveling-solo',
    },
    {
      text: '9. Save Money — Book midweek, pack snacks, and use loyalty rewards.',
      link: 'https://www.thriftytraveler.com/',
    },
    {
      text: '10. Be Courteous — Learn key phrases and respect local customs.',
      link: 'https://www.worldpackers.com/articles/travel-etiquette',
    },
  ];

  const essentials = [
    {
      text: 'Power adapter (Type A/B)',
      link: 'https://www.power-plugs-sockets.com/',
    },
    {
      text: 'Local currency tips',
      link: 'https://www.oanda.com/currency-converter/',
    },
    {
      text: 'SIM card or mobile Wi-Fi',
      link: 'https://www.nomadicmatt.com/travel-blogs/best-sim-cards-for-travel/',
    },
    {
      text: 'Travel toiletries checklist',
      link: 'https://www.travelandleisure.com/style/beauty/travel-toiletries-packing-checklist',
    },
    {
      text: 'Light backpack tips',
      link: 'https://www.cleverhiker.com/best-backpacks/',
    },
    {
      text: 'Translation apps',
      link: 'https://www.tomsguide.com/best-picks/best-translation-apps',
    },
  ];

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    if (!location) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      );
      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      const tempC = data.main.temp;
      const tempF = (tempC * 9) / 5 + 32;
      const condition = data.weather[0].main;

      setWeather({ tempC: tempC.toFixed(1), tempF: tempF.toFixed(1), condition });
    } catch (err) {
      console.error(err);
      setWeather(null);
    }
  };

  return (
    <div className="app-container">
      <button className="toggle-theme" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* Travel Tips Section */}
      <div className="section-box">
        <div className="section-header">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            alt="Travel Tips"
            className="section-image"
          />
          <div className="section-title">Top 10 Travel Tips</div>
        </div>

        <div className="card-grid">
          {tips.map((tip, i) => (
            <a
              key={i}
              href={tip.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tip-card"
            >
              {tip.text}
            </a>
          ))}
        </div>
      </div>

      {/* Travel Essentials Section */}
      <div className="section-box">
        <div className="section-header">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80"
            alt="Travel Essentials"
            className="section-image"
          />
          <div className="section-title">Travel Essentials</div>
        </div>

        <div className="card-grid">
          {essentials.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tip-card"
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>

      {/* Travel Weather Section */}
      <div className="section-box">
        <div className="section-header">
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80"
            alt="Travel Weather"
            className="section-image"
          />
          <div className="section-title">Weather by Destination</div>
        </div>

        <div className="weather-section">
          <input
            type="text"
            placeholder="Enter destination (e.g. Tokyo)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button onClick={fetchWeather}>Get Weather</button>
          {weather && (
            <div className="weather-info">
              <h3>Current Weather in {location}</h3>
              <p>
                {weather.tempC}°C / {weather.tempF}°F — {weather.condition}
              </p>
            </div>
          )}
        </div>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Travel First by Keith Mazza. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
