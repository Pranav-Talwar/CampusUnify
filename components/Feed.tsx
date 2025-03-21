// Feed.tsx
"use client";
import React, { useState, useEffect } from "react";
import Input from "./Input";
import Post from "./Post";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import PostSkeletons from "./loading"; // Import the skeleton component

export default function Feed() {
  const [showInput, setShowInput] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const postsData: any[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.timestamp) {
          postsData.push({ id: doc.id, ...data });
        }
      });
      setPosts(postsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleCreatePostClick = () => {
    setShowInput((prev) => !prev);
  };

  return (
    <div>
      <div className="text-white flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50 bg-gray-950 border-b border-gray-900">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <button
          onClick={handleCreatePostClick}
          className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 ml-auto"
        >
          Create Post
        </button>
      </div>

      {showInput && <Input />}

      {/* Show skeleton loading when loading */}
      {loading ? (
        <PostSkeletons />
      ) : posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <div className="text-white text-center py-4">
          No posts available. Be the first to create one!
        </div>
      )}
    </div>
  );
}