import React from 'react'
import Question from '../component/result/Question'

function Result() {
  return (
    <div>
        <section className='p-5'>
            <div className='container'>
                <div className='row text-center g-4'>
                    <h1 className='border border-2 border-dark'>Search Result</h1>
                    <div className='col-md-auto'>
                        <div className="container d-flex bd-highlight">
                            <div className="container me-5 p-2 w-100 bd-highlight">
                                <Question/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </div>
  )
}

export default Result