import Address from "../components/Address";
import Email from "../components/Email";
import Logo from "../components/Logo"
import Phone from "../components/Phone";
import FB from "../components/FB";

export default function HomePage() {
    return (
    <>
    <Logo />
    <h1>Golf Store</h1>
    <p>Welcome to the Golf Store!</p>
    <p>Check out our latest products.</p>
    <Phone />
    <Address />
    <Email />
    <FB/>
    </>
    );
}