import React, { useState } from 'react';

export default function SubscriptionsModule({ user, token }) {
  const [magazineId, setMagazineId] = useState('');
  const [subscriptions, setSubscriptions] = useState([]);

  const subscribe = async () => {
    const res = await fetch('/api/subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
      },
      body: JSON.stringify({
        userId: user._id,
        magazineId: magazineId
      })
    });
    await res.json();
    alert('Naročnina ustvarjena!');
    fetchSubscriptions();
  };

  const fetchSubscriptions = async () => {
    const res = await fetch(`/api/subscriptions/user/${user._id}`);
    const data = await res.json();
    setSubscriptions(data);
  };

  return (
    <div>
      <h2>Nova naročnina</h2>
      <input placeholder="ID revije" onChange={e => setMagazineId(e.target.value)} />
      <button onClick={subscribe}>Naroči se</button>

      <h2>Moje naročnine</h2>
      <button onClick={fetchSubscriptions}>Osveži seznam</button>
      <ul>
        {subscriptions.map((sub, index) => (
          <li key={index}>Revija ID: {sub.magazineId}</li>
        ))}
      </ul>
    </div>
  );
}
