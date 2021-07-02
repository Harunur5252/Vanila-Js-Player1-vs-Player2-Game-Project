import GameData from "./gameData"
const data = new GameData()
function UI(){
    this.selectors=function(){
        const p1ScoreDisplayElm    = document.querySelector('#p1Score')
        const p2ScoreDisplayElm    = document.querySelector('#p2Score')
        const winScoreDisplayElm   = document.querySelector('p span')
        const inputScoreDisplayElm = document.querySelector('#input')
        const p1BtnElm             = document.querySelector('#p1Btn')
        const p2BtnElm             = document.querySelector('#p2Btn')
        const resetBtnElm          = document.querySelector('#reBtn')
        return {
            p1ScoreDisplayElm,
            p2ScoreDisplayElm,
            winScoreDisplayElm,
            inputScoreDisplayElm,
            p1BtnElm,
            p2BtnElm,
            resetBtnElm
        }
    }
    this.getWinnerP1=function(){
        const{ p1ScoreDisplayElm,
            p1BtnElm,
            p2BtnElm,
          }=this.selectors()
            p1ScoreDisplayElm.classList.add('winner')
            p1BtnElm.setAttribute('disabled','disabled')
            p2BtnElm.setAttribute('disabled','disabled')
    }
    this.getWinnerP2=function(){
        const{
            p2ScoreDisplayElm,
            p1BtnElm,
            p2BtnElm,
          }=this.selectors()
          p2ScoreDisplayElm.classList.add('winner')
          p1BtnElm.setAttribute('disabled','disabled')
          p2BtnElm.setAttribute('disabled','disabled')
    }
    this.removeBtnScore=function(){
        const{ p1ScoreDisplayElm,
            p2ScoreDisplayElm,
            p1BtnElm,
            p2BtnElm,
          }=this.selectors()
        p1BtnElm.removeAttribute('disabled')
        p2BtnElm.removeAttribute('disabled')
        p1ScoreDisplayElm.classList.remove('winner')
        p2ScoreDisplayElm.classList.remove('winner')
    }
    this.getWinScoreReset=function(){

        const{ p1ScoreDisplayElm,
            p2ScoreDisplayElm,
          }=this.selectors()
        data.p1AndP2ScoreData()
        p1ScoreDisplayElm.textContent=0
        p2ScoreDisplayElm.textContent=0
        this.removeBtnScore()
        data.gameOverFalse()
    }
    this.resetGame=function(){
        this.getWinScoreReset()
    }
}

const ui = new UI()
UI.getRandom=function(){
    const {winScoreDisplayElm}=ui.selectors()
    winScoreDisplayElm.textContent=GameData.winScoreData
}

UI.init=function(){
    const{ p1ScoreDisplayElm,
        p2ScoreDisplayElm,
        inputScoreDisplayElm,
        winScoreDisplayElm,
        p1BtnElm,
        p2BtnElm,
        resetBtnElm
      }=ui.selectors()
      p1BtnElm.addEventListener('click',()=>{
        if(!data.gameOver){
            data.p1ScoreData++
            data.getWinner(data.p1ScoreData,GameData.winScoreData)
            p1ScoreDisplayElm.textContent=data.p1ScoreData
        }
    })
    p2BtnElm.addEventListener('click',()=>{
        if(!data.gameOver){
            data.p2ScoreData++
            data.getWinner(data.p2ScoreData,GameData.winScoreData)
            p2ScoreDisplayElm.textContent=data.p2ScoreData
        }  
    })
    inputScoreDisplayElm.addEventListener('change',()=>{
        const convertNumber = Number(inputScoreDisplayElm.value)
        winScoreDisplayElm.textContent=convertNumber
        GameData.winScoreData=convertNumber
        inputScoreDisplayElm.value=''
        ui.getWinScoreReset()
    })
    resetBtnElm.addEventListener('click',()=>ui.resetGame())
}

export default UI


