import { useEffect, useState } from 'react';
import { Card, CardContent,CardActionArea, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
export function App() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Job-like Users
      </Typography>
      <Grid container spacing={2}>
        {users.map((user, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
            <CardActionArea component={Link} to={`/details/${user.id}`}>
              <CardContent>
                <Typography variant="h6" component="div">
                  {user.name}
                </Typography>
                <Typography color="text.secondary">
                  {user.company?.name || 'Unknown Company'}
                </Typography>
                <Typography variant="body2">
                  {user.company?.catchPhrase || 'No catchphrase available'}
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
