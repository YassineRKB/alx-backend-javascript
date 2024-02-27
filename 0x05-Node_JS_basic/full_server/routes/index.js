const express = require('express');
const router = express.Router();

import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

router.get('/', (req, res) => AppController.Home(req, res));
router.get('/students', (req, res) => StudentsController.getStudents(req, res));
router.get('/students/:major', (req, res) => StudentsController.getStudentsMajor(req, res));

export default router;
module.exports = router;
