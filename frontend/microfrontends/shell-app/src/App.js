import React, { Suspense, useState, useEffect } from 'react';

const UsersModule = React.lazy(() => import('usersApp/UsersModule'));
const MagazinesModule = React.lazy(() => import('magazinesApp/MagazinesModule'));

const API_BASE_URL = 'http://localhost:8000';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  const handleLogin = async (token) => {
    setToken(token);
    localStorage.setItem('token', token);

    try {
      const res = await fetch(`${API_BASE_URL}/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUserId(data.id);
        localStorage.setItem('userId', data.id);
      } else {
        alert('Napaka pri pridobivanju uporabniških podatkov');
        handleLogout();
      }
    } catch (err) {
      alert('Napaka pri komunikaciji s strežnikom');
      handleLogout();
    }
  };

  const handleLogout = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  };

  useEffect(() => {
    if (token && !userId) {
      (async () => {
        try {
          const res = await fetch(`${API_BASE_URL}/api/users/me`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.ok) {
            const data = await res.json();
            setUserId(data.id);
            localStorage.setItem('userId', data.id);
          } else {
            handleLogout();
          }
        } catch {
          handleLogout();
        }
      })();
    }
  }, [token, userId]);

  return (
    <div>
      <button
        onClick={handleLogout}
        style={{ float: 'right', margin: '10px' }}
        disabled={!token}
      >
        Odjavi se
      </button>
      <Suspense fallback={<div>Nalaganje...</div>}>
        {!token ? (
          <UsersModule onLogin={handleLogin} />
        ) : (
          <MagazinesModule userId={userId} token={token} />
        )}
      </Suspense>
    </div>
  );
}
