import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode='modal'>
          <button className='bg-slate-500 border border-spacing-2'> SignIn </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
