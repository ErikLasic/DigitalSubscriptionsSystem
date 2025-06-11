import React, { useState, useEffect } from 'react';
import UsersModule from './modules/UsersModule';
import MagazinesModule from './modules/MagazinesModule';

export default function App() {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [userId, setUserId] = useState(() => localStorage.getItem('userId'));

  const handleLogin = async (token) => {
    setToken(token);
    localStorage.setItem('token', token);

    // Pridobi podatke o uporabniku z tokenom
    const res = await fetch('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` }
    });

    if (res.ok) {
      const data = await res.json();
      setUserId(data.id); // prilagodi glede na strukturo odgovora
      localStorage.setItem('userId', data.id);
    } else {
      alert('Napaka pri pridobivanju uporabniških podatkov');
      handleLogout();
    }
  };

  const handleLogout = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  };

  // Opcijsko: če želiš, lahko ob naložitvi strani preveriš še veljavnost tokena
  useEffect(() => {
    if (token && !userId) {
      // če imamo token, ampak nimamo userId, ga pridobi
      (async () => {
        const res = await fetch('/api/users/me', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setUserId(data.id);
          localStorage.setItem('userId', data.id);
        } else {
          handleLogout();
        }
      })();
    }
  }, [token, userId]);

  return (
    <div>
      {!token ? (
        <UsersModule onLogin={handleLogin} />
      ) : (
        <>
          <button onClick={handleLogout} style={{ float: 'right', margin: '10px' }}>
            Odjavi se
          </button>
          <MagazinesModule userId={userId} token={token} />
        </>
      )}
    </div>
  );
}
