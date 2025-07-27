import BallsDropdown from "../components/BallsDropdown";
import  Logo from "../components/Logo";
import  Phone from "../components/Phone";
import Address from "../components/Address";
import Email from "../components/Email";
import FB from "../components/FB";

export default function Balls() {
    return (
    <>
    <Logo />
    <Phone />
    <Address/>
    <Email />
    <FB/>
    <h1>Golf Store Balls</h1>
    <h1>Balls Page</h1>
    <BallsDropdown />
    </>
    );
}