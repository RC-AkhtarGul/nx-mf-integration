import { Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function App() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin'){
      localStorage.setItem('username', username); // ✅ Save to localStorage
      navigate('/dashboard');
    }
    else alert('Invalid username');
  };
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Username" margin="normal" onChange={e => setUsername(e.target.value)} />
        <Button fullWidth variant="contained" type="submit">Login</Button>
      </form>
    </Container>
  );

}

export default App;
