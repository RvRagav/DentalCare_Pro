import  { createContext, useContext, useState, ReactNode } from 'react'

export type UserRole = 'Admin' | 'Dentist' | 'Receptionist' | 'Patient'

interface User {
  id: string
  name: string
  email: string
  role: UserRole
}

interface UserContextType {
  user: User | null
  login: (email: string, password: string, role: UserRole) => Promise<void>
  logout: () => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  const login = async (email: string, password: string, role: UserRole) => {
    // Mock login - replace with actual API call
    const mockUser: User = {
      id: '1',
      name: 'Ragavan',
      email: email,
      role: role,
    }
    setUser(mockUser)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}