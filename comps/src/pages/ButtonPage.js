import Button from '../components/Button';
import { GoBell } from "react-icons/go";

function ButtonPage() {

    return <div>
        <div>
            <Button primary outline className="mb-5" >
                <GoBell/>
                Hello
                </Button>
        </div>
        <div>
            <Button secondary outline >
            <GoBell/>
                What the heck is up
                </Button>
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

export default ButtonPage;