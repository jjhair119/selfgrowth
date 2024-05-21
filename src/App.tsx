import { BrowserRouter } from 'react-router-dom';
import  MainRouter  from './routes.tsx';

const App = () => {
  return (
              <BrowserRouter>
                  <MainRouter />
              </BrowserRouter>
  );
};

export default App;