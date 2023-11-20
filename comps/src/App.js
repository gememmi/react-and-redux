import Button from './Button';
import { GoBell } from "react-icons/go";

function App() {
    return <div>
        <div>
            <Button primary outline >
                <GoBell />
                Hello
                </Button>
        </div>
        <div>
            <Button secondary outline >What the heck is up</Button>
        </div>
        <div>
            <Button warning rounded >Barf</Button>
        </div>
        <div>
            <Button danger >I LVOE YOU</Button>
        </div>
        <div>
            <Button success >UMMMM ok</Button>
        </div>
        <div>
            <Button rounded>nasty</Button>
        </div>
    </div>
}

export default App;