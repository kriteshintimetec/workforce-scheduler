const router = require('express').Router();
const Schedule = require('../models/schedule.model');
const { auth, checkRole } = require('../middleware/auth.middleware');

// Get all schedules
router.get('/', auth, async (req, res) => {
  try {
    const schedules = await Schedule.find()
      .populate('resources')
      .populate('createdBy', 'username');
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching schedules', error: error.message });
  }
});

// Create new schedule
router.post('/', auth, checkRole(['admin', 'manager']), async (req, res) => {
  try {
    const schedule = new Schedule({
      ...req.body,
      createdBy: req.user._id
    });
    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ message: 'Error creating schedule', error: error.message });
  }
});

// Update schedule
router.put('/:id', auth, checkRole(['admin', 'manager']), async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(
      req.params.id,
      { ...req.body, updatedAt: Date.now() },
      { new: true }
    ).populate('resources');
    
    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    res.json(schedule);
  } catch (error) {
    res.status(500).json({ message: 'Error updating schedule', error: error.message });
  }
});

// Delete schedule
router.delete('/:id', auth, checkRole(['admin']), async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndDelete(req.params.id);
    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    res.json({ message: 'Schedule deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting schedule', error: error.message });
  }
});

// Get schedules by date range
router.get('/range', auth, async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const schedules = await Schedule.find({
      date: {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      }
    }).populate('resources');
    res.json(schedules);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching schedules', error: error.message });
  }
});

module.exports = router;