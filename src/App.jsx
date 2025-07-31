import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
      link: 'https://www.cdc.gov/travel',
    },
    {
      text: '5. Stay Aware — Avoid scams and use VPNs over public Wi-Fi.',
      link: 'https://www.nomadicmatt.com/travel-blogs/common-travel-scams/',
    },
    {
      text: '6. Understand Local Risks — Check travel and weather advisories.',
      link: 'https://www.weather.gov/',
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
      text: '💵 Local currency',
      link: 'https://wise.com/us/currency-converter/',
    },
    {
      text: '📱 SIM card or mobile Wi-Fi',
      link: 'https://www.travelsim.com/',
    },
    {
      text: '🧼 Toiletries',
      link: 'https://www.realsimple.com/health/preventative-health/personal-hygiene-products',
    },
    {
      text: '🧳 Light backpack',
      link: 'https://www.travelandleisure.com/best-backpacks-for-travel-7487490',
    },
    {
      text: '🗺️ Translation app',
      link: 'https://translate.google.com/',
    },
  ];

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

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

      <h2>🧳 Travel Essentials</h2>
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
