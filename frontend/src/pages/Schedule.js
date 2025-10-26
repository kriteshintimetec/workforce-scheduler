import { useState } from 'react';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

function Schedule() {
  const [schedules] = useState([
    { id: 1, shift: 'Morning', time: '6:00 AM - 2:00 PM', resources: 45 },
    { id: 2, shift: 'Afternoon', time: '2:00 PM - 10:00 PM', resources: 38 },
    { id: 3, shift: 'Night', time: '10:00 PM - 6:00 AM', resources: 32 },
  ]);

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Schedule Management</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Create New Schedule
        </Button>
      </Box>

      <Grid container spacing={3}>
        {schedules.map((schedule) => (
          <Grid item xs={12} md={4} key={schedule.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {schedule.shift} Shift
                </Typography>
                <Typography color="textSecondary">
                  Time: {schedule.time}
                </Typography>
                <Typography color="primary">
                  Resources Allocated: {schedule.resources}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                  >
                    View Details
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ mt: 3, p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Weekly Schedule Overview
        </Typography>
        {/* Add weekly calendar component here */}
      </Paper>
    </div>
  );
}

export default Schedule;