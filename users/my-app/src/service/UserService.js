import User from './../entities/User'
import { BASE_URL } from '../shared/constants';

class UserService {

    fetchUsers() {
        return fetch(`${BASE_URL}/?results=15`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                const userData = data.results
                const myUsers = userData.map((user) => {
                    return new User(user)
                })

                return myUsers
            })
    }
}

export const userService = new UserService()