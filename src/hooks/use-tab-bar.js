import Taro, { useDidShow } from '@tarojs/taro'

import { EVENT_NAME } from '@/constants'

export default function useTabBar(selectedIndex) {
  useDidShow(() => {
    Taro.eventCenter.trigger(EVENT_NAME.TAB_BAR_PAGE_VISIBLE, selectedIndex)
  })
}
