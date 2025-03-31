import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

async function Navbar() {
  try {
    const user = await currentUser();
    if (user) {
      try {
        await syncUser(); // POST
      } catch (syncError) {
        console.error("Sync failed but continuing:", syncError);
      }
    }

    return (
      <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
                Socially
              </Link>
            </div>
            <DesktopNavbar />
            <MobileNavbar />
          </div>
        </div>
      </nav>
    );
  } catch (error) {
    console.error("Navbar error:", error);
    // Fallback UI without user-dependent features
    return (
      <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-primary font-mono tracking-wider">
                Socially
              </Link>
            </div>
            {/* Basic navigation when auth fails */}
            <div className="flex gap-4">
              <Link href="/">Home</Link>
              <Link href="/sign-in">Sign In</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;