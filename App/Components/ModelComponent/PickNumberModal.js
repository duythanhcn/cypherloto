import React, { useEffect, useState } from 'react';
import Styles from './Styles/PickNumberModalStyles';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Dialog from 'react-native-popup-dialog';
import BallComponent from '../ItemComponent/BallComponent';

const test = Array(70).fill(1)
const test2 = Array(20).fill(1)

const PickNumberModal = React.memo(props => {
	const { onChange } = props;
	const [isVisible, setVisible] = useState(props.isVisible);
	const [pickedNumber, setPickedNumber] = useState([]);
	const [isKeyboard, setKeyBoard] = useState(false);

	useEffect(() => {
		setVisible(props.isVisible);
	}, [props.isVisible])

	function onSubmit() {
		setKeyBoard(false)
		if (code) {
			onChange(code)
		}
	}

	return (
		<Dialog
			visible={isVisible}
			width={0.9}
			height={0.9}
			onHardwareBackPress={() => false}
			onTouchOutside={() => false}
			dialogStyle={Styles.dialogStyle}>
			<View style={Styles.container}>
				<View style={Styles.currentView}>
					<View style={Styles.pickedNumber}>
						<BallComponent number={0} type={0} />
						<BallComponent number={0} type={0} />
						<BallComponent number={0} type={0} />
						<BallComponent number={0} type={0} />
						<BallComponent number={0} type={0} />
						<BallComponent number={0} type={1} />
					</View>
					<View style={Styles.actionView}>
						<TouchableOpacity
							style={Styles.btnAction}>
							<Text style={Styles.actionText}>Quick Pick</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={Styles.btnAction}>
							<Text style={Styles.actionText}>Clear Number</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={Styles.pickView}>
					<ScrollView style={Styles.scrollView}>
						<View style={Styles.pickerLayer}>
							<View style={Styles.headerPicker}>
								<Text style={Styles.headerText}>Pick 5 number from 1 to 70</Text>
							</View>
							<View style={Styles.numberView}>
								<FlatList
									style={Styles.listView1}
									data={test}
									numColumns={6}
									keyExtractor={(item, index) => index.toString()}
									renderItem={({ item, index }) => <BallComponent number={index + 1} type={0} key={index} />}
								/>
							</View>
							<View style={Styles.pickerLayer}>
								<View style={Styles.headerPicker}>
									<Text style={Styles.headerText}>Pick 1 number from 1 to 20</Text>
								</View>
								<View style={Styles.numberView}>
									<FlatList
										style={Styles.listView2}
										data={test2}
										numColumns={6}
										keyExtractor={(item, index) => index.toString()}
										renderItem={({ item, index }) => <BallComponent number={index + 1} type={0} key={index} />}
									/>
								</View>
							</View>
						</View>
					</ScrollView>
				</View>
				<View style={Styles.saveView}>
					<TouchableOpacity
						style={Styles.btnSave}>
						<Text style={Styles.saveText}>Cancel</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={Styles.btnSave}>
						<Text style={Styles.saveText}>Save</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Dialog>
	);
})

export default PickNumberModal;