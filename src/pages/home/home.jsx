import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './home.css'
import Postagens from "./componentes/postagens/postagens";
import getPosts from "../../api/getPosts";

function Home(){
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    // TENTATIVAS FALAHS DO SCROLL
    //const [page, setPage] = useState(1)

    // window.addEventListener('scroll', (e) => {
    //     //console.log(window.innerHeight) //Tamanho da tela
    //     //console.log(window)
    //     //console.log(window.scrollY) //Retorna o número de pixels que o documento já rolou verticalmente.
    //     console.log("foi");
    // })

    // useEffect(() => {
    //     getPosts(page)
    //     .then(res => { 
    //         return setPosts(prevValue => [...prevValue, [res]]); 
    //     });

    //     setPage(2)
    // }, [page])

    // useEffect(() => {
    //     getPosts(1).then(res => setPosts(prevValue => [...prevValue, ...res]));
    //     getPosts(2).then(res => setPosts(prevValue => [...prevValue, ...res]));
    // }, [])
    // console.log(posts)
    // -----------------------------------------------------------------------------------------

    useEffect(() => {
        getPosts(page).then(res => {
            // setPosts(prevValue => [...prevValue, [...res]]);
            setPosts(res)
        });

        setPage(2)
    }, [page])
    
    console.log(posts)

    return (
        // <main id="main_home" className="fading">
        //     {console.log("opa")}
        //     {
        //         posts.map((post, i) => { 
        //             return <Postagens key={i} posts={posts}/>
        //         })
        //     }
        // </main>

        <main id="main_home" className="fading">
            {console.log("opa")}
            <Postagens posts={posts}/>
            <Postagens posts={posts}/>
        </main>
    )
}

export default Home;