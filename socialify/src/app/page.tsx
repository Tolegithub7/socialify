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
          <button className='bg-slate500'></button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
