import { useMemo, useState } from 'react'
import { View, Image } from '@tarojs/components'
import Taro, { eventCenter } from '@tarojs/taro'

import { IS_H5, EVENT_NAME, TAB_BAR_ROUTES } from '@/constants'

import indexIcon from '@/images/icon-index.png'
import indexIconActive from '@/images/icon-index-active.png'
import mineIcon from '@/images/icon-mine.png'
import mineIconActive from '@/images/icon-mine-active.png'

import './index.scss'

const tabBarConfig = {
  color: '#7A7E83',
  selectedColor: '#3CC51F',
  backgroundColor: '#F7F7F7',
  borderStyle: 'black',
  list: [
    {
      iconPath: IS_H5 ? indexIcon : '../images/icon-index.png',
      selectedIconPath: IS_H5
        ? indexIconActive
        : '../images/icon-index-active.png',
      pagePath: '/pages/index/index',
      text: '首页',
    },
    {
      iconPath: IS_H5 ? mineIcon : '../images/icon-mine.png',
      selectedIconPath: IS_H5
        ? mineIconActive
        : '../images/icon-mine-active.png',
      pagePath: '/pages/mine/index',
      text: '我的',
    },
  ],
}

export default function CustomTabBar() {
  const [selected, setSelected] = useState(-1)

  const onChange = (index, url) => {
    setSelected(index)
    Taro.switchTab({ url })
  }

  const currentRoute = useMemo(() => {
    const pages = Taro.getCurrentPages()
    const currentPage = pages[pages.length - 1]
    return currentPage.route?.split('?')[0]
  }, [])

  const isTabBarPage = useMemo(() => {
    return tabBarConfig.list.some(item => {
      // 如有做路由映射，此处可能要调整判断条件
      const matched = TAB_BAR_ROUTES.find(route => route === currentRoute)
      return matched && item.pagePath === matched
    })
  }, [currentRoute])

  // 以避免多余的监听，特别是 rerender 时
  useState(() => {
    if (!isTabBarPage) return
    eventCenter.on(EVENT_NAME.TAB_BAR_PAGE_VISIBLE, index => setSelected(index))
  })

  const element = useMemo(() => {
    if (IS_H5 && !isTabBarPage) return null

    return (
      <View className="tab-bar">
        {tabBarConfig.list.map((item, index) => (
          <View
            key={item.pagePath}
            className="tab-bar-item"
            onClick={() => onChange(index, item.pagePath)}
          >
            <Image
              className="tab-bar-icon"
              src={selected === index ? item.selectedIconPath : item.iconPath}
            />
            <View
              className="tab-bar-text"
              style={{
                color:
                  selected === index
                    ? tabBarConfig.selectedColor
                    : tabBarConfig.color,
              }}
            >
              {item.text}
            </View>
          </View>
        ))}
      </View>
    )
  }, [selected, isTabBarPage])

  return element
}
