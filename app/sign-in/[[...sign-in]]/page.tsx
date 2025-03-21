import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className=" min-h-screen flex justify-center items-center px-50">
      <div >
        <SignIn  />
      </div> 
    </div>
  )
}
 