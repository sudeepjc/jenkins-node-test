const sumNumber = require('../../sum');

describe('sumNumbers',() => {

    it ('Functionality : Sum of array of Single number', ()=>{
        const actualNumber = sumNumber([1]);
        expect(actualNumber).toBe(1);
    })
    
    it ('Functionality : Sum of array of Two numbers', ()=>{
        const actualNumber = sumNumber([1,2]);
        expect(actualNumber).toBe(3);
    })
    
    it ('Functionality : Sum of array of numbers with negative numbers', ()=>{
        const actualNumber = sumNumber([1,-2]);
        expect(actualNumber).toBe(-1);
    })
    
    it ('Functionality : Sum of empty array', ()=>{
        const actualNumber = sumNumber([]);
        expect(actualNumber).toBe(0);
    })
});

