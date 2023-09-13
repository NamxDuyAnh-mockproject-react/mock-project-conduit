import { conduitAxios } from "../axios-instance";

export const fetchRegisterUser = async (userData) => {
    try {
        const response = await conduitAxios.post('users', {
            user: userData,
        });
        return response.data
    } catch (error) {
        return { error: error.mesage }
    }
}