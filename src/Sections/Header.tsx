import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

export const Header = () => {
  return (
    <div>   <div>
      <Navbar />
      <div className="flex flex-col gap-4 items-center md:flex-row md:justify-center  text-center md:text-start  py-[130px]">
        <div>
          <h4 className="small-text">Digital Media Agency</h4>
          <h2 className="head-text">
            We Boost{" "}
            <span className="gradientText">
              Your <br /> Website{" "}
            </span>{" "}
            Traffic
          </h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vel
            voluptate reprehenderit quia animi, tempore eos dolorem obcaecati
            minima laboriosam!
          </p>
          <Button title="Free Quote" fill={true} />
        </div>
        <div>
          <img
            src="../assets/images/slider-dec-v3.png"
            alt="hero"
            className="w-full object-contain max-w-[593px"
          />
        </div>
      </div>
    </div></div>
  )
}
