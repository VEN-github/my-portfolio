import Header from './components/layout/header/Header';
import Main from './components/layout/content/Content';

const App = () => {
  const template = document.createElement('template');
  template.innerHTML = `
  ${Header()}
  ${Main()}
  `;

  return template.content.cloneNode(true);
};

export default App;
