import { block } from '../utils';
import { TitleBlock, TetxBlock } from './blocks';

export class Sidebar {
  constructor(element, updateData){
    this.$el = document.querySelector(element);

    this.update = updateData;
    this.init();
  }
  init(){
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.addBlock.bind(this))
  }

  get template(){
    // return block('text');
    return [
      block('text'),
      block('title')
    ].join('');
  }

  addBlock(event){
    event.preventDefault();

    const type = event.target.name;
    const value = event.target.content.value;
    const styles = event.target.styles.value;

    let newBlock = type === "text" 
      ? new TetxBlock(value, { styles }) 
      : new TitleBlock(value, { styles });

    this.update(newBlock);

    event.target.content.value = '';
    event.target.styles.value = '';


      // debugger
    // let newBlock;    
    // if(type === "text"){
    //   // newBlock = new TextBlock(type, value, { styles: styles })
    //   newBlock = new TetxBlock(value, { styles });
    // }else{
    //   newBlock = new TitleBlock(value, { styles });
    // }
    // console.log(newBlock);
  }
}
