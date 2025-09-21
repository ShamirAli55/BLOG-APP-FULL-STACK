import { SignIn } from "@clerk/clerk-react"
const LoginPage = () => {
  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-80px)]">
      <SignIn signUpUrl="/signup"/>
    </div>
  )
}

export default LoginPage