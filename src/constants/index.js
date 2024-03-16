export const IS_H5 = process.env.TARO_ENV === 'h5'

export const ROUTE = {
  INDEX: '/pages/index/index',
  MINE: '/pages/mine/index',
}

export const TAB_BAR_ROUTES = [ROUTE.INDEX, ROUTE.MINE]

export const EVENT_NAME = {
  TAB_BAR_PAGE_VISIBLE: 'tab_bar_page_visible',
}
