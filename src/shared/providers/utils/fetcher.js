export const fetcher = async(url, options = {}) => {
    const response = await fetch(url)
    const data = await response.json();
    return data;
}