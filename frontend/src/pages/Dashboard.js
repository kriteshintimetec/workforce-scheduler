import { Grid, Paper, Typography, Card, CardContent } from '@mui/material';
import {
  PeopleAlt as PeopleIcon,
  Schedule as ScheduleIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

function Dashboard() {
  const stats = [
    {
      title: 'Total Resources',
      value: '150',
      icon: <PeopleIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Active Shifts',
      value: '24',
      icon: <ScheduleIcon sx={{ fontSize: 40, color: 'success.main' }} />,
    },
    {
      title: 'Coverage Gaps',
      value: '3',
      icon: <WarningIcon sx={{ fontSize: 40, color: 'warning.main' }} />,
    },
    {
      title: 'Compliance Rate',
      value: '98%',
      icon: <CheckCircleIcon sx={{ fontSize: 40, color: 'success.main' }} />,
    },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      
      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <Paper elevation={3} sx={{ height: '100%' }}>
              <Card>
                <CardContent sx={{ textAlign: 'center' }}>
                  {stat.icon}
                  <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                    {stat.title}
                  </Typography>
                  <Typography variant="h4" color="primary">
                    {stat.value}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Upcoming Shifts
            </Typography>
            {/* Add shift calendar or list component here */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Resource Allocation
            </Typography>
            {/* Add resource allocation chart component here */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;