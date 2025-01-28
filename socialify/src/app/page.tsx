import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import ModeToggle from '@/components/ui/Modetoggle'
export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button> SignIn </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle />
      <Button variant={"secondary"}> Click Me </Button>
    </div>
  );
}
