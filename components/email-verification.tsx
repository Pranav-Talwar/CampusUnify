// // components/email-verification.tsx
// 'use client'
// import { useUser } from '@clerk/nextjs'
// import { useEffect } from 'react'

// export function EmailVerificationGuard() {
//   const { user } = useUser()

//   useEffect(() => {
//     if (user) {
//       const primaryEmail = user.primaryEmailAddress
//       if (!primaryEmail?.emailAddress.endsWith('@rdpolytech.ca')) {
//         user.delete()
//           .then(() => window.location.reload())
//           .catch(console.error)
//       }
//     }
//   }, [user])

//   return null
// }