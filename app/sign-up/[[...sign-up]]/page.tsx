// app/sign-up/[[...sign-up]]/page.tsx
'use client'
import { SignUp, useSignUp } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

export default function SignUpPage() {
  const { isLoaded, signUp } = useSignUp()
  const [email, setEmail] = useState('')
  const [verificationCode, setVerificationCode] = useState('')

  // Automatically append domain if missing
  useEffect(() => {
    if (email && !email.endsWith('@rdpolytech.ca')) {
      setEmail(prev => `${prev.split('@')[0]}@rdpolytech.ca`)
    }
  }, [email])

  // Handle domain-restricted verification
  const initiateSignUp = async () => {
    if (!isLoaded || !email.endsWith('@rdpolytech.ca')) return
    
    try {
      await signUp.create({
        emailAddress: email,
      })
      
      // Prepare email verification
      await signUp.prepareEmailAddressVerification({
        strategy: 'email_code',
      })
      
    } catch (err) {
      console.error('Error:', err)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="username@rdpolytech.ca"
        className="mb-4 p-2 border rounded"
      />
      
      <button 
        onClick={initiateSignUp}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Send Verification Code
      </button>

      {signUp?.emailAddress && (
        <div className="mt-4">
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter verification code"
            className="p-2 border rounded"
          />
          <button
            onClick={async () => {
              try {
                await signUp.attemptEmailAddressVerification({
                  code: verificationCode,
                })
                // Redirect on successful verification
                window.location.href = '/dashboard'
              } catch (err) {
                console.error('Error:', err)
              }
            }}
            className="ml-2 bg-green-500 text-white p-2 rounded"
          >
            Verify Code
          </button>
        </div>
      )}
    </div>
  )
}