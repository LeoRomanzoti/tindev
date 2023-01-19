import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Login.css";
import api from "../services/api";

export default function Login() {
    const [username, setUsername] = useState("");
    const history = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post("/devs", {
            username,
        });

        const { _id } = response.data;

        history(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev" />
                <input
                    placeholder="Digite seu usuário no Github"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
