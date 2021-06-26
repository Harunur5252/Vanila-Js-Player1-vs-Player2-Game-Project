//All data source code here
const data = {
    p1ScoreData : 0,
    p2ScoreData : 0,
    gameOver:false,
    getWinner(scoreData,winScoreData){
        if(scoreData===winScoreData){
            if(this.p1ScoreData===winScoreData){
               UI.getWinnerP1()
            }else{
               UI.getWinnerP2()
            }
            this.gameOverFalse();
        }
    },
    p1AndP2ScoreData(){
       this.p1ScoreData=0
       this.p2ScoreData=0
    },
    gameOverFalse(){
        this.gameOver=false
    }
}

//All user interface source code here
const UI={
    selectors(){
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
     },
     getRandom(){
        const {winScoreDisplayElm}=this.selectors()
        winScoreDisplayElm.textContent=data.winScoreData
    },
    getWinnerP1(){
        const{ p1ScoreDisplayElm,
            p1BtnElm,
            p2BtnElm,
          }=this.selectors()
            p1ScoreDisplayElm.classList.add('winner')
            p1BtnElm.setAttribute('disabled','disabled')
            p2BtnElm.setAttribute('disabled','disabled')
    },
    getWinnerP2(){
        const{
            p2ScoreDisplayElm,
            p1BtnElm,
            p2BtnElm,
          }=this.selectors()
          p2ScoreDisplayElm.classList.add('winner')
          p1BtnElm.setAttribute('disabled','disabled')
          p2BtnElm.setAttribute('disabled','disabled')
    },
    removeBtnScore(){
        const{ p1ScoreDisplayElm,
            p2ScoreDisplayElm,
            p1BtnElm,
            p2BtnElm,
          }=this.selectors()
        p1BtnElm.removeAttribute('disabled')
        p2BtnElm.removeAttribute('disabled')
        p1ScoreDisplayElm.classList.remove('winner')
        p2ScoreDisplayElm.classList.remove('winner')
    },
    getWinScoreReset(){
        const{ p1ScoreDisplayElm,
            p2ScoreDisplayElm,
          }=this.selectors()
        data.p1AndP2ScoreData()
        p1ScoreDisplayElm.textContent=0
        p2ScoreDisplayElm.textContent=0
        this.removeBtnScore()
        data.gameOverFalse()
    },
     resetGame(){
        this.getWinScoreReset()
    },
    init(){
        const{ p1ScoreDisplayElm,
            p2ScoreDisplayElm,
            inputScoreDisplayElm,
            winScoreDisplayElm,
            p1BtnElm,
            p2BtnElm,
            resetBtnElm
          }=this.selectors()
          p1BtnElm.addEventListener('click',()=>{
            if(!data.gameOver){
                data.p1ScoreData++
                data.getWinner(data.p1ScoreData,data.winScoreData)
                p1ScoreDisplayElm.textContent=data.p1ScoreData
            }
        })
        p2BtnElm.addEventListener('click',()=>{
            if(!data.gameOver){
                data.p2ScoreData++
                data.getWinner(data.p2ScoreData,data.winScoreData)
                p2ScoreDisplayElm.textContent=data.p2ScoreData
            }  
        })
        inputScoreDisplayElm.addEventListener('change',()=>{
            const convertNumber = Number(inputScoreDisplayElm.value)
            winScoreDisplayElm.textContent=convertNumber
            data.winScoreData=convertNumber
            console.log(data.winScoreData)
            inputScoreDisplayElm.value=''
            this.getWinScoreReset()
        })
        resetBtnElm.addEventListener('click',()=>this.resetGame())
    },
}

data.winScoreData = Math.ceil(Math.random()*5)
UI.getRandom()
UI.init()



// (function(){
//     const playerGame = {
//          p1ScoreData : 0,
//          p2ScoreData : 0,
//          gameOver:false,
//          selectors(){
//             const p1ScoreDisplayElm    = document.querySelector('#p1Score')
//             const p2ScoreDisplayElm    = document.querySelector('#p2Score')
//             const winScoreDisplayElm   = document.querySelector('p span')
//             const inputScoreDisplayElm = document.querySelector('#input')
//             const p1BtnElm             = document.querySelector('#p1Btn')
//             const p2BtnElm             = document.querySelector('#p2Btn')
//             const resetBtnElm          = document.querySelector('#reBtn')
//             return {
//                 p1ScoreDisplayElm,
//                 p2ScoreDisplayElm,
//                 winScoreDisplayElm,
//                 inputScoreDisplayElm,
//                 p1BtnElm,
//                 p2BtnElm,
//                 resetBtnElm
//             }
//          },
//           getRandom(){
//             const {winScoreDisplayElm}=this.selectors()  
//             const rand =  Math.ceil(Math.random()*5)
//             winScoreDisplayElm.textContent=rand
//             return rand
//          },
//           getWinner(scoreData,winScoreData){
//             const{ p1ScoreDisplayElm,
//                 p2ScoreDisplayElm,
//                 p1BtnElm,
//                 p2BtnElm,
//               }=this.selectors()
//             if(scoreData===winScoreData){
//                 if(this.p1ScoreData===winScoreData){
//                     p1ScoreDisplayElm.classList.add('winner')
//                 }else{
//                     p2ScoreDisplayElm.classList.add('winner')
//                 }
//                 this.gameOver=true;
//                 p1BtnElm.setAttribute('disabled','disabled')
//                 p2BtnElm.setAttribute('disabled','disabled')
//             }
//         },
//          resetGame(){
//             this.getWinScoreReset()
//             this.gameOver=false
//             // p1Btn.removeAttribute('disabled')
//             // p2Btn.removeAttribute('disabled')
//             // p1ScoreDisplay.classList.remove('winner')
//             // p2ScoreDisplay.classList.remove('winner')
//             // winScoreData=5;
//             // winScoreDisplay.textContent='5'
           
