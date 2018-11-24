import React, { PureComponent } from 'react';
import { WebView, View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';

type Props = {
    data: {} | null,
    onCloseHandler: () => void,
};

class WebViewModal extends PureComponent<Props> {
    render() {
        const { data, closeHandler } = this.props;

        if (!data) {
            return null;
        }

        const source = { uri: data.url };

        return (
            <Modal
                animationType='slide'
                visible={true}
                transparent={true}
            >
                <View style={styles.container}>
                    <View style={styles.modal}>
                        <TouchableOpacity
                            style={styles.close}
                            onPress={closeHandler}
                        >
                            <Text style={styles.closeText}>X</Text>
                        </TouchableOpacity>
                        <WebView source={source} />
                    </View>
                </View>
            </Modal>
        )
    }
}

export default WebViewModal;