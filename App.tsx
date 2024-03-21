/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Appearance,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import AlarmEntry from './components/AlarmEntry';
import { darkTheme, lightTheme } from './theme';

const isDarkMode = Appearance.getColorScheme() === 'dark';
const theme = isDarkMode ? darkTheme : lightTheme;

function App(): React.JSX.Element {

    return (
        <SafeAreaView>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={styles.background.backgroundColor}
            />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={styles.container}>
                    <AlarmEntry />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: theme.background,
    },
    container: {
        margin: 20,
    }
});

export default App;
