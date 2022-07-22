import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';

export default function AddPhoto({ navigation }) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(CameraType.back);

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');

            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setHasGalleryPermission(galleryStatus.status === 'granted');

        })();
    }, []);

    const takePicture = async () => {
        if(camera) {
            const data = await camera.takePictureAsync(null);
            setImage(data.uri);
        }
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    if (hasCameraPermission === null || hasGalleryPermission === false) {
        return <View />;
    }
    if (hasCameraPermission === false || hasGalleryPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                <Camera
                    ref={ref => setCamera(ref)}
                    style={styles.fixedRatio} 
                    type={type}
                    ratio={'1 : 1'} />
            </View>
            
            <Button
                title="Flip Image"
                onPress={() => {
                    setType(type === CameraType.back ? CameraType.front : CameraType.back);
                }}>
            </Button>
            <Button title="Take Picture" onPress={() => takePicture()}/>
            <Button title="Pick Image from Gallery" onPress={() => pickImage()}/>
            <Button title="Save Image" onPress={() => navigation.navigate('AddItem', {image})} />
            {image && <Image source={{uri: image}} style={{flex: 1}}/> }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    cameraContainer: {
        flex: 1
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1,
    },
});