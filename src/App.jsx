import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import fotoPerfi from './assets/156675537_424895472140345_8438540111358913358_n.jpg'
function App() {
  
  const [isFollowing, setFollowing] = useState(false)
  
  const handleClick = () => {
    setFollowing(!isFollowing)
  }

  const className = (isFollowing) => {
    if (isFollowing) {
      return 'profile-isFollowing'
    }
    return 'profile-follow'
  }

  return (
    <div className='profile-container'>
      <img className='profile-img' src={fotoPerfi} alt=""/>
      <div className="profile-info">
        <div className="profile-info1">
          <h2 className="profile-userName">katherine.ncg</h2>
          <button className={className(isFollowing)} onClick={handleClick}>{isFollowing ? 'Siguiendo' : 'Seguir'}</button>
        </div>
        <div className="profile-info2">
          <div className="profile-stats">
            <ul>
              <li><b>16</b> publicaciones</li>
              <li><b>493</b> seguidores</li>
              <li><b>570</b> seguidos</li>
            </ul>
          </div>
          <div className="profile-presentation">
            <p><b>Katherine 🌷</b></p>
            <p>Economia Empresarial 📚</p>
            <p>Venezolana</p>
            <p>@eclat.care 🦋</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
