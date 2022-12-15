import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import Post from "../models/post";
import EncryptedStorage from 'react-native-encrypted-storage';
import { stringifyKey } from "mobx/dist/internal";


export default class testStore {

    loading = true;
    testInfo: Post | undefined = undefined;

    constructor() {
        makeAutoObservable(this);
    }

    loadTest = async () => {
        this.setLoading(true);
        try {
            const info = await agent.Test.test();

            if (info) this.testInfo = info;
            this.setLoading(false);

        } catch (error) {
            console.log(error);
            this.setLoading(false);
        }
    }
    btnPress = (navigation: any) =>{
        navigation.navigate('Home');
    }

    setToken = async (token: string): Promise<void> => {
        try {

            await EncryptedStorage.setItem('userSession', JSON.stringify({
                _id: token
            }));


        } catch (e) {
            console.log(e);
        }
    }
    deleteToken = async (): Promise<void> => {
        try {
            await EncryptedStorage.removeItem('Value');
        } catch (e) {
           console.warn(e); 
        }
    }

    getToken = async(): Promise<string> => {
        try {
            const session = await EncryptedStorage.getItem('userSession');

            if(session !== null){
                return session;
            }
            else{
                return "Session info does not exist";
            }
        } catch (e) {
            return "Error";
        }
        
    }
    removeToken = async(): Promise<void> => {
        try {
            await EncryptedStorage.removeItem('Value');
        } catch (e) {
            console.log(e);
        }
    }


    setLoading = (state: boolean) => {
        this.loading = state;
    }
}