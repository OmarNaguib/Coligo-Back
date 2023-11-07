const express = require("express");
const cors = require("cors");

const router = express.Router();

router.use(cors());

const createAnnouncement = require("./controllers/announcements/createAnnouncement");
const deleteAnnouncement = require("./controllers/announcements/deleteAnnouncement");
const updateAnnouncement = require("./controllers/announcements/updateAnnouncement");
const getAnnouncement = require("./controllers/announcements/getAnnouncement");
const getAnnouncements = require("./controllers/announcements/getAnnouncements");

const createQuiz = require("./controllers/quizzes/createQuiz");
const deleteQuiz = require("./controllers/quizzes/deleteQuiz");
const updateQuiz = require("./controllers/quizzes/updateQuiz");
const getQuiz = require("./controllers/quizzes/getQuiz");
const getQuizs = require("./controllers/quizzes/getQuizzes");

router.get("/announcements/", getAnnouncements);
router.get("/announcements/:announcementId", getAnnouncement);
router.post("/announcements/", createAnnouncement);
router.put("/announcements/:announcementId", updateAnnouncement);
router.delete("/announcements/:announcementId", deleteAnnouncement);

router.get("/quizzes", getQuizs);
router.get("/quizzes/:quizId", getQuiz);
router.post("/quizzes", createQuiz);
router.put("/quizzes/:quizId", updateQuiz);
router.delete("/quizzes/:quizId", deleteQuiz);

module.exports = router;
