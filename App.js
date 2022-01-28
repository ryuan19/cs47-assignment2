import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (

    <View style={styles.parent}>
      <View style={styles.top_container}>
        <TouchableOpacity>
            <Image style={styles.top_buttons} source={require("./assets/Icons/menu_light.png")}/>
        </TouchableOpacity>

        <Text style={{fontFamily: 'Sydney-Bold', fontSize: 32, marginTop: 15,}}>
          ensom
        </Text>

        <TouchableOpacity>
            <Image style={styles.top_buttons} source={require("./assets/Icons/sun.png")}/>
        </TouchableOpacity>
      </View>

      <View style={styles.middle_container}>

        <View style={styles.shadowspfp}>

          <ImageBackground source={require("./assets/Profiles/woman1.jpg")} style={styles.pfp}>
            <Text style={{fontFamily: 'Sydney-Bold', fontSize: 32, paddingLeft: 10, color: '#FFFFFF'}}>
              Woman1
            </Text>
            <Text style={{fontFamily: 'Sydney-Bold', fontSize: 18, paddingTop: 235, paddingLeft: 10, color: '#FFFFFF'}}>
              2 miles away
            </Text>
          </ImageBackground>
        </View>


        <View style={styles.shadowshottake}>
          <View style={styles.hottake}>
            <Text style={{fontFamily: 'Sydney-Bold', paddingTop: 15, paddingLeft: 15, fontSize: 25}}>
              My hottest take
            </Text>

            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: 10, paddingTop: 15,}}>
              <TouchableOpacity>
                <Image style={{height:40, width:40}} source={require("./assets/Icons/player_light.png")}/>
              </TouchableOpacity>

              <Image style={{marginLeft: 7, height:30, width: 176,}} source={require("./assets/Icons/audio_waveform_light.png")}/>
            </View>

          </View>
        </View>

      </View>

      <View style={styles.bottom_container}>
        <View style={styles.bottom_flex}>
          <TouchableOpacity>
            <Image style={styles.botton_buttons} source={require("./assets/Icons/discover_light.png")}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.botton_buttons} source={require("./assets/Icons/heart_light.png")}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image style={styles.botton_buttons} source={require("./assets/Icons/messages_light.png")}/>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 3}}>
          <Text style={{fontFamily: 'Sydney-Bold', color: '#FFFFFF',fontSize:15, marginRight: 20}}>
            Discover
          </Text>
          <Text style={{fontFamily: 'Sydney-Bold',color:'#FFFFFF', fontSize:15,}}>
            Matches
          </Text>
          <Text style={{fontFamily: 'Sydney-Bold',color:'#FFFFFF', fontSize:15, marginLeft: 27, marginRight:10}}>
            DMs
          </Text>
        </View>
      </View>


    </View>

  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#E5E4E2',
    flexDirection: 'column',
  },
  top_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
    height: Platform.OS === 'ios' ? 54 : 41,
    paddingTop: 25,
    paddingLeft: 25,
    paddingRight: 25,
  },
  top_buttons: {
    height: 40,
    width: 40,
    marginTop:10,
  },
  middle_container: {
    flex: 9,
    alignItems: 'center',
    marginTop: 10,
  },
  shadowspfp: {
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 5,
    shadowRadius: 3,
  },
  pfp: {
    width: 270,
    height: 297,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  shadowshottake: {
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 5,
    shadowRadius: 3,
  },
  hottake: {
    borderRadius: 20,
    overflow: 'hidden',
    width: 270,
    height: 130,
    backgroundColor: '#FFFFFF',
  },
  bottom_container: {
    borderWidth: 2,
    borderColor: '#0000FF',
    flex: 1.5,
    backgroundColor: '#000000'
  },
  bottom_flex: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 7,
  },
  botton_buttons: {
    height: 30,
    width: 30,
    marginRight: 20,
    marginLeft: 20,
  }
});
