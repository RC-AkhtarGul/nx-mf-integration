import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout';


const Login = React.lazy(() => import('login/Module'));
const Dashboard = React.lazy(() => import('dashboard/Module'));
const Job = React.lazy(() => import('job/Module'));
const Details = React.lazy(() => import('details/Module'));
const List = React.lazy(() => import('list/Module'));


export function App() {
  const isLoggedIn = !!localStorage.getItem('username');

  return (
    <React.Suspense fallback={'Loading...'}>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        {/* Main layout routes with TopBar */}
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/job" element={<Job />} />
          <Route path="/details" element={<Details />} />
          <Route path="/list" element={<List />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
