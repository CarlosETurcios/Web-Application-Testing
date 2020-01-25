import React from 'react'




// return (
//     x + y

// )





function Dashboard(props) {
    console.log(props)
    return (

        <div className="container">
            <h1>BaseBalls</h1>
            <section className="buttons">
                <div className="balls-buttons">
                    <button onClick={() => { props.addBalls() }}>Balls</button>
                </div>
                <div className="strike-button">
                    <button onClick={() => { props.addStrikes() }} >Stikes</button></div>
            </section>
            <section className="hit">
                <button onClick={() => { props.addHit() }}>Hit</button>

            </section>
            <section>
                <button onClick={() => { props.addFoul() }}>foul</button>
            </section>
        </div>


    )
}
export const add = (x, y) => x + y;
export default Dashboard;