import React from 'react'
import vg from "../assests/2.webp"
const Home = () => {
  return (
    <>
    <div className='home'>
        <main>
            <h1>HighIcon</h1>
            <p>Solution to all your Problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
            <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children..
            </p>
        </div>
    </div>

    </>
  )
}

export default Home