import type { Component } from 'vue'
import { NIcon } from 'naive-ui'
import {
  CloseCircleOutline as CloseCircleOutlineIcon,
  Refresh as RefreshIcon,
} from '@vicons/ionicons5'
import {
  ArrowLeft as ArrowLeftIcon,
  ArrowRight as ArrowRightIcon,
} from '@vicons/carbon'

/**
 * 渲染图标
 */
const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    })
  }
}

/** 右键菜单项 */
export const baseTabContextMenuOptions = [
  {
    label: '刷新当前',
    key: 'refresh',
    icon: renderIcon(RefreshIcon),
  },
  {
    label: '关闭左边',
    key: 'closeLeft',
    icon: renderIcon(ArrowLeftIcon),
  },
  {
    type: '关闭左边',
    key: 'closeRight',
    icon: renderIcon(ArrowRightIcon),
  },
  {
    label: '关闭其他',
    key: 'closeOthers',
    icon: renderIcon(CloseCircleOutlineIcon),
  },
]

/** 定义右键菜单项 `key` 类型 */
export type TabContextMenuOptionKeyType = 'refresh' | 'closeLeft' | 'closeRight' | 'closeOthers'