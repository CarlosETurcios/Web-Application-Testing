import React from 'react'


function Display(props) {

    return (
        <div className="container">

            <section className="display">

            </section>

            <span> Balls: {props.balls}</span>

            <section className="display">
                <span>Strikes: {props.strikes}</span>
            </section>
            <section>
                {/* <span>Fouls:{props.foul}</span> */}
            </section>
        </div>

    )




}
export default Display;