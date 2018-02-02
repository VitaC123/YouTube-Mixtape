const addToBlacklist = (artistName, video) => (
  new Promise((resolve, reject) => {
    const request = '/blacklist';
    const init = {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        artistName,
        videoId: video.id,
        channelId: video.channelId,
        title: video.title
      })
    };
    fetch(request, init)
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(e => reject(e));
  })
);

const fetchBlacklistedVideos = artist => (
  new Promise((resolve, reject) => {
    const request = `/blacklist/${encodeURIComponent(artist.name)}`;
    fetch(request, { method: 'GET' })
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(e => reject(e));
  })
);


export default {
  addToBlacklist,
  fetchBlacklistedVideos
};
