import Vue from 'vue'
import Toast from './toast'

let alertInstance

/**
 * Alert Vuex Module
 */
const getAlertModule = () => ({
  namespaced: true,
  state: {
    list: [],
    toastTypes: Object.freeze({
      ERROR: 'error',
      WARNING: 'warning',
      INFO: 'info',
      SUCCESS: 'success'
    })
  },
  getters: {
    /**
     * get array of current toasts
     * @param {*} state
     * @returns {Array}
     */
    getToasts(state) {
      return state.list
    }
  },
  mutations: {
    /**
     * add alert to alert list
     * @param {Object} payload
     * @param {String} payload.type
     * @param {String} payload.message
     * @param {String} payload.id
     * @param {Number} payload.dismissSeconds
     * @param {Date} payload.time
     */
    addToast(state, payload) {
      state.list.push(payload)
    },
    /**
     * remove alert for current alert list
     * @param {String} id
     */
    clearToast(state, id) {
      state.list = state.list.filter(a => a.id !== id)
    }
  },
  actions: {
    /**
     * add error alert
     * @param {String} message
     */
    addError({ commit, state }, message) {
      const payload = createToast(state.toastTypes.ERROR, message)
      commit('addToast', payload)
      setTimeout(
        () => commit('clearToast', payload.id),
        payload.dismissSeconds * 1000
      )
    },
    /**
     * add alert, specifying alert type
     * @param {Object} { type, message }
     */
    addToast({ commit, state }, { type, message }) {
      const payload = createToast(state.toastTypes[type], message)
      commit('addToast', payload)
      setTimeout(
        () => commit('clearToast', payload.id),
        payload.dismissSeconds * 1000
      )
    },
    /**
     * remove specific alert from alert list
     * @param {String} id
     */
    clearToast({ commit }, id) {
      commit('clearToast', id)
    }
  }
})

function createToast(type, message) {
  return {
    type,
    message,
    id: createId(),
    dismissSeconds: 5,
    time: new Date()
  }
}

function createId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = (Math.random() * 16) | 0
    let v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/**
 * Toast Alert Plugin Instance
 * @class AlertInstance
 */
class AlertInstance {
  /**
   * Creates an instance of AlertInstance.
   * @param {Object} { store }
   * @memberof AlertInstance
   */
  constructor({ store }) {
    if (!store)
      throw new Error('AlertPlugin requires a Vuex store to be provided')

    this.store = store
    this.flashKey = 'flash-toast'
    store.registerModule('toasts', getAlertModule(), { preserveState: false })

    return this
  }

  /**
   * Stateful Messaging
   * messages that will be displayed instantly and will remove themselves
   * after the specified dismiss interval
   */

  /**
   * immediately display error toast message
   * @name error
   * @param {String} error
   * @param {String} fallback
   * @memberof AlertInstance
   */
  error(error, fallback) {
    try {
      const message =
        typeof error === 'string' ? error : error.response.data.error
      this.store.dispatch('toasts/addError', message)
    } catch (err) {
      this.store.dispatch('toasts/addError', fallback)
    }
  }

  /**
   * immediately display success toast message
   * @name success
   * @param {String} message
   * @memberof AlertInstance
   */
  success(message) {
    this.store.dispatch('toasts/addToast', { type: 'SUCCESS', message })
  }

  /**
   * immediately display info toast message
   * @name info
   * @param {String} message
   * @memberof AlertInstance
   */
  info(message) {
    this.store.dispatch('toasts/addToast', { type: 'INFO', message })
  }

  /**
   * immediately display warning toast message
   * @name warning
   * @param {String} message
   * @memberof AlertInstance
   */
  warning(message) {
    this.store.dispatch('toasts/addToast', { type: 'WARNING', message })
  }

  /**
   * Flash Messaging
   * flash will add messages to a queue that will be displayed on the app's next refresh.
   * useful when we need to be redirected by the server, but show a message afterward.
   */

  /**
   * add flash message to queue
   * @name flash
   * @param {String} type
   * @param {String} message
   * @memberof AlertInstance
   */
  flash(type, message) {
    const validTypes = ['error', 'success', 'info', 'warning']
    const data = [{ type, message }]
    const messagesJSON = sessionStorage.getItem(this.flashKey)

    // ensure the type is valid so we don't get an error when calling
    if (validTypes.indexOf(type) === -1) {
      console.error(
        `[AlertPlugin] ${type} is not a valid flash type. Expected one of`,
        validTypes.join()
      )
      return
    }

    // add message to queue
    let messages = messagesJSON ? JSON.parse(messagesJSON || '[]') : []
    messages = [...messages, ...data]
    sessionStorage.setItem(this.flashKey, JSON.stringify(messages))
  }

  /**
   * display all queued flash messages
   * @name displayFlash
   * @memberof AlertInstance
   */
  displayFlash() {
    const messages = JSON.parse(sessionStorage.getItem(this.flashKey) || '[]')

    // call each message type method to display message
    if (Array.isArray(messages)) {
      messages.forEach(({ type, message }) => this[type](message))
    }

    // clear flash message queue
    sessionStorage.removeItem(this.flashKey)
  }
}

export default async ({ store }, inject) => {
  alertInstance = new AlertInstance({ store })

  Vue.component('d-toast', Toast)

  inject('toast', alertInstance)
}
