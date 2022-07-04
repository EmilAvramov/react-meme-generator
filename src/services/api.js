const baseUrl = 'https://api.imgflip.com/get_memes';

const getRequest = () => fetch(baseUrl).then((res) => res.json());

export default getRequest;
