import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { ActivityIndicator, Alert, Button, Text, useColorScheme, View } from "react-native";
import { useStore } from "../../stores/store";





export default observer(function Test() {

    const { testStore } = useStore();
    const { testInfo, loading, loadTest} = testStore;

    const text = {
        color: useColorScheme() === 'dark' ? '#000000' : '#ffffff'
    }


    useEffect(() => {
        if (!testInfo) loadTest();
    }, []);





    if (!testInfo || loading) return (<View><ActivityIndicator size='large' color='#00ff00' /></View>);

    return (<View>
        <Text style={text}>{testInfo._id}</Text>
        <Text style={text}>{testInfo.content}</Text>


    </View>);
});

/*

 */