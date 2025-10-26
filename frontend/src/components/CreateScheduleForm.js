import { useState } from 'react';
import {
  Paper,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Box,
  IconButton,
  Divider,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Alert,
} from '@mui/material';
import { 
  ArrowBack as ArrowBackIcon,
  Schedule as ScheduleIcon,
  LocationOn as LocationIcon,
  Group as GroupIcon,
  EventNote as EventNoteIcon,
} from '@mui/icons-material';

function CreateScheduleForm({ onBack, onSubmit }) {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    shiftName: '',
    startTime: '',
    endTime: '',
    location: '',
    locationDetails: '',
    requiredResources: '',
    skillsRequired: [],
    daysOfWeek: [],
    repeatSchedule: false,
    notes: '',
  });

  const steps = [
    { label: 'Basic Info', icon: <ScheduleIcon /> },
    { label: 'Location', icon: <LocationIcon /> },
    { label: 'Resources', icon: <GroupIcon /> },
    { label: 'Schedule', icon: <EventNoteIcon /> },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Basic Schedule Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Shift Name"
                    name="shiftName"
                    value={formData.shiftName}
                    onChange={handleInputChange}
                    required
                    helperText="Give your schedule a descriptive name"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    label="Start Time"
                    name="startTime"
                    type="time"
                    value={formData.startTime}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    fullWidth
                    label="End Time"
                    name="endTime"
                    type="time"
                    value={formData.endTime}
                    onChange={handleInputChange}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );

      case 1:
        return (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Location Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Location Name"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Location Details"
                    name="locationDetails"
                    value={formData.locationDetails}
                    onChange={handleInputChange}
                    helperText="Floor, building, or specific area"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Resource Requirements
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Required Resources"
                    name="requiredResources"
                    type="number"
                    value={formData.requiredResources}
                    onChange={handleInputChange}
                    required
                    inputProps={{ min: 1 }}
                    helperText="Number of people needed for this shift"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Required Skills</FormLabel>
                    <FormGroup>
                      {['Technical', 'Management', 'Customer Service', 'Operations'].map((skill) => (
                        <FormControlLabel
                          key={skill}
                          control={
                            <Checkbox
                              checked={formData.skillsRequired.includes(skill)}
                              onChange={(e) => {
                                const skills = e.target.checked
                                  ? [...formData.skillsRequired, skill]
                                  : formData.skillsRequired.filter(s => s !== skill);
                                handleInputChange({ target: { name: 'skillsRequired', value: skills }});
                              }}
                            />
                          }
                          label={skill}
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom color="primary">
                Schedule Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">Days of Week</FormLabel>
                    <Grid container spacing={1}>
                      {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                        <Grid item xs={6} sm={3} key={day}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={formData.daysOfWeek.includes(day)}
                                onChange={(e) => {
                                  const days = e.target.checked
                                    ? [...formData.daysOfWeek, day]
                                    : formData.daysOfWeek.filter(d => d !== day);
                                  handleInputChange({ target: { name: 'daysOfWeek', value: days }});
                                }}
                              />
                            }
                            label={day}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.repeatSchedule}
                        onChange={(e) => handleInputChange({
                          target: { name: 'repeatSchedule', value: e.target.checked }
                        })}
                      />
                    }
                    label="Repeat this schedule weekly"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Additional Notes"
                    name="notes"
                    multiline
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    helperText="Any special instructions or requirements"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconButton 
          onClick={onBack}
          sx={{ mr: 2 }}
          aria-label="back to schedule list"
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h4">Create New Schedule</Typography>
      </Box>

      <Paper sx={{ p: { xs: 2, md: 3 }, maxWidth: 'lg', mx: 'auto' }}>
        <Stepper activeStep={activeStep} sx={{ mb: 4 }} alternativeLabel>
          {steps.map((step) => (
            <Step key={step.label}>
              <StepLabel StepIconComponent={() => step.icon}>{step.label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={handleSubmit}>
          {getStepContent(activeStep)}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
            <Button
              variant="outlined"
              onClick={activeStep === 0 ? onBack : handleBack}
              size="large"
            >
              {activeStep === 0 ? 'Cancel' : 'Back'}
            </Button>
            <Box>
              {activeStep === steps.length - 1 ? (
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                >
                  Create Schedule
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                  size="large"
                >
                  Next
                </Button>
              )}
            </Box>
          </Box>
        </form>
      </Paper>
    </div>
  );
}

export default CreateScheduleForm;