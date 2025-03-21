import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"; 
export default function Post() {
  return (
    <div>
      <div className="px-4 sm:px-0 py-5"> 
        <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4 sm:px-6">
          {/* Post Header */}
          <div className="flex items-center p-4 ">
            <Avatar className="w-12 h-12 border-2 border-purple-500">
              <AvatarImage src="https://firebasestorage.googleapis.com/v0/b/polyconnect-7.firebasestorage.app/o/posts%2F440496477_811454167671957_6132926356836638788_n.jpg?alt=media&token=d9d46c45-a014-4eae-9d30-9898b104208e" />
              <AvatarFallback>JN</AvatarFallback>
            </Avatar>
            <div className="ml-3 flex-1">
              <h3 className="font-semibold">Pranav Talwar</h3>
              <p className="text-xs text-gray-500">2h ago</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
              </svg>
            </button>
          </div>

    {/* Post Content */}
    <div className="p-4">
        <p className="mb-4 border-t pt-4">
          Excited to take the next step in my academic journey! 🚀<br/>
          Looking forward to learning, growing, and collaborating with like-minded individuals. Let’s build something great together! #CollegeBound #FutureInnovator
        </p>
        
        {/* Image Container */}
        <div className="rounded-lg overflow-hidden mb-4 h-64 bg-gray-800 flex items-center justify-center">
          <img
            src="https://www.w3schools.com/w3images/ny.jpg"
            className="w-full h-full object-cover"
            alt="College campus"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex space-x-4">
            <button className="flex items-center hover:text-blue-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              <span className="ml-1">248</span>
            </button>
            <button className="flex items-center hover:text-green-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              <span className="ml-1">45</span>
            </button>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="px-4 sm:px-0 py-5"> 
  <div className="max-w-2xl mx-auto bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300  p-4 sm:px-6">
    {/* Post Header */}
    <div className="flex items-center p-4 ">
            <Avatar className="w-12 h-12 border-2 border-purple-500">
              <AvatarImage src="https://tailwindcss.com/img/jonathan.jpg" />
              <AvatarFallback>JN</AvatarFallback>
            </Avatar>
            <div className="ml-3 flex-1">
              <h3 className="font-semibold">Pranav Talwar</h3>
              <p className="text-xs text-gray-500">2h ago</p>
            </div>
      <button className="text-gray-400 hover:text-gray-600">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"/>
        </svg>
      </button>
    </div>

    {/* Post Content */}
    <div className="p-4 ">
      <p className="mb-4  ">
        How to be effective at working remotely? 
        Check out these pro tips ↓ #remotework #productivity
      </p>
      
      {/* Image Container with Fixed Height */}
   

      {/* Action Buttons */}
      <div className="flex items-center justify-between   pt-4">
        <div className="flex space-x-4">
          <button className="flex items-center hover:text-blue-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span className="ml-1">248</span>
          </button>
          <button className="flex items-center hover:text-green-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            <span className="ml-1">45</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
