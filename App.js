import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import { ProfileCard } from './components/ProfileCard/Profile'

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, justifyContent: 'center', padding: 20 }}
        >
          <ProfileCard
            firstName={'Ic'}
            LastName={'The Dev'}
            age={21}
            isOpenToWork={true}
            car={{ brand: 'Mustang', maxSpeed: 200 }}
            doSomething={function () {
              console.log('Hello !')
            }}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  )
}
