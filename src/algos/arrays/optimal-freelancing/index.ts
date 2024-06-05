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
    if (jobs.length === 0) {
        return 0;
    }

    if (jobs.length === 1) {
        return jobs[0].payment;
    }

    const jobsCopy = [...jobs];

    const maxDeadline = jobs.reduce(
        (acc, cur) => (cur.deadline > acc ? cur.deadline : acc),
        jobs[0].deadline
    );
    const theoriticalMaxSlots = maxDeadline;

    if (theoriticalMaxSlots >= jobs.length) {
        return jobs.reduce((acc, curr) => acc + curr.payment, 0);
    }

    const sortedByProfitDesc = jobsCopy.sort((f, s) => s.payment - f.payment);
    const slots = new Array<Job>(theoriticalMaxSlots);

    outer: for (let index = 0; index < sortedByProfitDesc.length; index++) {
        const job = sortedByProfitDesc[index];
        const position = job.deadline - 1;

        if (slots[position] === undefined) {
            slots[position] = job;
            continue;
        }

        for (let j = position - 1; j >= 0; j--) {
            if (slots[j] === undefined) {
                slots[j] = job;
                continue outer;
            }
        }
    }

    return slots.reduce((acc, job) => acc + job.payment, 0);
};
