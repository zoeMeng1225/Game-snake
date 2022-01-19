//Food
class Food{
  element: HTMLElement;

  constructor(){
    this.element = document.getElementById('food')!
  }

  get XAxis(){
    return this.element.offsetLeft;
  }

  get YAxis(){
    return this.element.offsetTop;
  }

  positionChange(){
    let top = Math.round(Math.random() * 29) * 10;
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.left = left + 'px';
    this.element.style.top = top + 'px';
  }
}

export default Food;