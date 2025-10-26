import { useState } from 'react';
import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  TextField,
  InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

function Resources() {
  const [resources] = useState([
    { id: 1, name: 'John Doe', role: 'Senior Developer', availability: 'Full Time' },
    { id: 2, name: 'Jane Smith', role: 'Project Manager', availability: 'Full Time' },
    { id: 3, name: 'Mike Johnson', role: 'Developer', availability: 'Part Time' },
  ]);

  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4">Resource Management</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Resource
        </Button>
      </Box>

      <Paper sx={{ p: 2, mb: 3 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search resources..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Paper>

      <Grid container spacing={3}>
        {resources.map((resource) => (
          <Grid item xs={12} md={4} key={resource.id}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PersonIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                  <div>
                    <Typography variant="h6">{resource.name}</Typography>
                    <Typography color="textSecondary">{resource.role}</Typography>
                  </div>
                </Box>
                <Typography color="primary" gutterBottom>
                  Availability: {resource.availability}
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
                    View Schedule
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Resources;