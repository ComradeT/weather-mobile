import { useState } from 'react';
import { Alert, Platform } from 'react-native';
import Location from 'react-native-geolocation-service';
import { check, openSettings, PERMISSIONS, request, RESULTS } from 'react-native-permissions';

const IOS_PERMISSIONS_LOCATION = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
const ANDROID_PERMISSIONS_LOCATION = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

type LocationType = {
  lat: number;
  long: number;
};

const useLocation = () => {
  const [locationData, setLocationData] = useState<LocationType | null>(null);

  const permissionsRejection = () => {
    Alert.alert(
      'Permission denied',
      'We need access to your photo library in order to upload a photo.',
      [
        { text: 'Close' },
        {
          text: 'Settings',
          onPress: openSettings,
        },
      ],
      { cancelable: false },
    );
  };

  const askLocationPermissions = async () => {
    const permissions = Platform.OS === 'android' ? ANDROID_PERMISSIONS_LOCATION : IOS_PERMISSIONS_LOCATION;
    const permissionStatus = await check(permissions);
    switch (permissionStatus) {
      case RESULTS.DENIED:
        const res = await request(permissions);
        if (res === RESULTS.GRANTED || res === RESULTS.LIMITED) {
          return true;
        } else {
          return false;
        }
      case RESULTS.LIMITED:
      case RESULTS.GRANTED:
        return true;
      case RESULTS.BLOCKED:
        permissionsRejection();
        return false;
      default:
        return false;
    }
  };

  const getPermissions = async () => {
    try {
      const permission = await askLocationPermissions();
      return permission;
    } catch (error) {
      // TODO: remove console.log
      console.log('error', error);
    }
  };

  const getCurrentPosition = () => {
    Location.getCurrentPosition(
      ({ coords }) => {
        const location = {
          lat: coords.latitude,
          long: coords.longitude,
        };
        console.log('location', location);
        setLocationData(location);
      },
      error => {
        console.log('error on get POSITION', error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        maximumAge: 3000,
      },
    );
  };

  return {
    getPermissions,
    getPosition: getCurrentPosition,
    locationData,
  };
};

export default useLocation;
