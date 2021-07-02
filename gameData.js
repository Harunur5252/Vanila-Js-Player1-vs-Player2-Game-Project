import UI from './ui'

function GameData(){
    this.p1ScoreData = 0
    this.p2ScoreData = 0
    this.gameOver=false
    this.getWinner=function(scoreData,winScoreData){
        if(scoreData===winScoreData){
            const ui = new UI()
            if(this.p1ScoreData===winScoreData){
                ui.getWinnerP1()
                this.gameOver=true
            }else{
                ui.getWinnerP2()
                this.gameOver=true
            }
        }
    }
    this.p1AndP2ScoreData=function(){
        this.p1ScoreData=0
        this.p2ScoreData=0
    }
    this.gameOverFalse=function(){
        this.gameOver=false
    }
}

export default GameData