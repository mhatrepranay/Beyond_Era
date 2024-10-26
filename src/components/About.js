import React, { useState } from 'react'

export default function About(props) {

    // const[mystyle, setMyStyle]=useState(
    //     {
    //         color: 'black',
    //         backgroundColor:'white'
    //     }
    // )

    let mystyle = {
        color: props.mode === 'dark' ? 'white' : 'rgb(1 62 120)',
        backgroundColor: props.mode === 'dark' ? 'rgb(1 62 120)' : 'white',
        border: '2px solid',
        borderColor: props.mode === 'dark' ? 'white' : 'black'

    }





    return (
        <div style={{ height: '80vh' }}>
            <div classNameName='container' style={mystyle} >
                <h1 classNameName='my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Analyze your Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                You can convert your text to lowercase or uppercase,and if there has extra spaces in your text you can remove it,

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Free to Use</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                This is app is completly free to use
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Developer</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                PRANAY MHATRE
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
