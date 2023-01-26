export {}
const findExtremes = require('../components/controllers/mapCont/mapHelper')


describe('findExtremes', () => {
    describe('findExtremes', () => {
        it('returns the correct extremes for valid input', () => {
            const input = [[56.876345,30.3445], [52,47], [56.87634, 31],[50,29]];
            const expectedOutput = [[56.876345,47], [50,29]];
            expect(findExtremes(input)).toEqual(expectedOutput);
        });
    
        it('returns the correct extremes for input of length 1', () => {
            const input = [[56.876345,30.3445]];
            const expectedOutput = [[56.876345,30.3445], [56.876345,30.3445]];
            expect(findExtremes(input)).toEqual(expectedOutput);
        });
    
        it('returns the correct extremes for input of length 0', () => {
            const input: [] = [];
            const expectedOutput: [] = [];
            expect(findExtremes(input)).toEqual(expectedOutput);
        });
    
        it('returns the correct extremes for input containing negative numbers', () => {
            const input = [[-56.876345,-30.3445], [-52,-47], [-56.87634, -31],[-50,-29]];
            const expectedOutput = [[-50,-29], [-56.876345,-47]];
            expect(findExtremes(input)).toEqual(expectedOutput);
        });
    
        it('throws an empty array for input of invalid data type', () => {
            const input = "invalid input";
            const expectedOutput: [] = [];
            expect(findExtremes(input)).toEqual(expectedOutput);
        });
    });
    

})