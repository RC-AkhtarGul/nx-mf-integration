import { create } from 'zustand';

interface AuthState {
  username: string;
  isLoggedIn: boolean;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set: (arg0: { username: any; isLoggedIn: boolean; }) => any) => ({
  username: '',
  isLoggedIn: false,
  login: (username: any) => set({ username, isLoggedIn: true }),
  logout: () => set({ username: '', isLoggedIn: false }),
}));
