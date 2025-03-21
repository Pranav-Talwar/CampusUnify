// app/page.tsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Feed from "@/components/Feed";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <main>
      <Feed />
    </main>
  );
}
// import React from 'react'
// import Feed from '../../components/Feed'
// import { getProviders, getSession, useSession } from "next-auth/react";
// import Login from '@/components/Login';



//   export default function Home({ trendingResults, followResults, providers }) {
//     const { data: session } = useSession();
//     // const [isOpen, setIsOpen] = useRecoilState(modalState);
  
//     if (!session) return <Login providers={providers} />;
//   return (
//     <div>
//       <Feed></Feed>
//     </div>
//   )
// }
// export async function getServerSideProps(context) {
//   const trendingResults = await fetch("https://jsonkeeper.com/b/NKEV").then(
//     (res) => res.json()
//   );
//   const followResults = await fetch("https://jsonkeeper.com/b/WWMJ").then(
//     (res) => res.json()
//   );
//   const providers = await getProviders();
//   // const session = await getSession(context);

//   return {
//     props: {
//       trendingResults,
//       followResults,
//       providers,
//       // session,
//     },
//   };
// }











// "use client";
// import React, { useState, useEffect } from "react";
// import Loading from "./loading";
// import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
// import { redirectToSignIn } from '@clerk/nextjs/server'

// export default function Home() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [content, setContent] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setContent(
//         <div className="p-4">
//           <h1 className="text-2xl font-bold text-gray-50">Your Content</h1>
//           <p className="text-gray-400 mt-2">Page content loaded successfully</p>
//         </div>
//       );
//       setIsLoading(false);
//     }, 3000); // Reduced delay

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       <SignedIn>{isLoading ? <Loading /> : content}</SignedIn>

//       <SignedOut>
//       <div className="flex flex-col items-center justify-center min-h-screen px-40 text-center space-y-6">
//   {/* Playful GIF */}
//   <img
//     src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHpibG96bWFtOGs3ZWJ2eTJ4amdxYnhmNGQ2MmFrcDR5ZmxmMnd4NSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZcKtvbJ3LnJbVvW9gI/giphy.gif"
//     alt="Funny Sign-In GIF"
//     className="w-48 h-48 rounded-lg shadow-lg"
//   />

//   {/* Message */}
//   <p className="text-xl font-semibold text-gray-600">
//     Oops! You must sign in to enter. 🚀
//   </p>

//   {/* Animated Sign-In Button */}
//   <SignInButton className="px-6 py-3 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110 active:scale-95" />
// </div>

//       </SignedOut>
//     </div>
//   );
// }
