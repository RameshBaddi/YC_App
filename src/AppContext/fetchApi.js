
export const fetchApi = async (page=0) => {
    const url = `https://hn.algolia.com/api/v1/search?page=${page}&hitsPerPage=10`
    let data
    try {
        let res = await fetch(url)
        data = await res.json()
        return data
      
    } catch(err) {
        return err
    }
}