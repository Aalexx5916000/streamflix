import React, { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Home() {
  const [media, setMedia] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "media"));
      setMedia(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchData();
  }, []);

  const filtered = media.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6">
      <input placeholder="Recherche..." onChange={e => setSearch(e.target.value)} className="mb-4" />
      <div className="grid grid-cols-2 gap-4">
        {filtered.map(item => (
          <div key={item.id}>
            <img src={item.coverUrl} alt={item.title} />
            <h3>{item.title}</h3>
            <Link to={`/watch/${item.id}`}><button>Regarder</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
}