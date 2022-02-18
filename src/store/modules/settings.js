/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2021-10-30 10:40:26
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-02-17 16:12:43
 */
import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'
const {
  showSettings,
  tagsView,
  fixedHeader,
  sidebarLogo
} = defaultSettings

const state = {
  theme: variables.theme,
  showSettings: showSettings,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  menuType: 'system',
  Layout: 'top'
}

const mutations = {
  CHANGE_SETTING: (state, {
    key,
    value
  }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  },
  SET_MENUTYPE: (state, menuType) => {
    state.menuType = menuType
  },
  SET_LAYOUT: (state, Layout) => {
    state.Layout = Layout
  }
}

const actions = {
  changeSetting({
    commit
  }, data) {
    commit('CHANGE_SETTING', data)
  },
  setMenuType({
    commit
  }, menuType) {
    commit('SET_MENUTYPE', menuType)
  },
  setLayout({
    commit
  }, Layout) {
    commit('SET_LAYOUT', Layout)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
