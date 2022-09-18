const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '76a94875ff363139e17566f0462c28d3',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
