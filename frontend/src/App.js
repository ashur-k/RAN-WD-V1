import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import ProgrammersScreen from './screens/ProgrammerScreen'
import ProgrammerDetails from './screens/ProgrammerDetails'
import PricePlanScreen from './screens/PricePlanScreen'

import HomeScreen from './screens/HomeScreen'


function App() {
  return (
    <Router>    
      <Header />
      <main className="py-3">
      
        <Container className="margin-top">

          <Route path='/' component={HomeScreen} exact/>
          <Route path='/about' component={ProgrammersScreen} exact/>
          <Route path='/pricePlan' component={PricePlanScreen} exact/>
          <Route path='/programmerdetails/:id' component={ProgrammerDetails} />
          
          

        </Container>
      </main>   

      <Footer />    

    </Router>
  );
}

export default App;
