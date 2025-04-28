import  { createContext, useContext, useState, ReactNode, useEffect } from 'react'

export type UserRole = 'Admin' | 'Dentist' | 'Receptionist' | 'Patient'

export interface User {
  name: string;
  email: string;
  mobile: string;
  password: string;
  role: string;
}
interface UserContextType {
  user: User | null
  login: (email: string, password: string, role: UserRole) => Promise<void>
  logout: () => void
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(
    localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null
  );

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = async (email: string, password: string, role: UserRole) => {
    // Retrieve all users from local storage
    const storedUsers = localStorage.getItem('users');
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];

    const foundUser = users.find(
      (u) => u.email === email && u.password === password && u.role === role
    );

    if (!foundUser) {
      throw new Error('Invalid email, password, or role');
    }

    setUser(foundUser);
    localStorage.setItem('user', JSON.stringify(foundUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}