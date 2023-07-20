import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css'
import Postagens from "../../componentes/postagens/postagens";
import getPosts from "../../api/getPosts";

function Home(){
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        getPosts().then(res => setPosts(res));
    }, [])

    return  posts != null ?(
        <main id="main_home" className="fading">
            <Postagens posts={posts}/>
        </main>
    ) : <></>
}

export default Home;