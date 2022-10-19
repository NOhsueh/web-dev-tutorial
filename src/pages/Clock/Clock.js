import React, { useEffect, useRef } from 'react'
import './Clock.css'
import Navigation from '../../components/Header/Navigation'

export default function App() {
  const hEl = useRef()
  const mEl = useRef()
  const sEl = useRef()

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


  return (
    <div>
      <Navigation/>
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
          <div className="diallines"></div>
          <div className="diallines" style={{ transform: 'rotate(6deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(12deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(18deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(24deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(30deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(36deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(42deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(48deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(54deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(60deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(66deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(72deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(78deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(84deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(90deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(96deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(102deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(108deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(114deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(120deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(126deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(132deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(138deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(144deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(150deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(156deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(162deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(168deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(174deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(180deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(186deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(192deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(198deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(204deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(210deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(216deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(222deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(228deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(234deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(240deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(246deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(252deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(258deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(264deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(270deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(276deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(282deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(288deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(294deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(300deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(306deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(312deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(318deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(324deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(330deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(336deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(342deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(348deg)' }}></div>
          <div className="diallines" style={{ transform: 'rotate(354deg)' }}></div>
        </div>
      </div>
    </div>
  )
}
