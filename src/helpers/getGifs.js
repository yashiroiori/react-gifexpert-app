export const getGifs = async(category) => {
    const apiKey = 'IbIMjKEPZbUAV9Y9tK4fBxYG5ee74kkq';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&limit=5&q=${encodeURI(category)}`);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.original.url,
        };
    });
    return gifs;
}