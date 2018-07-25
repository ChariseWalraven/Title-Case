import { capitalize, titleCase } from '../titleCase'

describe('Title case', () => {
  test('has a function that capitalizes a string', () => {
    expect(capitalize('seventeen')).toEqual('Seventeen')
  });
  test('returns a string', () => {
    expect(typeof titleCase('hello')).toBe('string')
  })
  test('returns the correct string', () => {
    expect(titleCase('you are so pretty')).toBe('You Are So Pretty')
  })
  test('leaves the little words alone', () => {
    expect(titleCase('the spring of \'97')).toBe('The Spring of \'97')
  })
  test('leaves a word like "iTunes" alone', () => {
    expect(titleCase('i love iTunes')).toBe('I Love iTunes')
  })
  test('skips over any words with line dots', () => {
    expect('example.com').toBe('example.com')
  })
  test('deals with odd cases', () => {
    expect("AT&T").toBe("AT&T")
    expect("Q&A").toBe("Q&A")
  })
  test("the first and last word of the title are always capitalized", () => {
    expect("Nothing to be afraid of").toBe("Nothing to Be Afraid Of")
  })
  test("small words after colons are capitalized", () => {
    
  })
})