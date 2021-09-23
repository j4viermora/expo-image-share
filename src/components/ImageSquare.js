import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Sharing from 'expo-sharing';

export default function ImageSquare({ selectImage }) {
	const openShareDialogAsync = async () => {
		if (!(await Sharing.isAvailableAsync())) {
			alert('Ups, sharing is not available on your platform');
			return;
		}

		await Sharing.shareAsync(selectImage.localUri);
	};

	return (
		<View>
			<Image
				source={{ uri: selectImage.localUri }}
				style={styles.thumbnail}
			/>
			<TouchableOpacity
				onPress={openShareDialogAsync}
				style={styles.button}>
				<Text style={styles.buttonText}>Share this photo</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	thumbnail: {
		width: 300,
		height: 300,
		resizeMode: 'contain',
	},
	button: {
		backgroundColor: 'blue',
		padding: 20,
		borderRadius: 5,
	},
	buttonText: {
		fontSize: 20,
		color: '#fff',
	},
});
