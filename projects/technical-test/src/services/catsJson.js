export const getCatsJson = async (fact) => {
    const firstWord = fact.split(" ", 3).join(" ")
    const fetchData = await fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
    const response = await fetchData.json()
    return firstWord + "?fontSize=50&fontColor=red"
}
