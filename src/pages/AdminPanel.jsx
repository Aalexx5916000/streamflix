import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export default function AdminPanel() {
  const [form, setForm] = useState({ title: "", year: "", category: "", videoUrl: "", coverUrl: "" });
  const [media, setMedia] = useState([]);

  const ref = collection(db, "media");

  const fetchMedia = async () => {
    const snap = await getDocs(ref);
    setMedia(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => { fetchMedia(); }, []);

  const addMedia = async () => {
    await addDoc(ref, { ...form, createdAt: new Date(), active: true });
    setForm({ title: "", year: "", category: "", videoUrl: "", coverUrl: "" });
    fetchMedia();
  };

  const remove = async id => {
    await deleteDoc(doc(db, "media", id));
    fetchMedia();
  };

  return (
    <div className="p-6">
      <h2>Admin Panel</h2>
      {Object.keys(form).map(k => (
        <input key={k} placeholder={k} value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })} />
      ))}
      <button onClick={addMedia}>Ajouter</button>

      <ul>
        {media.map(m => (
          <li key={m.id}>
            {m.title} ({m.year}) <button onClick={() => remove(m.id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}