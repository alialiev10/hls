import Hls from 'hls.js';
import API_URLS from '../constants/api-urls.constant';

const connect = (HTMLVideoElement) => {
  return new Promise(resolve => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(API_URLS.STREAM);
      hls.attachMedia(HTMLVideoElement);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        HTMLVideoElement.play();
        resolve();
      });
    }
  });
};

const streamService = {
  connect,
};

export default streamService;
