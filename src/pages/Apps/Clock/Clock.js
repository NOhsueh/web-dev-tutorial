import React, { useEffect, useRef } from 'react'
import './Clock.css'
import Navigation from '../../../components/Header/Navigation'

export default function Clock() {
  const hEl = useRef()
  const mEl = useRef()
  const sEl = useRef()

  useEffect(() => {
    document.title = '时钟';
    return () => document.title = 'Nohsueh';
  }, []);

  useEffect(() => {
    clock()
    const timer = setInterval(() => clock(), 1000)
    return () => clearInterval(timer)
  }, []);

  function clock() {
    const d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),

      hDeg = h * 30 + m * (360 / 720),
      mDeg = m * 6 + s * (360 / 3600),
      sDeg = s * 6

    hEl.current.style.transform = "rotate(" + hDeg + "deg)"
    mEl.current.style.transform = "rotate(" + mDeg + "deg)"
    sEl.current.style.transform = "rotate(" + sDeg + "deg)"
  }

  const diallineStyles = [];
  for (let index = 0; index < 60; index++) {
    diallineStyles.push({ transform: 'rotate(' + 6 * index + 'deg)' });
  }

  let diallines = diallineStyles.map((style, index) => {
    return (
      <div className="diallines" style={style} key={index}></div>
    )
  })

  return (
    <div>
      <Navigation />
      <div className="clock">
        <div className="dot"></div>
        <div>
          <div className="hour-hand" ref={hEl}></div>
          <div className="minute-hand" ref={mEl}></div>
          <div className="second-hand" ref={sEl}></div>
        </div>
        <div>
          <span className="h3">3</span>
          <span className="h6">6</span>
          <span className="h9">9</span>
          <span className="h12">12</span>
        </div>
        <div>
          {diallines}
        </div>
      </div>
    </div>
  )
}
