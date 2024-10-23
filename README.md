# ts-bdd-tester

A simple BDD tester for checking function output.

Syntax:

```js
describe( "Some operations", () => {
  it( "should equal 0.3 :clueless:", () => {
    expect( () => { return 0.1 + 0.2 }).toEqual( 0.3 )
  } )

  it( "loooong operation", () => {
    // includes time in ms
    expect( () => { return someBigLoop() }, true ).toEqual( 1 )
  } )

  it( "should throw an error", () => {
    expect( () => { throw new Error() } ).toThrow( )
  } )

  it( "should throw a specific error", () => {
    // expect the function to throw a specific error
    expect( () => {
      if( Math.random() < 0.5 ) throw new TypeError()
      else throw new ReferenceError()
    } ).toThrow( TypeError )
  } )
} )
```