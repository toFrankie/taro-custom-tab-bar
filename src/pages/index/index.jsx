import { View, Text } from '@tarojs/components'
import useTabBar from '@/hooks/use-tab-bar'
import './index.scss'

export default function Index() {
  useTabBar(0)

  return (
    <View className="index">
      <Text>首页</Text>
    </View>
  )
}
