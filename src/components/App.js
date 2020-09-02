import React from 'react';
import Header from '../components/ui/Header';
import theme from './ui/Theme'
import { ThemeProvider } from '@material-ui/styles';
import {BrowserRouter,Switch,Route} from 'react-router-dom'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
         <Header/>
         <Switch>
           <Route exact path="/" component={()=><div>Home</div>}/>
           <Route path="/services" component={()=><div>Services</div>}/>
           <Route exact path="/customsoftware" component={()=><div>Custom Software</div>}/>
           <Route exact path="/mobileapp" component={()=><div>Mobile App</div>}/>
           <Route exact path="/websites" component={()=><div>Websites</div>}/>
           <Route path="/about" component={()=><div>About</div>}/>

           <Route path="/contact" component={()=><div>contact</div>}/>
           <Route path="/revolution" component={()=><div>revolution</div>}/>


         </Switch>
      </BrowserRouter>
     
      
    </ThemeProvider>
    
  
  );
}

export default App;