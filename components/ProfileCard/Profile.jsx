import { View, Text, Image, TouchableOpacity } from 'react-native'
import { s } from './ProfileCard.style'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export function ProfileCard({ firstName, LastName, age, isHappy }) {
  return (
    <>
      <Text style={{ fontSize: 70 }}>
        {' '}
        {age > 100 ? 'You Are Old' : 'You are Young'}
      </Text>
      <Text style={{ fontSize: 70 }}>I Am Happy</Text>
    </>
  )
  /*
return (
  <View style={s.container}>
    <View style={s.header}>
      <View>
        <Image style={s.avatar} source={{ uri: 'https://i.pravatar.cc/300' }} />
        {img}
      </View>
      <View style={s.texts}>
        {children}
        <Text style={s.name}>
          {firstName} {LastName}
        </Text>
        <View>
          <Text>
            Hi I am IC, I am {age} years old, let's get in touch, talk to you
            soon
          </Text>
        </View>
      </View>
    </View>
    <View style={s.social}>
      <TouchableOpacity style={s.socbtn}>
        <FontAwesome name='facebook-square' size={24} color='black' />
      </TouchableOpacity>
      <TouchableOpacity style={s.socbtn}>
        <FontAwesome name='twitter' size={24} color='black' />
      </TouchableOpacity>
      <TouchableOpacity style={s.socbtn}>
        <FontAwesome name='instagram' size={24} color='black' />
      </TouchableOpacity>
    </View>
  </View>
)
*/
}
