//Snake
class Snake{
  head: HTMLElement;
  bodies: HTMLCollection;
  element: HTMLElement;

  constructor(){
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div')!;
    this.bodies = this.element.getElementsByTagName('div')
  }

  get XAxis(){
    return this.head.offsetLeft;
  }

  get YAxis(){
    return this.head.offsetTop;
  }

  
  set XAxis(value: number){
    if(this.XAxis === value){
      return;
    }
    //set a range between 0 - 290
    if(value < 0 || value > 290){
      throw new Error('The snake died!')
    }

    
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
      if(value > this.XAxis){
        value = this.XAxis - 10; 
      }else{
        value = this.XAxis + 10; 
      }
    }

    this.moveBody();
    this.head.style.left = value + "px";
    this.checkHeadBody()
  }


  set YAxis(value: number){
    if(this.YAxis === value){
      return;
    }

    if(value < 0 || value > 290){
      throw new Error('The snake died')
    }

    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
      if(value > this.YAxis){
        value = this.YAxis - 10;
      }else{
        value = this.YAxis + 10;
      }
    }

    this.moveBody();
    this.head.style.top = value + "px";
    this.checkHeadBody()
  }
  //add body
  addBody(){
    this.element.insertAdjacentHTML('beforeend', '<div></div>')
  }

  //move body
   moveBody(){
     for(let i = this.bodies.length - 1; i > 0; i--){
        let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
        let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

        (this.bodies[i] as HTMLElement).style.left = X + 'px'; 
        (this.bodies[i] as HTMLElement).style.top = Y + 'px';        
     }
   }

   checkHeadBody(){
     for(let i = 1; i < this.bodies.length; i++){
       let bd = this.bodies[i] as HTMLElement;
       if(this.XAxis === bd.offsetLeft && this.YAxis === bd.offsetTop){
         throw new Error('You crush into yourself')
       }
     }
   }
}

export default Snake;