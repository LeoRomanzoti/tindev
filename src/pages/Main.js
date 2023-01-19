import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import api from "../services/api";

export default function Main({ match }) {
    const [users, setUsers] = useState([]);

    /*useEffect(() => {
        async function loadUsers() {
            const response = await api.get("/devs", {
                headers: {
                    user: match.params.id,
                },
            });
            setUsers(response.data);
        }
        loadUsers();
    }, [match.params.id]);*/

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id },
        });
    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: match.params.id },
        });

        setUsers(users.filter((user) => user._id !== id));
    }

    return (
        <div className="main-container">
            <Link to="/">
                <img src={logo} alt="Tindev" />
            </Link>
            <ul>
                <li>
                    <img
                        src="https://yt3.googleusercontent.com/ytc/AMLnZu9fwc9E-G17B2vMnbYzZBp_NYs4AmCE802y8x08=s900-c-k-c0x00ffffff-no-rj"
                        alt=""
                    />
                    <footer>
                        <strong>Filipe Deschamps</strong>
                        <p>Engenheiro de software</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>

                <li>
                    <img
                        src="https://vader.news/__export/1592951625852/sites/gadgets/img/2020/06/23/amy.jpg_1681673039.jpg"
                        alt=""
                    />
                    <footer>
                        <strong>Amy Farrah Fowler</strong>
                        <p>Neuroscientist</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img
                        src="https://avatars.githubusercontent.com/u/2254731?v=4"
                        alt=""
                    />
                    <footer>
                        <strong>Diego Fernandes</strong>
                        <p>CTO at @Rocketseat.</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                {/* {users.map((user) => (
                    <li>
                        <img src={user.avatar} alt={user.name} />
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button" onClick={() => handleDislike(user._id)}>
                                <img src={dislike} alt="Dislike" />
                            </button>
                            <button type="button" onClick={() => handleLike(user._id)}>
                                <img src={like} alt="Like" />
                            </button>
                        </div>
                    </li>
                ))} */}
            </ul>
        </div>
    );
}
