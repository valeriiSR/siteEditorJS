import image from './assets/image.png';
import { TitleBlock, TetxBlock, ColumnsBlock, ImageBlock } from './classes/blocks';

// В модели описываю структуру будущего сайта - блоки-компоненты
export const model = [
  new TitleBlock( 'Конструктор сайтов на pure JS', {
    tag: 'h1',
    styles: {
      background: '#1abc9c',
      color: '#2c3e50',
      'text-align': 'center',
      padding: '1.5rem'
    }
  }),
  new TetxBlock( 'some content in TAG b', {
    tag: 'b',
    styles: {
      color: '#2c3e50',
      padding: '1rem'
    }
  }),
  new ColumnsBlock( [
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, ipsam.',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, ipsam.',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, ipsam.',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, ipsam.',
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, ipsam.',
  ], {
    styles: {
      color: '#2980b9',
      padding: '1rem'
    }    
  }),
  new ImageBlock( image ),
]