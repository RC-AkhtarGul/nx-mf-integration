import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Layout = () => {

    const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('username');
    navigate('/login');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            NX Shell
          </Typography>
          <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
          <Button color="inherit" component={Link} to="/job">Job</Button>
          <Button color="inherit" component={Link} to="/details">Details</Button>
          <Button color="inherit" component={Link} to="/list">List</Button>
          <Button  color="inherit" onClick={handleLogout}>
        Logout
      </Button>
        </Toolbar>
      </AppBar>
      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </>
  );
};
