const express = require('express');
const router = express.Router();
const consultationController = require('../controllers/consultationController');

router.get('/consultations', consultationController.getAllConsultations);
router.post('/consultations', consultationController.createConsultation);
router.put('/consultations/:id', consultationController.updateConsultation);
router.delete('/consultations/:id', consultationController.deleteConsultation);

module.exports = router;
