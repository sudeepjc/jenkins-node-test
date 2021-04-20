const request = require('supertest');
let server;


describe('Integration testing',() => {
    beforeEach(()=>{
        server = require('../../index');
    })

    afterEach( ()=> {
        server.close();
    })

    describe('POST /api/sum',() => {
        
        it ('should return the sum of given numbers', async ()=>{
            
            const res = await request(server).post('/api/sum').send({numbers: [1,2,3]});
            expect(res.text).toEqual(expect.stringContaining('6'));
            expect(res.status).toBe(200);
        });      
    })
});
