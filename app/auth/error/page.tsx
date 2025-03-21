// app/auth/error/page.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthError() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/login')
    }, 3000)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Authentication Error</h1>
        <p className="text-gray-400">
          Redirecting to login page...
        </p>
      </div>
    </div>
  )
}