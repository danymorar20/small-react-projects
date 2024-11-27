import { useState, useEffect } from "react"
import { getCatFacts } from "../services/facts"

export function useCatFact () {
    const [fact, setFact] = useState()
    const refreshFact = () => {
        getCatFacts().then(newFact => setFact(newFact))
    }
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}
