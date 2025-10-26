import {
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  Button,
  Stack,
} from '@mui/material';
import {
  PeopleAlt as PeopleIcon,
  Schedule as ScheduleIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';

function Dashboard() {
  const upcomingShifts = [
    { id: 1, date: '2025-10-27', shift: 'Morning', time: '06:00 - 14:00', resources: 45, location: 'Plant A', status: 'Confirmed' },
    { id: 2, date: '2025-10-27', shift: 'Afternoon', time: '14:00 - 22:00', resources: 38, location: 'Plant B', status: 'Pending' },
    { id: 3, date: '2025-10-27', shift: 'Night', time: '22:00 - 06:00', resources: 32, location: 'Plant A', status: 'Confirmed' },
    { id: 4, date: '2025-10-28', shift: 'Morning', time: '06:00 - 14:00', resources: 40, location: 'Plant C', status: 'Gap' },
    { id: 5, date: '2025-10-28', shift: 'Afternoon', time: '14:00 - 22:00', resources: 42, location: 'Plant B', status: 'Confirmed' },
    { id: 6, date: '2025-10-28', shift: 'Night', time: '22:00 - 06:00', resources: 35, location: 'Plant A', status: 'Pending' },
    { id: 7, date: '2025-10-29', shift: 'Morning', time: '06:00 - 14:00', resources: 44, location: 'Plant C', status: 'Confirmed' },
    { id: 8, date: '2025-10-29', shift: 'Afternoon', time: '14:00 - 22:00', resources: 36, location: 'Plant A', status: 'Gap' },
  ];

  const resourceAllocation = [
    { id: 1, name: 'John Doe', role: 'Senior Developer', assignedShift: 'Morning', hoursThisWeek: 36, availability: 'Full Time', skills: ['React', 'Node.js'] },
    { id: 2, name: 'Jane Smith', role: 'Project Manager', assignedShift: 'Afternoon', hoursThisWeek: 40, availability: 'Full Time', skills: ['Agile', 'Scrum'] },
    { id: 3, name: 'Mike Johnson', role: 'Developer', assignedShift: 'Night', hoursThisWeek: 20, availability: 'Part Time', skills: ['JavaScript', 'Python'] },
    { id: 4, name: 'Sara Lee', role: 'QA Engineer', assignedShift: 'Morning', hoursThisWeek: 28, availability: 'Part Time', skills: ['Testing', 'Automation'] },
    { id: 5, name: 'David Wilson', role: 'DevOps Engineer', assignedShift: 'Afternoon', hoursThisWeek: 40, availability: 'Full Time', skills: ['AWS', 'Docker'] },
    { id: 6, name: 'Emma Brown', role: 'UI Designer', assignedShift: 'Morning', hoursThisWeek: 32, availability: 'Full Time', skills: ['UI/UX', 'Figma'] },
    { id: 7, name: 'Chris Taylor', role: 'Backend Developer', assignedShift: 'Night', hoursThisWeek: 40, availability: 'Full Time', skills: ['Java', 'Spring'] },
    { id: 8, name: 'Linda Chen', role: 'Data Analyst', assignedShift: 'Afternoon', hoursThisWeek: 24, availability: 'Part Time', skills: ['SQL', 'Python'] },
  ];

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
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Shift</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>Resources</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {upcomingShifts.map((shift) => (
                    <TableRow key={shift.id} hover>
                      <TableCell>{shift.date}</TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={1} alignItems="center">
                          <Avatar sx={{ bgcolor: 'primary.main', width: 24, height: 24, fontSize: '0.75rem' }}>
                            {shift.shift.charAt(0)}
                          </Avatar>
                          <Typography variant="body2">{shift.shift}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell>{shift.time}</TableCell>
                      <TableCell>{shift.resources}</TableCell>
                      <TableCell>{shift.location}</TableCell>
                      <TableCell>
                        {shift.status === 'Confirmed' && (
                          <Chip label="Confirmed" color="success" size="small" />
                        )}
                        {shift.status === 'Pending' && (
                          <Chip label="Pending" color="warning" size="small" />
                        )}
                        {shift.status === 'Gap' && (
                          <Chip label="Gap" color="error" size="small" />
                        )}
                      </TableCell>
                      <TableCell align="right">
                        <Button size="small" startIcon={<VisibilityIcon />}>
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Resource Allocation
            </Typography>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Resource</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Assigned Shift</TableCell>
                    <TableCell>Hours</TableCell>
                    <TableCell>Skills</TableCell>
                    <TableCell align="right">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {resourceAllocation.map((resource) => (
                    <TableRow key={resource.id} hover>
                      <TableCell>
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar sx={{ bgcolor: 'secondary.main', width: 32, height: 32 }}>
                            {resource.name.split(' ').map(n => n[0]).join('')}
                          </Avatar>
                          <div>
                            <Typography variant="body2">{resource.name}</Typography>
                            <Typography variant="caption" color="text.secondary">
                              {resource.role}
                            </Typography>
                          </div>
                        </Stack>
                      </TableCell>
                      <TableCell>{resource.role}</TableCell>
                      <TableCell>{resource.assignedShift}</TableCell>
                      <TableCell>
                        <Typography variant="body2">{resource.hoursThisWeek}h</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {resource.availability}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Stack direction="row" spacing={0.5}>
                          {resource.skills.map((skill, index) => (
                            <Chip key={index} label={skill} size="small" variant="outlined" />
                          ))}
                        </Stack>
                      </TableCell>
                      <TableCell align="right">
                        <Button size="small" variant="outlined">
                          Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;