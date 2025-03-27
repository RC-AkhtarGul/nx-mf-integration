import { create } from 'zustand';

interface AuthState {
  username: string;
  isLoggedIn: boolean;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  username: '',
  isLoggedIn: false,
  login: (username) => set({ username, isLoggedIn: true }),
  logout: () => set({ username: '', isLoggedIn: false }),
}));
