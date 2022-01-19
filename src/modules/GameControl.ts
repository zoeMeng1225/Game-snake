import Snake from './Snake';
import Food from './Food';
import ScorePanel from './Score-panel';

class GameControl{
  snake: Snake;
  food: Food;
  scorePanel: ScorePanel;

  //for store direction of the snake
  directions: string = "";
  isLive = true;
  
  constructor(){
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
    this.init();
  }

  init(){
    document.addEventListener('keydown', this.keyDownHandler.bind(this));
    this.run();
  }

  keyDownHandler(event: KeyboardEvent){
    this.directions = event.key
    // console.log(event.key);
    
  }

  run(){
    let X = this.snake.XAxis;
    let Y = this.snake.YAxis;

    //4 actions
    /**
      * ArrowUp Up(IE version)
      * ArrowDown Down
      * ArrowLeft Left
      * ArrowRight Right
     */
    switch(this.directions){
      case "ArrowUp":
      case "Up":
        Y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        Y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        X -= 10;
        break;
      case "ArrowRight":
      case "Right":
        X += 10;
        break;
    }

  
    //check if the snake eat food
    this.checkEatOrNot(X, Y);

    //catch Error
    try{
      this.snake.XAxis = X;
      this.snake.YAxis = Y;
    }catch(error){
      alert(error + ' Game Over!');
      this.isLive = false;
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level) * 30);
  }

  checkEatOrNot(X: number, Y: number){
    if(X === this.food.XAxis && Y === this.food.YAxis) {
      //change position of food
      this.food.positionChange();
      this.scorePanel.addScore();
      this.snake.addBody();
    }    
  }
}

export default GameControl;