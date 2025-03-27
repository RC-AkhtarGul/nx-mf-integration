import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Card, CardContent } from '@mui/material';

export function App() {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Failed to load user:', err);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Details
      </Typography>

      {user ? (
        <Card>
          <CardContent>
            <Typography variant="h6">{user.name}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone: {user.phone}</Typography>
            <Typography>Company: {user.company?.name}</Typography>
            <Typography>Website: {user.website}</Typography>
            <Typography>
              Address: {user.address?.street}, {user.address?.city}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography color="error">User not found</Typography>
      )}
    </Container>
  );
}

export default App;
