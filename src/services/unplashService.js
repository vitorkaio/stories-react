import Unsplash from 'unsplash-js';


// const apiKey = "563492ad6f91700001000001a85ad4750cdc4174aee1d9f764a0cf42";
const client_key = "082e68b6201b04a3d95d198dab177585cde13e521b89d6c72f3450c45e364bc6";
const secret_key = "d4563fe3d00d372d9087fd1a1dbf39b5ff0bf8156e14a793374f291af94e77bd";

export default function UnsplashService() {
  let unsplash = new Unsplash({
    applicationId: client_key,
    secret: secret_key
  });

  const getImages = async (country) => {
    try {
      const page = Math.floor(Math.random() * 10) + 1 
      console.log(page)
      const res = await unsplash.search.photos(country, page, 10)
      if (res.status === 400) {
        throw Error(null)
      }
      const list = await res.json()
      return list['results']
    } 
    catch (_) {
      throw Error(null)
    }
  }

  return {
    getImages: getImages
  }

}