//         },
//          getWinScoreReset(){
//             const{ p1ScoreDisplayElm,
//                 p2ScoreDisplayElm,
//                 p1BtnElm,
//                 p2BtnElm,
//               }=this.selectors()
//             this.p1ScoreData = 0
//             this.p2ScoreData = 0
//             p1ScoreDisplayElm.textContent=0
//             p2ScoreDisplayElm.textContent=0
//             p1BtnElm.removeAttribute('disabled')
//             p2BtnElm.removeAttribute('disabled')
//             p1ScoreDisplayElm.classList.remove('winner')
//             p2ScoreDisplayElm.classList.remove('winner')
//         },
        
//         init(){
//             const{ p1ScoreDisplayElm,
//                 p2ScoreDisplayElm,
//                 inputScoreDisplayElm,
//                 winScoreDisplayElm,
//                 p1BtnElm,
//                 p2BtnElm,
//                 resetBtnElm
//               }=this.selectors()
//               p1BtnElm.addEventListener('click',()=>{
//                 if(!this.gameOver){
//                     this.p1ScoreData++
//                     this.getWinner(this.p1ScoreData,this.winScoreData)
//                     p1ScoreDisplayElm.textContent=this.p1ScoreData
//                 }
//             })
//             p2BtnElm.addEventListener('click',()=>{
//                 if(!this.gameOver){
//                     this.p2ScoreData++
//                     this.getWinner(this.p2ScoreData,this.winScoreData)
//                     p2ScoreDisplayElm.textContent=this.p2ScoreData
//                 }  
//             })
//             inputScoreDisplayElm.addEventListener('change',()=>{
//                 const convertNumber = Number(inputScoreDisplayElm.value)
//                 winScoreDisplayElm.textContent=convertNumber
//                 this.winScoreData=convertNumber
//                 inputScoreDisplayElm.value=''
//                 this.getWinScoreReset()
//             })
//             resetBtnElm.addEventListener('click',()=>this.resetGame())
//         },

//     }
//     playerGame.winScoreData=playerGame.getRandom()
//     playerGame.init()
// })()
    
    // const p1ScoreDisplay    = document.querySelector('#p1Score')
    // const p2ScoreDisplay    = document.querySelector('#p2Score')
    // const winScoreDisplay   = document.querySelector('p span')
    // const inputScoreDisplay = document.querySelector('#input')
    // const p1Btn             = document.querySelector('#p1Btn')
    // const p2Btn             = document.querySelector('#p2Btn')
    // const resetBtn             = document.querySelector('#reBtn')
    // let p1ScoreData = 0
    // let p2ScoreData = 0
    // let winScoreData =getRandom()
    // let gameOver=false
    
    // function getRandom(){
    //    const rand =  Math.ceil(Math.random()*5)
    //    winScoreDisplay.textContent=rand
    //    return rand
    // }
    
    // function getWinner(scoreData,winScoreData){
    //     if(scoreData===winScoreData){
    //         if(p1ScoreData===winScoreData){
    //             p1ScoreDisplay.classList.add('winner')
    //         }else{
    //             p2ScoreDisplay.classList.add('winner')
    //         }
    //         gameOver=true;
    //         p1Btn.setAttribute('disabled','disabled')
    //         p2Btn.setAttribute('disabled','disabled')
    //     }
    // }
    
    // function resetGame(){
    //     getWinScoreReset()
    //     gameOver=false
    //     // p1Btn.removeAttribute('disabled')
    //     // p2Btn.removeAttribute('disabled')
    //     // p1ScoreDisplay.classList.remove('winner')
    //     // p2ScoreDisplay.classList.remove('winner')
    //     // winScoreData=5;
    //     // winScoreDisplay.textContent='5'
       
    // }
    
    // function getWinScoreReset(){
    //     p1ScoreData = 0
    //     p2ScoreData = 0
    //     p1ScoreDisplay.textContent=0
    //     p2ScoreDisplay.textContent=0
    //     p1Btn.removeAttribute('disabled')
    //     p2Btn.removeAttribute('disabled')
    //     p1ScoreDisplay.classList.remove('winner')
    //     p2ScoreDisplay.classList.remove('winner')
    
    // }
    
    // p1Btn.addEventListener('click',()=>{
    //     if(!gameOver){
    //         p1ScoreData++
    //         getWinner(p1ScoreData,winScoreData)
    //         p1ScoreDisplay.textContent=p1ScoreData
    //     }
    // })
    
    // p2Btn.addEventListener('click',()=>{
    //     if(!gameOver){
    //         p2ScoreData++
    //         getWinner(p2ScoreData,winScoreData)
    //         p2ScoreDisplay.textContent=p2ScoreData
    //     }  
    // })
    
    // inputScoreDisplay.addEventListener('change',()=>{
    //     const convertNumber = Number(inputScoreDisplay.value)
    //     winScoreDisplay.textContent=convertNumber
    //     winScoreData=convertNumber
    //     inputScoreDisplay.value=''
    //     getWinScoreReset()
    // })
    
    // resetBtn.addEventListener('click',resetGame)





