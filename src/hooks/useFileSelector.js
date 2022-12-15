import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function useFileSelector() {
  const takePicture = async () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'front',
        maxWidth: 500,
        maxHeight: 500,
        quality: 0.8,
      },
      res => {
        if (res.errorCode) {
          console.log('launchCamera errorCode', res.errorCode);
        }

        if (res.errorMessage) {
          console.log('launchCamera errorMessage', res.errorMessage);
        }

        if (res?.assets?.[0]) {
          //   setResourcePath(res.assets[0]);
        }
      },
    );
  };

  const openImageLibrary = async () => {
    const res = await launchImageLibrary({
      mediaType: 'photo',

      // API have file size limits.
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.8,
    });

    if (res.errorCode) {
      console.log('launchImageLibrary errorCode', res.errorCode);
    }

    if (res.errorMessage) {
      console.log('launchImageLibrary errorMessage', res.errorMessage);
    }

    if (res?.assets?.[0]) {
      return res.assets[0];
    }
  };

  return {takePicture, openImageLibrary};
}
