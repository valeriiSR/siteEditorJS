import {  row, col, css } from './utils';

function title({ value, options }){
  const { tag = 'h2', styles = '' } = options;
  return row(col(`<${tag}>${value}</${tag}>`), css(styles));
}

function text(block){
  const {styles, tag} = block.options;
  return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
}

function columns(block){
  const html = block.value.map(col).join('');
  const {styles} = block.options;
  return row(html, css(styles));
}

function image(block){
  return row(col(`<img src="${block.value}" />`));
}

export const templates = {
  title,
  text,
  columns,
  image,
}