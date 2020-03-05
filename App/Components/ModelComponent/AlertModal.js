import React from 'react'
import styles from './Styles/AlertModalStyles'
import { View, TouchableOpacity, Text } from 'react-native'
import PropTypes from 'prop-types'
import Dialog from 'react-native-popup-dialog'

const ratioH = 0.3
const ratioW = 0.8
const AlertModal = React.memo(props => {
  const { message, actions, title } = props

  function renderButton(total, index, btnText, btnAction) {
    const w = 100 / total + '%'
    const btnBorder = null
    if (total > 1) {
      btnBorder = index % 2 !== 0 ? styles.btnBorderLeft : styles.btnBorderRight
    }
    return (
      <TouchableOpacity
        key={index}
        onPress={() => btnAction()}
        style={[styles.btnClose, btnBorder, { width: w }]}>
        <Text style={styles.btnText}>{btnText}</Text>
      </TouchableOpacity>)
  }

  return (
    <Dialog
      visible={props.isVisible}
      width={ratioW}
      height={ratioH}
      onHardwareBackPress={() => false}
      onTouchOutside={() => { }}
      dialogStyle={styles.dialogStyle}>
      <View style={styles.containerView}>
        <View style={styles.bodyView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.contentView}>
            <Text style={styles.contentText}>{message}</Text>
          </View>
        </View>
        <View style={styles.footerView}>
          {actions.map((item, index, arr) => renderButton(arr.length, index, item.btnText, item.btnAction))}
        </View>
      </View>
    </Dialog>
  )
})

AlertModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired
}

export default AlertModal