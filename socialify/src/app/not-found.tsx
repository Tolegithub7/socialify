import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FiArrowRight } from 'react-icons/fi'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/" passHref>
            <Button 
              size="lg" 
              className="group relative overflow-hidden px-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              <span className="relative z-10 flex items-center">
                Return Home 
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" className="w-full sm:w-auto">
              Contact Support
            </Button>
          </Link>
        </div>
        
        <div className="pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Or try searching for what you need
          </p>
        </div>
      </div>
    </div>
  )
}