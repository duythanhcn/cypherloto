import firebase from 'react-native-firebase'
import { Platform } from 'react-native'

class FireBase {
  fcmToken = null
  constructor() {
    this.registerToken()
    this.getFBCSPermission()
    this.registerChanel()
  }

  registerChanel() {
    const channel = new firebase.notifications.Android.Channel(
      'Cypher Lottery',
      'Cypher Lottery',
      firebase.notifications.Android.Importance.Max
    ).setDescription('A natural description of the channel')
    firebase.notifications().android.createChannel(channel)
  }

  displayNotification(notification) {
    if (Platform.OS === 'android') {
      const localNotification = new firebase.notifications.Notification({
        sound: 'default',
        show_in_foreground: true,
      })
        .setNotificationId(notification.notificationId)
        .setTitle('Cypher Lottery')
        .setSubtitle(notification.subtitle)
        .setBody(notification.body)
        .setData(notification.data)
        .android.setChannelId('Cypher Lottery')
        .android.setSmallIcon('ic_notification')
        .android.setColor('#57C2D2')
        .android.setPriority(firebase.notifications.Android.Priority.High)

      firebase.notifications()
        .displayNotification(localNotification)
        .catch(err => console.error(err))

    } else if (Platform.OS === 'ios') {
      const localNotification = new firebase.notifications.Notification()
        .setNotificationId(notification.notificationId)
        .setTitle('Cypher Lottery')
        .setSubtitle(notification.subtitle)
        .setBody(notification.body)
        .setData(notification.data)
        .ios.setBadge(notification.ios.badge)

      firebase.notifications()
        .displayNotification(localNotification)
        .catch(err => console.error(err))
    }
  }

  async registerFBNotification(callBack) {
    firebase.notifications().onNotification((notification) => {
      callBack(notification)
      this.displayNotification(notification)

    })
  }

  async subscribeToTopic(topicName) {
    firebase.messaging().subscribeToTopic(topicName);
  }

  async unsubscribeFromTopic(topicName) {
    firebase.messaging().unsubscribeFromTopic(topicName);
  }

  async registerFBNotificationOpen(callBack) {
    firebase.notifications().onNotificationOpened((notification) => {
      callBack(notification.notification)
      this.removeDeliveredNotification(notification.notification)
    })
  }

  async registerToken() {
    this.fcmToken = await firebase.messaging().getToken()
    return this.fcmToken
  }

  async getFBCSPermission() {
    let isPermission = await firebase.messaging().hasPermission()
    if (!isPermission) {
      isPermission = await this.requestFBCSPermission()
    }
    return isPermission
  }

  async requestFBCSPermission() {
    try {
      await firebase.messaging().requestPermission()
      return true
    } catch (error) {
      console.log('requestFBCSPermission Fail', error)
    }
    return false
  }

  async getInitialNotification() {
    const notification = await firebase.notifications().getInitialNotification()
    if (notification) {
      this.removeDeliveredNotification(notification.notification)
    }
    return notification
  }

  async onNotificationDisplayed(callBack) {
    firebase.notifications().onNotificationDisplayed((notification) => {
      callBack(notification.notification)
    })
  }

  removeDeliveredNotification(notification) {
    if (Platform.OS === "android") {
      notification.android.setAutoCancel(true)
    }
    firebase.notifications().removeDeliveredNotification(notification.notificationId)

  }
}

export default new FireBase()