import { createElement, useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import useSound from 'use-sound'

const c = c => p => children => createElement(c, p, ...(
  Array.isArray(children) ? children : [children]
))
const div = c ('div')
const button = c ('button')
const img = c ('img')

const randomNInInterval = min => max =>
  Math.floor(Math.random() * (max - min + 1) + min)

const asPercent = n => `${n}%`
const nFrom0 = randomNInInterval (0)
const left = _ => asPercent (nFrom0 (60))
const top = _ => asPercent (nFrom0 (90))

const useTimer = ({duration = 1000} = {}) => {
  const [active, setActive] = useState (false)
  const [toRestart, setToRestart] = useState (false)
  useEffect (() => {
    if (!toRestart) return
    setToRestart (false)
    setActive (true)
    const toRun = () => {
      setActive (false)
    }
    const interval = setTimeout(toRun, duration)
    return 
  }, [duration, toRestart, setActive])
  const start = _ => setToRestart (true)
  return [active, start]
}

export default function Home() {
  const [play] = useSound ('/bruh.mp3')
  const [timerActive, startTimer] = useTimer ({duration: 1719 / 3})
  const hitTheBruh = _ => {
    console.log('bruh')
    play ()
    startTimer ()
  }
  const onClick = hitTheBruh
  return div ({onClick, style: {display: 'grid', placeItems: 'center', height: '100%'}}) ([
    button ({onClick}) ('bruh'),
    timerActive ? img ({ 
      style: { position: 'absolute', left: left (), top: top () },
      src: '/bruh.gif',
    }) (null) : null,
  ])
}
