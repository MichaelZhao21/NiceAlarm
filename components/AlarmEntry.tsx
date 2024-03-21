import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Appearance, Pressable, StyleSheet, Text, View } from 'react-native';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { darkTheme, lightTheme } from '../theme';

dayjs.extend(customParseFormat);

const isDarkMode = Appearance.getColorScheme() === 'dark';
const theme = isDarkMode ? darkTheme : lightTheme;

const AlarmEntry = () => {
    const [time, setTime] = useState('12:00 pm');

    // Opens the datetime picker to select a time
    const openTimePicker = () => {
        DateTimePickerAndroid.open({
            value: new Date(dayjs(time, 'h:mm a').valueOf()),
            mode: 'time',
            is24Hour: false,
            onChange: (event, selectedTime) => {
                if (event.type === 'set' && selectedTime != null) {
                    const hours = selectedTime.getHours();
                    const minutes = selectedTime.getMinutes();
                    const newTime = dayjs(`${hours}:${minutes}`, 'H:mm').format('h:mm a');
                    setTime(newTime);
                }
            },
        });
    };

    return (
        <View>
            <Text style={styles.sectionText}>Alarm</Text>
            <Pressable onPress={openTimePicker}>
                <Text style={styles.timeButton}>{time}</Text>
            </Pressable>
            <View style={styles.dateContainer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    sectionText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dateContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    timeButton: {
        fontSize: 40,
        fontWeight: 'bold',
        color: theme.text,
        textAlign: 'center'
    },
});

export default AlarmEntry;
