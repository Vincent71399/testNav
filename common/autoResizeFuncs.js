import {Dimensions, Platform} from 'react-native';

const defaultAndroidScreenIOs = 375;
const defaultAndroidScreenWidth = 375;
const platformCode = Platform.OS
const screenWidth = Math.round(Dimensions.get('window').width);


const adjustSize = size => {
    switch (platformCode){
        case 'android':
            return Math.round(size * screenWidth / defaultAndroidScreenWidth);
        case 'ios':
            return Math.round(size * screenWidth / defaultAndroidScreenIOs);
    }
}


export {adjustSize}
