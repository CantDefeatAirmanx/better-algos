import { findTournamentWinner } from '.';

describe('findTournamentWinner tests', () => {
    const competitions: [string, string][] = [
        ['1', '2'],
        ['2', '1'],
        ['2', '3'],
        ['3', '2'],
        ['1', '3'],
        ['3', '1'],
    ];

    test('should return single winner', () => {
        expect(findTournamentWinner(competitions, [1, 0, 1, 0, 1, 0])).toBe('1');
        expect(findTournamentWinner(competitions, [0, 1, 1, 0, 1, 1])).toBe('2');
        expect(findTournamentWinner(competitions, [0, 0, 0, 1, 0, 0])).toBe('3');
    });

    // test('should return return multiple winners on draw', () => {
    //     expect(findTournamentWinner(competitions, [1, 0, 1, 0, 1, 0]).sort()).toEqual(['1', '2', '3'k]);
    //     expect(findTournamentWinner(competitions, [0, 1, 1, 0, 1, 1]).sort()).toEqual(['1', '2', '3']);
    //     expect(findTournamentWinner(competitions, [0, 0, 0, 1, 0, 0]).sort()).toEqual(['1', '2', '3']);
    // });
});
