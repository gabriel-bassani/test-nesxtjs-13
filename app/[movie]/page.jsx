export default async function MovieDetail({ params }){
    const {movie} = params;
    const imagePath = "https://image.tmdb.org/t/p/original"

    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
    )
    const res = await data.json()
    //console.log("TESTE");
    //console.log(res);
    return(
        <div>
            <h1>Movie details</h1>
            <h2 className="text-2xl">{res.title}</h2>
            <h2 className="text-lg">{res.release_date}</h2>
            <h2>{res.runtime} minutes</h2>
            <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md">{res.status}</h2>
            <img 
                className="my-12 w-full"
                src={imagePath + res.backdrop_path}
                alt="Movie Poster"
                width="1000"
                height="1000"
            />
            <p>{res.overview}</p>
        </div>
    )
}