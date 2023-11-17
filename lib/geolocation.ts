import constants from '../src/constants';

interface IGeoLocation {
  "geoplugin_request": string,
  "geoplugin_status": number,
  "geoplugin_delay": string,
  "geoplugin_credit": string,
  "geoplugin_city": string,
  "geoplugin_region": string,
  "geoplugin_regionCode": string,
  "geoplugin_regionName": string,
  "geoplugin_areaCode": string,
  "geoplugin_dmaCode": string,
  "geoplugin_countryCode": string,
  "geoplugin_countryName": string,
  "geoplugin_inEU": 0,
  "geoplugin_euVATrate": boolean,
  "geoplugin_continentCode": string,
  "geoplugin_continentName": string,
  "geoplugin_latitude": string,
  "geoplugin_longitude": string,
  "geoplugin_locationAccuracyRadius": string,
  "geoplugin_timezone": string,
  "geoplugin_currencyCode": string,
  "geoplugin_currencySymbol": string,
  "geoplugin_currencySymbol_UTF8": string,
  "geoplugin_currencyConverter": number
}

const getLocation = async (): Promise<IGeoLocation> => {
  const response = await fetch(constants.geoPlugin.url);
  return await response.json();
}

const getUSRegion = async (): Promise<string | null> => {
  const body = await getLocation();
  const {
    geoplugin_countryCode: countryCode,
    geoplugin_region: state
  } = body;
  if (countryCode !== 'US' || !state) return null;
  
  return state;
}

export {
  getLocation,
  getUSRegion,
}