import { View, Text, Image, TouchableOpacity } from 'react-native'
import { s } from './ProfileCard.style'
import { AntDesign } from '@expo/vector-icons'

export function ProfileCard(props) {
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
            {props.firstName} {props.LastName}
          </Text>
          <View>
            <Text>
              Hi I am IC, I am {props.age} years old, let's get in touch, talk
              to you soon
            </Text>
          </View>
        </View>
      </View>
      <View style={s.social}>
        <TouchableOpacity style={s.socbtn}>
          <AntDesign name='stepforward' size={24} color='black' />
        </TouchableOpacity>
        <TouchableOpacity style={s.socbtn}></TouchableOpacity>
        <TouchableOpacity style={s.socbtn}></TouchableOpacity>
      </View>
    </View>
  )
}
