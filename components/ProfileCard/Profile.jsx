import { View, Text, Image, TouchableOpacity } from 'react-native'
import { s } from './ProfileCard.style'
import FontAwesome from '@expo/vector-icons/FontAwesome'

export function ProfileCard() {
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
          <Text style={s.name}>Ic TheDev</Text>
          <View>
            <Text>Hi I am IC</Text>
          </View>
          <View style={s.social}>
            <TouchableOpacity>
              <FontAwesome name='twitter' size={24} color='lightblue' />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name='github' size={24} color='black' />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name='facebook-square' size={24} color='blue' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
