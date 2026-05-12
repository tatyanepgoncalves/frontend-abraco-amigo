'use client'

import { Loader2, LogOut } from 'lucide-react'
import useLogout from '@/hooks/use-logout'
import { Button } from '../ui/button'

export default function LogoutButton() {
  const { isLoggingOut, handleLogout } = useLogout()

  return (
    <Button
      className="w-full justify-start p-0"
      disabled={isLoggingOut}
      onClick={handleLogout}
      variant="ghost"
    >
      {isLoggingOut ? (
        <>
          <span>Saindo...</span>
          <Loader2 />
        </>
      ) : (
        <>
          <span>Sair</span>
          <LogOut />
        </>
      )}
    </Button>
  )
}
