const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);

const expect = chai.expect;
const assert = chai.assert;

describe("Api Testing with chai and mocha", () => {
  it("get all books unit test", (done) => {
    chai.request("http://localhost:3000")
      .get("/books")
      .end((error, response) => {
        expect(response.status).to.be.equal(200);
        expect(response.body).to.be.an("array");
        // expect(response.body).to.be.an("object");
        response.body.forEach((book) => {
          expect(book).to.have.all.keys("_id", "author", "__v","title");
          expect(book).to.have.property("title").that.is.a("string");
          expect(book).to.have.property("author").that.is.a("string");
        });
        done();
      });
  });

  it("get single book with id", (done) => {
    const bookId =  "64c8bee900580c55dab018d1";
    chai.request('http://localhost:3000')
    .get(`/book/${bookId}`)
    .end((error,response) => {
        expect(response.status).to.be.equal(200);
        // expect(response.body).to.be.an("array");
        console.log("Expected keys:", ["_id", "author", "__v", "title"]);
        console.log("Actual keys:",(response.body));
        response.body.forEach((book) => {
          expect(book).to.have.all.keys("_id", "author", "__v","title");
        });
        done();
    })
  })
  
  it("post book api test", (done)=>{
    const newBook = { title: 'Test To-Do', author:"test" };
    chai.request("http://localhost:3000")
    .post("/book")
    .send(newBook)
    .end((error,response) => {
      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.an('object');
      done();
    })
  })

  it("update book api test", (done)=>{
    const updatedBook = { title: 'Updated To-Do', author:"new" };
    const bookId =  "64c8bee900580c55dab018d1";
    chai.request("http://localhost:3000")
    .patch(`/book/${bookId}`)
    .end((error,response) => {
      expect(response.status).to.be.equal(201);
      expect(response.body).to.be.an('object');
      expect(response.body.message).to.equal('book is updated');
      done();
    })
  })

  it("delete book api test", (done)=>{
    const bookId =  "64c8bcdeb6d7810a7ccda34f";
    chai.request("http://localhost:3000")
    .delete(`/book/${bookId}`)
    .end((error,response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.an('object');
      expect(response.body.message).to.equal('book is deleted');
      
      done();
    })
  })

});



// // Requiring module
// const assert = require('assert');

// // We can group similar tests inside a describe block
// describe("Simple Calculations", () => {
// before(() => {
// 	console.log( "This part executes once before all tests" );
// });

// after(() => {
// 	console.log( "This part executes once after all tests" );
// });
	
// // We can add nested blocks for different tests
// describe( "Test1", () => {
// 	beforeEach(() => {
// 	console.log( "executes before every test" );
// 	});
	
// 	it("Is returning 5 when adding 2 + 3", () => {
// 	assert.equal(2 + 3, 5);
// 	});

// 	it("Is returning 6 when multiplying 2 * 3", () => {
// 	assert.equal(2*3, 6);
// 	});
// });

// describe("Test2", () => {
// 	beforeEach(() => {
// 	console.log( "executes before every test" );
// 	});
	
// 	it("Is returning 4 when adding 2 + 3", () => {
// 	assert.equal(2 + 3, 4);
// 	});

// 	it("Is returning 8 when multiplying 2 * 4", () => {
// 	assert.equal(2*4, 8);
// 	});
// });
// });




