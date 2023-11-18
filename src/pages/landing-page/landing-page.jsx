import Landing from "../../components/landing/landing";
import { Fade } from "react-awesome-reveal";

function LandingPage () {
    return(
        <Fade delay={1e2} cascade damping={1e-1}>
            <Landing />

        </Fade>
    );
}

export default LandingPage