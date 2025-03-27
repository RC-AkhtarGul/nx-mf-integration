import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

export function App() {
  const username = localStorage.getItem('username');



  return (
    <Container sx={{ mt: 10 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {username || 'Guest'}!
      </Typography>


      {/* Dashboard cards */}
      <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
        Dashboard Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">1,024</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Jobs Posted</Typography>
              <Typography variant="h4">87</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Pending Reviews</Typography>
              <Typography variant="h4">14</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
