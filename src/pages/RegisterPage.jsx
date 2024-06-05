import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import NavbarLogin from '../components/NavbarLogin';

function RegisterPage() {
    const navigate = useNavigate();

    async function onRegisterHandler(user) {
        const { error } = await register(user);
        if (!error) {
            navigate('/');
        }
    }

    return (
        <div className="app-container">
            <NavbarLogin/>
            <main>
                <section className='register-page'>
                    <h2>Gak perlu serius-serius ya isinya ...</h2>
                    <RegisterInput register={onRegisterHandler} />
                    <p>Sudah punya akun? <Link to="/">Login di sini</Link></p>
                </section>
            </main>
        </div>
    )
}

export default RegisterPage;