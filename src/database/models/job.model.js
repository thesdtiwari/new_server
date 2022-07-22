const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobPostingSchema = new Schema({
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },

  companyName: {
    type: String,
    required: true,
  },

  companyWebsite: {
    type: String,
  },

  aboutCompany: {
    type: String,
  },

  qualification: {
    type: String,
  },

  expectedSkills: {
    type: String,
  },

  // SDE / Analyst / Consultant
  jobRole: {
    type: String,
  },

  yourRole:{
    type: String,
  },
  
  // Description of the job
  jobDescription: {
    type: String,
  },

  // Intern/Full
  recruitmentType: {
    type: String,
  },

  duration: {
    type: String,
  },

  //location of job
  postingLocation: {
    type: String,
  },

  active: {
    type: Boolean,
    default: true,
  },

  onlyForFemales: {
    type: Boolean,
    default: false,
  },

  minCgpa: {
    type: Number,
    default: 0,
  },

  maxBacklogsAllowed: {
    type: Number,
    default: 100,
  },

  // passout in year 2023, 2024, 2025..
  batchesAllowed: [
    {
      type: Number,
    },
  ],

  //Package in LPA
  package: {
    type: Number,
  },

  packageBreakup: {
    type: String,
  },

  evaluationPattern: {
    type: String,
  },

  // registration deadline
  deadlineDate: {
    type: Date,
    required: true,
  },

  jobId: {
    type: String,
    required: true,
    unique: true,
  },

  // Array of Students applied
  //! Populate with details of students
  //? Lookup how to post references
  studentsApplied: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],

  // Array of students accepted for job
  studentsAccepted: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],

  easyApply: {
    type: Boolean,
    default: false,
  },
});

const jobModel = mongoose.model("JobOffer", jobPostingSchema);
// Collection named JobOffer[s]

module.exports = jobModel;
