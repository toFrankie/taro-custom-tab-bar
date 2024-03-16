import { View, Text } from '@tarojs/components'
import useTabBar from '@/hooks/use-tab-bar'
import './index.scss'

export default function Mine() {
  useTabBar(1)

  return (
    <View className="mine">
      <Text>我的</Text>
    </View>
  )
}
