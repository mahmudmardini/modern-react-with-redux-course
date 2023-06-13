import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () => {console.log('success clcik')}
    return (
        <div>
            <div>
                <Button
                    success
                    outline
                    rounded
                    onClick={handleClick}
                >
                    <GoBell/>
                    Success
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <GoCloudDownload/>
                    Danger
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase/>
                    Warning
                </Button>
            </div>
            <div>
                <Button secondary outline>Secondary</Button>
            </div>
            <div>
                <Button primary rounded>Primary</Button>
            </div>
        </div>
    );
}

export default ButtonPage;
