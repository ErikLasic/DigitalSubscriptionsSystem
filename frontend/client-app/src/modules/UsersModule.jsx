import React, { useState } from 'react';

export default function UsersModule({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState(''); // zdaj pravilno username

  const login = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.token) {
        onLogin(data.token);
      } else {
        alert('Prijava ni uspela: ni tokena');
      }
    } else {
      alert('Prijava ni uspela: napačni podatki');
    }
  };

  const register = async () => {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }) // tu pravilno
    });

    if (res.ok) {
      alert('Registracija uspešna! Sedaj se lahko prijavite.');
      setIsRegistering(false);
      setUsername('');
      setEmail('');
      setPassword('');
    } else {
      alert('Registracija ni uspela.');
    }
  };

  return (
    <div>
      {isRegistering ? (
        <>
          <h2>Registracija</h2>
          <input
            placeholder="Uporabniško ime"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Geslo"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={register}>Registriraj se</button>
          <p>
            Že imate račun?{' '}
            <button onClick={() => setIsRegistering(false)}>Prijavite se</button>
          </p>
        </>
      ) : (
        <>
          <h2>Prijava</h2>
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Geslo"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={login}>Prijava</button>
          <p>
            Nimate računa?{' '}
            <button onClick={() => setIsRegistering(true)}>Registrirajte se</button>
          </p>
        </>
      )}
    </div>
  );
}
