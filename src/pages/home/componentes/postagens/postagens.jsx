import CardPostagem from "./cardPostagem";

function Postagens({posts}){
    return(
        <article className="container_postagens">
            {
                posts.map((post, i) => {
                    //console.log(post)
                    return <CardPostagem key={i} img={post.src} acessos={post.acessos}/> 
                })
                // posts.map((post, i) => {
                //     return <CardPostagem key={i} img={post.src} acessos={post.acessos}/> 
                // })
            }
        </article>        
    )
}

export default Postagens;