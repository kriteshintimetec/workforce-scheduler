import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  TextField,
  Button,
  Box,
} from '@mui/material';

function Settings() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              General Settings
            </Typography>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Enable AI-powered scheduling"
                />
                <Typography variant="body2" color="textSecondary">
                  Use AI to optimize shift assignments and resource allocation
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Automatic conflict resolution"
                />
                <Typography variant="body2" color="textSecondary">
                  Automatically resolve scheduling conflicts based on predefined rules
                </Typography>
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Compliance Settings
            </Typography>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <TextField
                  fullWidth
                  label="Maximum Hours Per Week"
                  type="number"
                  defaultValue={40}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Minimum Rest Between Shifts (hours)"
                  type="number"
                  defaultValue={12}
                />
              </CardContent>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Notification Settings
            </Typography>
            <Card>
              <CardContent>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Email notifications"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Push notifications"
                />
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Schedule change alerts"
                />
              </CardContent>
            </Card>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
        >
          Save Changes
        </Button>
        <Button variant="outlined">
          Reset to Defaults
        </Button>
      </Box>
    </div>
  );
}

export default Settings;