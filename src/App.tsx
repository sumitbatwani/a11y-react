import './App.css';
import { Card } from './components/Card';
import { Radio } from './components/Radio';

function App() {
  return (
    <div className="App">
      <h1>Web Accessible React Components</h1>
      <Card width="300px" height="200px">
        <Radio
          id="radio-0"
          label="Radio"
          value="Radio"
          name="radio-sample"
        />
      </Card>
    </div>
  );
}

export default App;
