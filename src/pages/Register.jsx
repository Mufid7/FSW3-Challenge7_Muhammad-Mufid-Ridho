import "../public/css/style.css";
import "../public/css/login.css";

import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

function Register() {
    return (
        <div className="App bg-aliceblue h-100">
            <Navbar />
            <RegisterForm />
        </div>
    );
}

export default Register;
