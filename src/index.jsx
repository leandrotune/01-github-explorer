import { render } from 'react-dom';
import { App } from './App'

// função render receber dois argumentos
// 1ª o que eu vou renderizar( o que eu quero exibir em tela)  ( <App /> )
// 2ª dentro de qual qual elemento eu quero renderizar ( document.getElementById('root') )
render(<App />, document.getElementById('root'))