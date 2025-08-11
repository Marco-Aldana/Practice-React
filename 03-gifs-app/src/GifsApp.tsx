import { mockGifs } from "./mock-data/Gifs.mock"

export const GifsApp = () => {
  return (
    <>
    {/* Header */}
    <div className="content-center">
        <h1>Gifs Search</h1>
        <p>Discover and Share the perfect Gif</p>
    </div>

    {/* Search */}
    <div className="search-container">
        <input type="text" placeholder="Search Gifs" name="" id="" />
        <button>Search</button>
    </div>
    {/* Previous Seraches */}
    <div className="previous-searches">
        <h2>Previous Searches</h2>
        <ul className="previous-searches-list">
            <li>Goku</li>
            <li>Vegeta</li>
            <li>Minecraft</li>
        </ul>
    </div>

    {/* Gifs */}
    <div className="gifs-container">
        {
            mockGifs.map((gif)=>(
                <div key={gif.id} className="gif-card">
                    <img src={gif.url} alt={gif.title} />
                    <h3>{gif.title}</h3>
                    <p>
                        {gif.width}x{gif.height} (1.5mb)
                    </p>
                </div>
            ))
        }
    </div>
    </>
  )
}
