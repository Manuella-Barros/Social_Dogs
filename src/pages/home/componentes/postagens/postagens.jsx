import CardPostagem from "./cardPostagem";

function Postagens({posts}){
    return(
        <article className="container_postagens">
            {
                posts.map((post, i) => {
                    return <CardPostagem key={i} img={post.src} acessos={post.acessos}/> 
                })
            }
        </article>        
    )
}

/*
function Postagens({i, post}){
    console.log(post)
    return(
        <article className="container_postagens">
            <CardPostagem key={i} img={post.src}/>
        </article>        
    )
}
*/
export default Postagens;