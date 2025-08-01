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
      link: 'https://www.health.harvard.edu/',
    },
    {
      text: '5. Stay Aware — Avoid scams and use VPNs over public Wi-Fi.',
      link: 'https://www.nomadicmatt.com/travel-blogs/common-travel-scams/',
    },
    {
      text: '6. Understand Local Risks — Check travel and weather advisories.',
      link: 'https://www.cdc.gov/travel',
    },
    {
      text: '7. Plan with Flexibility — Include rest days and leave room to explore.',
      link: 'https://www.efultimatebreak.com/blog/travel-tips/how-to-plan-a-trip',
    },
    {
      text: '8. Embrace the Unknown — Try new foods and meet new people.',
      link: 'https://www.awaylands.com/',
    },
    {
      text: '9. Save Money — Book midweek, pack snacks, and use loyalty rewards.',
      link: 'https://thriftytraveler.com/',
    },
    {
      text: '10. Be Courteous — Learn key phrases and respect local customs.',
      link: 'https://www.worldpackers.com/articles/travel-etiquette',
    },
  ];

  const essentials = [
    {
      text: '🔌 Power adapter (Type A/B)',
      link: 'https://www.power-plugs-sockets.com/',
    },
    {
      text: '💵 Local currency tips',
      link: 'https://www.oanda.com/currency-converter/',
    },
    {
      text: '📱 SIM card or mobile Wi-Fi',
      link: 'https://www.nomadicmatt.com/travel-blogs/best-sim-cards-for-travel/',
    },
    {
      text: '🧼 Travel toiletries checklist',
      link: 'https://www.travelandleisure.com/style/beauty/travel-toiletries-packing-checklist',
    },
    {
      text: '🧳 Light backpack tips',
      link: 'https://www.cleverhiker.com/best-backpacks/',
    },
    {
      text: '🗺️ Translation apps',
      link: 'https://www.techradar.com/best/translation-apps',
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

      <h1>🌍 Top 10 Travel Tips</h1>
      <div className="results simple-list">
        {tips.map((tip, i) => (
          <p key={i}>
            {tip.text}{' '}
            <a href={tip.link} target="_blank" rel="noopener noreferrer">
              Learn more →
            </a>
          </p>
        ))}
      </div>

      <hr />

      <h1>🌐 Travel Essentials</h1>
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

      <div className="results simple-list">
        {essentials.map((item, i) => (
          <p key={i}>
            {item.text}{' '}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Learn more →
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
