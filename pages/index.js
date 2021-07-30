import { createElement } from 'react'
import styles from '../styles/Home.module.css'
import useSound from 'use-sound'

const c = c => p => children => createElement(c, p, ...(
  Array.isArray(children) ? children : [children]
))
const div = c ('div')
const button = c ('button')

export default function Home() {
  const [play] = useSound ('/bruh.mp3')
  const hitTheBruh = _ => {
    console.log('bruh')
    play ()
  }
  const onClick = hitTheBruh
  return div ({onClick, style: {display: 'grid', placeItems: 'center', height: '100%'}}) ([
    button ({onClick}) ('bruh')
  ])
}
