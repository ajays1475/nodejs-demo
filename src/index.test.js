import {expect} from 'chai'; //Importing expect to use for assertion from chai assertion library
import jsdom from 'jsdom'; //Importing jsdom for testing dom elements
import fs from 'fs'; // Importing fs(filesystem) from nodejs to work with file system

//Test Case
describe("Our first test",()=>{
  it("should pass",()=>{
    //Assertion
    expect(true).to.equal(true);
  });
});

describe("index.html",()=>{
  it("should say hello",(done)=>{  //reading html file to hold into memory with index variable
    const index=fs.readFileSync('./src/index.html','utf-8'); //reading html file to hold into memory with index variable
    jsdom.env(index,function(err,window){ //Setting jsdom environment to work with virtual DOM in memory using index variable;window here represent a browser window
      const h1=window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      done(); //In case of async function call we need to pass done param to tell mocha that we have done evaluating test and it should again refresh dom
      window.close();
    });
  });
});
