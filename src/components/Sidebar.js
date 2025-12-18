import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
const isMenuOpen = useSelector(store => store.app.isMenuOpen)
//Early return pattern
if(!isMenuOpen) return null;

  return (
    <div className='w-50 p-5 shadow-lg'>
      <ul>
      <li>Home</li>
      <li>Shorts</li>
      </ul>
      <h1 className='font-bold pt-3'>Subscriptions</h1>
      <ul>
        <li>Akshay Saini</li>
        <li>Bhajan Marg</li>
        <li>BhaktiPath</li>
        <li>take U Forward</li>
      </ul>
      <h1 className='font-bold pt-3'>You</h1>
      <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
        <li>Your Videos</li>
      </ul>
      <h1 className='font-bold pt-3'>Explore</h1>
      <ul>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>Sports</li>
      </ul>
      <h1 className='font-bold pt-3'>More From YouTube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>
      <ul className='pt-3'>
        <li>Settings</li>
        <li>Report History</li>
        <li>Help</li>
        <li>Send feedback</li>
      </ul>
    </div>
  )
}

export default Sidebar