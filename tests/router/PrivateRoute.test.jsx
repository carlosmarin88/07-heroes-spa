import { render, screen } from "@testing-library/react"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"

describe('Pruebas en el <PrivateRoute/>', () => {

    test('Dene de mostrar el children si esta autenticado', () => {


        //usar asi en vez de localstorage porque no funciona
        Storage.prototype.setItem = jest.fn()


        const contextValue = {
            authState: {
                logged: true,
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>

            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta privada')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath","/")

    })
})