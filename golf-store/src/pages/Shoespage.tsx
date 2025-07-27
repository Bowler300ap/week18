import Construction from '../components/Construction';
import Logo from '../components/Logo';
import Name from '../components/Name';
import Phone from '../components/Phone';
import Address from '../components/Address';
import Email from '../components/Email';
import FB from '../components/FB';

export default function Shoes() {
    return (
    <>
    <Logo  />
    <Phone  />
    <Address />
    <Email />
    <FB />
    <h2>Welcome to the Shoes Page</h2>
    <h1>Shoes</h1>
    <h1>Shoes Page</h1>
    <p>Coming Soon!</p>
    <Construction/>
    <Name name = "Peters Golf Store" />
    <p>Check back later for our shoe collection.</p>
    </>
    );
}