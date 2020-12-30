export const getGif = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=MbMWXR11Ewm3MEOGEg0PB9K2Rz57d64M&q=${encodeURI(category)}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  })
  return gifs;
}