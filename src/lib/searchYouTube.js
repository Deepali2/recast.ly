var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'application/json',
    data: {
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
      q: options.query,
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: function(data) {
      console.log('success!');
      callback(data.items);
    }
  });
};

window.searchYouTube = searchYouTube;
