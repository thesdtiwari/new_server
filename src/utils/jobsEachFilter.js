module.exports = (job) => {
    return {
        _id: job._id,
        active: job.active,
        jobDescription: job.jobDescription,
        recruitmentType: job.recruitmentType,
        companyName: job.companyName,
        package: job.package,
        isElig: job.isElig
    }
};