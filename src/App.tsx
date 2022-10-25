import { ZustandExample } from './components/ZustandExample';
import { ReactQueryExample } from './components/ReactQueryExample';

function App() {
    return (
        <div className="p-8">
            <div className="flex justify-end">
                <ReactQueryExample />
            </div>
            <ZustandExample />
        </div>
    );
}

export default App;
