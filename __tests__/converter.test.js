const converter  = require('../js/converter'); 
const dictionary = require("../js/dictionary");

describe('converter', () => {
      test('should translate HAI to JavaScript', async () => {
        const lolcode = 'HAI';
        const expectedJs = dictionary['HAI'];
        const result = await converter(lolcode);
        expect(result).toEqual(expectedJs);
      });
      test('should translate CAN HAS to JavaScript', async () => {
        const lolcode = 'CAN HAS';
        const expectedJs = dictionary['CAN HAS'];
        const result = await converter(lolcode);
        expect(result).toEqual(expectedJs);
      });
      
      test('should translate VISIBLE to JavaScript', async () => {
        const lolcode = 'VISIBLE "Hello, world!"';
        const expectedJs = dictionary['VISIBLE'](lolcode);
        const result = await converter(lolcode);
        expect(result).toEqual(expectedJs);
      });
      
      test('should translate PLZ OPEN FILE to JavaScript', async () => {
        const lolcode = 'PLZ OPEN FILE "data.txt"';
        const expectedJs = dictionary['PLZ OPEN FILE'](lolcode);
        const result = await converter(lolcode);
        expect(result).toEqual(expectedJs);
      });
    
      test('should translate AWSUM THX to JavaScript', async () => {
        const lolcode = 'AWSUM THX';
        const expectedJs = dictionary['AWSUM THX'];
        const result = await converter(lolcode);
        expect(result).toEqual(expectedJs);
      });
    
      test('should translate O NOES to JavaScript', async () => {
        const lolcode = 'O NOES';
        const expectedJs = dictionary['O NOES'];
        const result = await converter(lolcode);
        expect(result).toEqual(expectedJs);
      });
    
      test('should translate INVISIBLE to JavaScript', async () => {
        const lolcode = 'INVISIBLE "Error message"';
        const expectedJs = dictionary['INVISIBLE'](lolcode);
        const result = await converter(lolcode);
        expect(result).toEqual(expectedJs);
      });
      
      test('should translate KTHXBYE to JavaScript', async () => {
        const lolcode = 'KTHXBYE';
        const expectedJs = dictionary['KTHXBYE'];
        const result = await converter(lolcode);
        expect(result).toEqual(expectedJs);
      });      
})