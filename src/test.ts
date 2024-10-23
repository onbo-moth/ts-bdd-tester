import { describe, it, expect } from ".";

describe( "Floating point operations.", () => {
  it( "should add 0.1 and 0.2 to 0.3", ()=>{
    expect( ()=>{ return 0.1 + 0.2 } ).toEqual( 0.3 )
  })

  it( "should fail due to precision loss", ()=>{
    expect( ()=>{ return 1e16 + 1 } ).toEqual( 1e16 )
  })

  it( "should show difference between positive and negative zero", ()=>{
    expect( () => 0 ).toEqual( -0 )
  })
})