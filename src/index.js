import UI from './modules/ui'
import GameData from './modules/gameData'
import './styles/style.css'
GameData.winScoreData=Math.ceil(Math.random()*5)
UI.getRandom()
UI.init()
