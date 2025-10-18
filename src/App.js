import { Container } from 'react-bootstrap';
import './App.scss';
import Header from './components/Header';
import TableUsers from './components/TableUsers';

function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Container>
        <div className='my-3'>
          List Users: 
        </div>
        <TableUsers/>
      </Container>
    </div>
  );
}

export default App;
