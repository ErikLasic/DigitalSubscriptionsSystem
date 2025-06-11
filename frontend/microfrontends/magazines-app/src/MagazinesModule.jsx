import React, { useEffect, useState, useCallback } from 'react';

const API_BASE_URL = 'http://localhost:8000';

export default function MagazinesModule({ userId, token }) {
  const [magazines, setMagazines] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  const fetchMagazines = async () => {
    const res = await fetch(`${API_BASE_URL}/api/allMagazines`);
    if (res.ok) {
      const data = await res.json();
      setMagazines(data);
    } else {
      alert('Napaka pri nalaganju revij');
    }
  };

  const fetchSubscriptions = useCallback(async () => {
    if (!userId) return;

    const res = await fetch(`${API_BASE_URL}/api/subscriptions/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (res.ok) {
      const data = await res.json();
      setSubscriptions(data);
    } else {
      alert('Napaka pri nalaganju naročnin');
    }
  }, [userId, token]);

  const subscribe = async (magazineId) => {
    if (!userId) {
      alert('Uporabnik ni prijavljen');
      return;
    }

    const res = await fetch(`${API_BASE_URL}/api/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ userId, magazineId })
    });

    if (res.ok) {
      alert('Naročnina uspešno ustvarjena!');
      fetchSubscriptions();
    } else {
      alert('Napaka pri ustvarjanju naročnine');
    }
  };

  const unsubscribe = async (subscriptionId) => {
    const res = await fetch(`${API_BASE_URL}/api/subscriptions/${subscriptionId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (res.ok) {
      alert('Naročnina uspešno odstranjena');
      fetchSubscriptions();
    } else {
      alert('Napaka pri odstranitvi naročnine');
    }
  };

  useEffect(() => {
    fetchMagazines();
  }, []);

  useEffect(() => {
    if (userId) {
      fetchSubscriptions();
    } else {
      setSubscriptions([]); // Če ni userId, pobriši naročnine
    }
  }, [userId, fetchSubscriptions]);

  return (
    <div>
      <h2>Vse revije</h2>
      {magazines.map(m => (
        <div key={m.id}>
          <strong>{m.naziv}</strong>: {m.opis}
          <button onClick={() => subscribe(m.id)}>Naroči se</button>
        </div>
      ))}

      <h2>Moje naročnine</h2>
      {subscriptions.length === 0 ? (
        <p>Trenutno brez naročnin.</p>
      ) : (
        subscriptions.map(s => {
          const magazine = magazines.find(m => m.id === s.magazineId);

          return (
            <div key={s.id} style={{ marginBottom: '1em' }}>
              {magazine ? (
                <>
                  <strong>{magazine.naziv}</strong>: {magazine.opis}
                </>
              ) : (
                <>Revija ID: {s.magazineId}</>
              )}
              <button onClick={() => unsubscribe(s.id)} style={{ marginLeft: '1em' }}>
                Odjavi se
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
