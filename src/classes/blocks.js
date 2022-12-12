import {  row, col, css } from '../utils';

class Block{
  constructor(type, value, options){
    this.type = type;
    this.value = value;
    this.options = options;
  }

  toHTML(){
    throw new Error('Method toHTML must be maked')
  }
}

export class TitleBlock extends Block{
  constructor(value, options){
    super('title', value, options);
  }

  toHTML(){
    const { tag = 'h2', styles = '' } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class TetxBlock extends Block{
  constructor(value, options){
    super('text', value, options);
  }

  toHTML(){
    const {styles, tag = 'p'} = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}

export class ColumnsBlock extends Block{
  constructor(value, options){
    super('columns', value, options);
  }

  toHTML(){
    const html = this.value.map(col).join('');
    const {styles} = this.options;
    return row(html, css(styles));
  }
}

export class ImageBlock extends Block{
  constructor(value, options){
    super('image', value, options);
  }

  toHTML(){
    return row(col(`<img src="${this.value}" />`));
  }
}