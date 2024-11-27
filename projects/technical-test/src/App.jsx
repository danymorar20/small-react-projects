import { useCatFact } from "./hooks/useCatFact"
import { useCatImage } from "./hooks/useCatImage"

export function App() {
    const { fact, refreshFact} = useCatFact()
    const { imageUrl } = useCatImage({ fact })
    const handleClick = async () => {
        refreshFact()
    }
    return (
        <main>
            <h1>App de gatucos</h1>
            <button onClick={handleClick}>Get new fact about gatucos</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} />}
        </main>
    )
}
