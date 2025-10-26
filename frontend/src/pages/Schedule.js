import { useState } from 'react';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Stack,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import CreateScheduleForm from '../components/CreateScheduleForm';

function Schedule() {
  const [showForm, setShowForm] = useState(false);
  const [schedules] = useState([
    { id: 1, shift: 'Morning', time: '6:00 AM - 2:00 PM', resources: 45 },
    { id: 2, shift: 'Afternoon', time: '2:00 PM - 10:00 PM', resources: 38 },
    { id: 3, shift: 'Night', time: '10:00 PM - 6:00 AM', resources: 32 },
  ]);

  const handleCreateSchedule = (formData) => {
    // TODO: Add form submission logic here
    console.log('Schedule created:', formData);
    setShowForm(false);
  };

  if (showForm) {
    return <CreateScheduleForm 
      onBack={() => setShowForm(false)}
      onSubmit={handleCreateSchedule}
    />;
  }

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Schedule Management</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={() => setShowForm(true)}
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

        {/* Dummy weekly overview table */}
        <TableContainer component={Paper} sx={{ mt: 1 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Day</TableCell>
                <TableCell>Morning</TableCell>
                <TableCell>Afternoon</TableCell>
                <TableCell>Night</TableCell>
                <TableCell>Total</TableCell>
                <TableCell align="right">Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { day: 'Mon 27-Oct', morning: 45, afternoon: 38, night: 32 },
                { day: 'Tue 28-Oct', morning: 42, afternoon: 40, night: 30 },
                { day: 'Wed 29-Oct', morning: 44, afternoon: 36, night: 33 },
                { day: 'Thu 30-Oct', morning: 40, afternoon: 38, night: 35 },
                { day: 'Fri 31-Oct', morning: 50, afternoon: 45, night: 28 },
                { day: 'Sat 01-Nov', morning: 30, afternoon: 25, night: 20 },
                { day: 'Sun 02-Nov', morning: 28, afternoon: 22, night: 18 },
              ].map((row) => {
                const total = row.morning + row.afternoon + row.night;
                const gap = total < 100; // arbitrary gap indicator for demo
                return (
                  <TableRow key={row.day} hover>
                    <TableCell>{row.day}</TableCell>
                    <TableCell>{row.morning}</TableCell>
                    <TableCell>{row.afternoon}</TableCell>
                    <TableCell>{row.night}</TableCell>
                    <TableCell>{total}</TableCell>
                    <TableCell align="right">
                      <Stack direction="row" spacing={1} justifyContent="flex-end">
                        {gap ? <Chip label="Coverage Gap" color="error" size="small" /> : <Chip label="OK" color="success" size="small" />}
                        <Button size="small">Details</Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default Schedule;