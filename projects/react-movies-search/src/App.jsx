import { useState, useEffect, useRef } from "react"
import "./App.css"
import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import debounce from "just-debounce-it"
import { useCallback } from "react"

function useSearch () {
    const [search, updateSearch] = useState('')
    const [ error, setError ] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }
        if (search === '') {
            setError("Cannot search a movie empty")
            return
        }
        if (search.match(/^\d+$/)) {
            setError("Cannot search movies with numbers")
            return
        }
        if (search.length < 3) {
            setError("Cannot search movies with only 3 characteres")
            return
        }

        setError(null)
      }, [search])

      return { search, updateSearch, error }
}

function App() {
    const [sort, setSort] = useState(false)
    const { search, updateSearch, error } = useSearch()
    const { movies, getMovies, loading } = useMovies({ search, sort })

    const debouncedGetMovies = useCallback(
        debounce(search => {
            getMovies({ search })
        }, 300)
    , [])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className="page">
        <header>
            <h1>Movies searcher</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Put a movie name to search</label>
                    <input type="checkbox" onChange={handleSort} checked={sort}/>
                    <input onChange={handleChange} value={search} name="query" className="form" placeholder="starwars, scary movie, etc"/>
                </div>
                <button type="submit">Search</button>
            </form>
            {error && <p className="error ">{error}</p>}
        </header>
        <main>
            {
                loading ? <p>Cargando contenido...</p> : <Movies movies={movies}/>
            }
        </main>
    </div>
  )
}

export default App
