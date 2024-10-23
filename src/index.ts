import exp from "constants"

class Test {
  private func: () => any

  constructor( func: () => any ){
    this.func = func
  }

  toEqual( value: any ): void {
    let result: any 

    let equals: boolean

    try {
      result = this.func() 

      equals = result === value
    } catch ( error: any ) {
      throw new Error( `Function returned an error: ${ error }` )
    }

    if( !equals ) throw new Error( `Expected ${ value }, but got ${ result }` )

    // :3
  }

  toThrow( expectedError?: ErrorConstructor ) {
    let result: any

    let thrown = false

    try {
      result = this.func()
    } catch( error: any ) {
      thrown = true
      
      if( expectedError ){
        if( !( error instanceof Error ) ) 
          throw new Error( `Expected error to be thrown, got ${ error }.` )

        if( error.name !== expectedError.name ) 
          throw new Error( 
            `Expected ${ expectedError.name } to be thrown, ` +
            `got ${ error.name }.`
          )
      }  
    } 

    if( thrown ) return

    if( expectedError ) 
      throw new Error( 
        `Expected ${ expectedError.name } to be thrown, ` +
        `got ${ result }.`
      )
    else {
      throw new Error( `Expected an error to be thrown, got ${ result }.` )
    }
  }
}

const separator = "|"

export function expect( func: () => any ): Test {
  return new Test( func )
}

export function it( description: string, func: () => any, includeTime: boolean = false ): void {
  try {
    const start = performance.now()
    func()
    const end = performance.now()

    const duration = ( end - start ).toFixed( 3 )

    console.log( [ "PASS", includeTime ? duration : null, separator, description ].join( " " ) )
  } catch ( error ) {
    console.error( [ "FAIL", separator, description ].join( " " ) )
    console.error( error )
  }
}

export function describe( name: string, func: () => any ): void {
  console.log( [ "--", name ].join( " " ) )
  console.group()

  try {
    func()
  } catch ( error ) {
    console.error( error )
  }

  console.groupEnd()
}