import { View, Text, Image, TouchableOpacity } from 'react-native'
import { s } from './ProfileCard.style'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export function ProfileCard({
  firstName,
  LastName,
  age,
  onPressSocialMediaIcon,
}) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: 'https://i.pravatar.cc/300' }}
          />
        </View>
        <View style={s.texts}>
          <Text style={s.name}>
            {firstName} {LastName}
          </Text>
          <Text>
            Hi I am IC, I am {age} years old, let's get in touch, talk to you
            soon
          </Text>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity
          onPress={() => onPressSocialMediaIcon('facebook-square')}
          style={s.socbtn}
        >
          <FontAwesome name='facebook-square' size={24} color='blue' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressSocialMediaIcon('twitter')}
          style={s.socbtn}
        >
          <FontAwesome name='twitter' size={24} color='lightblue' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressSocialMediaIcon('github')}
          style={s.socbtn}
        >
          <FontAwesome name='github' size={24} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  )
}
