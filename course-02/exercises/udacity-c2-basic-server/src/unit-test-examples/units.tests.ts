import { add, divide, concat} from './units';

import { expect } from 'chai';
import 'mocha';

describe('add function', () => {

  it('should add two and two', () => {
    expect(add(2,2)).to.equal(4);
  });

  it('should add -2 and two', () => {
    expect(add(-2,2)).to.equal(0);
  });

});

describe('divide', () => {

  it('should divide 6 by 3', () => {
    expect(divide(6,3)).to.equal(2);
  });

  it('should divide 5 and 2', () => {
    expect(divide(5,2)).to.equal(2.5);
  });

  it('should throw an error if div by zero', () => {
    expect(() => {divide(5,0)}).to.throw('div by 0')
  });

});

// @TODO try creating a new describe block for the "concat" method
// it should contain an it block for each it statement in the units.ts @TODO.
// don't forget to import the method ;)
describe('concat', () => {

  it('concat strings', () => {
    expect(concat('abc','cde')).to.equal('abccde')
  })

  it('blank string', ()=>{
    expect(() => { concat('abc', '') }).to.throw('cannot concat empty string')
  })

  it('null string', ()=>{
    expect(() => { concat('abc', null) }).to.throw('cannot concat empty string')
  })

  it('undefined string', ()=>{
    expect(() => { concat(undefined, 'abc') }).to.throw('cannot concat empty string')
  })
});