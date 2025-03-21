"use client";
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { formatDistanceToNow } from 'date-fns';

interface PostProps {
  id: string;
  username: string;
  userImage: string;
  text: string;
  timestamp?: {
    seconds: number;
    nanoseconds: number;
  };
  image?: string;
  likes: number;
  comments: number;
}

export default function Post({ post }: { post: PostProps }) {
  // Add a safe timestamp check
  const postDate = post.timestamp?.seconds 
    ? new Date(post.timestamp.seconds * 1000)
    : new Date();

  return (
    <div className="px-4 sm:px-0 py-5">
      <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 sm:px-6">
        {/* Post Header */}
        <div className="flex items-center p-4">
          <Avatar className="w-12 h-12 border-2 border-purple-500">
            <AvatarImage src={post.userImage} />
            <AvatarFallback>{post.username[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-3 flex-1">
            <h3 className="font-semibold">{post.username}</h3>
            <p className="text-xs text-gray-500">
              {formatDistanceToNow(postDate)} ago
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            {/* ... existing menu button ... */}
          </button>
        </div>

        {/* Post Content */}
        <div className="p-4">
          <p className={`mb-4 ${post.image ? 'border-t' : ''} pt-4`}>
            {post.text}</p>
          
          {/* Image Container - Only shown if image exists */}
          {post.image && (
            <div className="rounded-lg overflow-hidden mb-4 h-64 bg-gray-950 flex items-center justify-center">
              <img
                src={post.image}
                className=" h-full object-cover"
                alt="Post content"
              />
            </div>
          )}

<div className={`flex items-center justify-between ${post.image ? 'border-t' : ''} pt-4`}>
<div className="flex space-x-4">
          <button className="flex items-center hover:text-blue-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span className="ml-1">11</span>
          </button>
          <button className="flex items-center hover:text-green-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <span className="ml-1">5</span>
          </button>
      </div>
        </div>
      </div>
    </div></div>
  );
}