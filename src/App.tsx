import { BrowserRouter } from 'react-router-dom';
import  MainRouter  from './routes.tsx';

const App = () => {
  // console.log(process.env.REACT_APP_KAKO_JS_SDK_KEY);
  // console.log(import.meta.env.VITE_KAKO_JS_SDK_KEY);
  return (
              <BrowserRouter>
                  <MainRouter />
              </BrowserRouter>
  );
};

export default App;
