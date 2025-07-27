import Address from "../components/Address";
import Email from "../components/Email";
import GolfTable from "../components/GolfTable";
import Logo from "../components/Logo";
import Phone from "../components/Phone";
import FB from "../components/FB";


export default function Clubs() {
    return (
    <>
    <Logo  />
    <Phone />
    <Address/>  
    <Email /> 
    <FB/>
    <h1>Clubs Page</h1>
    <GolfTable />
    </>
    );
}