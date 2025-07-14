import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";

export default function Watch() {
  const { id } = useParams();
  const [media, setMedia] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      const docSnap = await getDoc(doc(db, "media", id));
      if (docSnap.exists()) setMedia(docSnap.data());
    };
    fetchMedia();
  }, [id]);

  if (!media) return <p>Chargement...</p>;

  return (
    <div className="p-6">
      <h2>{media.title}</h2>
      <iframe src={media.videoUrl} allow="autoplay" allowFullScreen width="100%" height="500px" />
    </div>
  );
}