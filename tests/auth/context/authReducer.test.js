import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Prueba en authReducer', () => {

    const initialState = {
        logged: false,
    }

    const user = { id: 'ABC', name: 'Carlos' }


    test('Debe de retornar el estado por defecto', () => {

        const defaultState = authReducer(initialState, {})
        expect(defaultState.logged).toBeFalsy()

    })

    test('Debe de (login) llamar el login autenticar y establecer el user', () => {
        
        const loginAction = {
            type : types.login,
            payload: {
                ...user
            }
        }
        
        const state = authReducer(initialState, loginAction)
        expect(state.logged).toBeTruthy()
        expect(state.user).toEqual(user)
    })

    test('Debe de logout borrar el name del usuario y logged en false', () => {

        const loginAction = {
            type : types.login,
            payload: {
                ...user
            }
        }
        
        const stateLogin = authReducer(initialState, loginAction)
        expect(stateLogin.logged).toBeTruthy()


        const logoutAction = {
            type : types.logout,
        }

        const stateLogout = authReducer(stateLogin, logoutAction)
        expect(stateLogout.logged).toBeFalsy()

    })
})