import { mockGifs } from "./mock-data/gifs.mock"
import { CustomHeader } from "./shared/components/CustomHeader"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { SearchBar } from "./shared/components/SearchBar"
import { GifList } from "./gifs/components/GifList"
import { useState } from "react"

export const GifsApp = () => {
    const [previousSearches, setPreviousSearches] = useState(["the office"])

    const handlePreviousSearchClicked = (item: string) =>{
        console.log(item)
    } 

    const handleSearch = (query: string) =>{
        console.log(query)
        //setPreviousSearches([])
    }

    return (
        <>
            <CustomHeader title="Buscador de Gifs" description="Descuble y comparte el gif perfecto" />

            <SearchBar placeholder="Busca lo que quieras" onQuery={handleSearch}/>

            <PreviousSearches searches={previousSearches} onLabelClicked={handlePreviousSearchClicked} />

            <GifList gifs={mockGifs} />
        </>
    )
}
