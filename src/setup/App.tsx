import './App.css';
import TimeLine from '../components/time-line';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import NavBar from '../components/navbar';
import TechIcons from '../components/tech-icons';
import Presentation from '../components/presentation';
import Footer from '../components/footer';

function App() {
  return (
    <>
      <div className='introduction'>
        <NavBar />
        <Presentation />
      </div>

      <div className='flex-center'>
        <Card raised>
          <CardContent>
            <div className='card'>
              <div className='flex-collumn-center'>
                <p className='tech-title'>Histórico Profissional</p>
                <TimeLine />
              </div>
              <div className="linha-vertical"></div>
              <div className='flex-collumn-center'>
                <p className='tech-title'>Tecnologias</p>
                <div className='tech-section'>
                  <TechIcons />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>

  );
}

export default App;