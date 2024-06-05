/**
 *  Task: calculate maximum profit freelancer could have. We have an array of jobs as input.
 *  Each job represented by the object with deadline and profit. Each job takes 1 day to complete and
 *  freelancer can do only one job at a time.
 */

export type Job = {
    deadline: number;
    payment: number;
};

export const calculateMaximumProfit = (jobs: Job[]) => {
    let result = 0;

    const sortedJobsByDeadline = [...jobs].sort((f, s) => f.deadline - s.deadline);

    for (let index = 0; index < sortedJobsByDeadline.length; index++) {
        const job = sortedJobsByDeadline[index];
        const jobsWithSameDeadline = [job];

        for (let j = index + 1; j < sortedJobsByDeadline.length; j++) {
            const nextJob = sortedJobsByDeadline[j];
            if (nextJob.deadline !== job.deadline) {
                break;
            }
            jobsWithSameDeadline.push(nextJob);
        }

        if (jobsWithSameDeadline.length === 1) {
            result += job.payment;
            continue;
        }

        const jobWithMaximumPayment = jobsWithSameDeadline.reduce(
            (acc, testJob) => (testJob.payment > acc.payment ? testJob : acc),
            job
        );
        result += jobWithMaximumPayment.payment;
        index += jobsWithSameDeadline.length - 1;
    }

    return result;
};
