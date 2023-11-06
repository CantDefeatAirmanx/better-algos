/**
 * find competition winner team. Winner is being determined by team that scores most
 * points throughout all competitions. In results array each result index corresponds with
 * competition index. 0 value in results array means Guests Team (first index in competitons value).
 * 1 value in results array means Home Team (second index in competitions value). All teams play equal
 * matches with each other.
 *
 * You can assume there will be no draws and input
 * is valid (min 2 teams and 1 competitions, result.length === competitions.length)
 *
 * ex:
 *
 * competitions: [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]]
 * results: [0, 0, 1]
 *
 * winner: "Python".
 *
 * Explanation: "Python" has 2 points, "HTML" has 0 points, "C#" has 1 point.
 *
 */

export const findTournamentWinner = (competitions: [string, string][], results: number[]): string => {
    const dict = new Map<string, number>();
    let result: string = '';
    let currentMax = 0;

    for (let index = 0; index < competitions.length; index++) {
        const competition = competitions[index];
        const resultItem = results[index];

        const winnerTeam = competition[Math.abs(resultItem - 1)];
        if (!dict.has(winnerTeam)) {
            dict.set(winnerTeam, 1);
        } else {
            dict.set(winnerTeam, dict.get(winnerTeam)! + 1);
        }

        const teamWins = dict.get(winnerTeam)!;
        if (teamWins > currentMax) {
            currentMax = teamWins;
            result = winnerTeam;
        }
    }

    return result;
};
