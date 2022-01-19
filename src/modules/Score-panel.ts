//Score-panel
class ScorePanel{
  score = 0;
  level = 1;
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  maxLevel: number;
  upgrade: number;
  
  constructor(maxLevel: number = 10, upScore: number = 10){
    this.levelEle = document.getElementById('level')!;
    this.scoreEle = document.getElementById('score')!;

    this.maxLevel = maxLevel;
    this.upgrade = upScore;
  }

  addScore(){
    this.scoreEle.innerHTML = ++this.score + '';

    if(this.score % this.upgrade === 0){
      this.levelUp()
    }
  }

  levelUp(){
    if(this.level < this.maxLevel){
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}

const scorePanel = new ScorePanel(10, 2);
for(let i = 0; i < 10; i++){
  scorePanel.addScore()
}

export default ScorePanel;