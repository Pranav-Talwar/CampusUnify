// components/Login.tsx
'use client'

import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        onClick={() => signIn('google')}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
    </div>
  )
}