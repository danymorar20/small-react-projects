import { useState, useEffect } from "react"

const API_URL_PREFIX = "https://cataas.com"

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (!fact) return

        const firstWord = fact.split(" ", 3).join(" ")
        console.log(firstWord)
        fetch(`${API_URL_PREFIX}/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
          .then(res => res.json())
          .then(response => {
            const { _id } = response
            const url = `${API_URL_PREFIX}/cat/${_id}/says/${firstWord}`
            setImageUrl(url)
          })
    }, [fact])
    return { imageUrl }
}
