import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { Linking } from 'react-native'
import { ProfileCard } from './components/ProfileCard/Profile'
import { AgeCounter } from './components/ProfileCard/AgeCounter/AgeCounter'

export default function App() {
  function goToSocialMedia(SocialMedia) {
    let url
    switch (SocialMedia) {
      case 'facebook-square':
        url = 'https://github.com/Ichy1231'
        break
      case 'twitter':
        url = 'https://github.com/Ichy1231'
        break
      case 'github':
        url = 'https://github.com/Ichy1231'
        break
    }
    Linking.openURL(url)
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, justifyContent: 'center', padding: 20 }}
        >
          {/*<AgeCounter />*/}
          <ProfileCard
            onPressSocialMediaIcon={goToSocialMedia}
            firstName={'Ic'}
            LastName={'The Dev'}
            age={21}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}
