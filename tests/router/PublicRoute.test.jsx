import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRouter } from "../../src/router/PublicRouter"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Pruebas en <PublicRoute />', () => {

    test('Debe de mostrar el children si no esta autenticado', () => {

        const contextValue = {
            authState: {
                logged: false
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRouter>
                    <h1>Ruta pública</h1>
                </PublicRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta pública')).toBeTruthy()
        //screen.debug()
    })

    test('Debe de navegar si esta autenticado', () => {


        const contextValue = {
            authState: {
                logged: true,
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="/login" element ={
                            <PublicRouter>
                                  <h1>Ruta pública</h1>
                            </PublicRouter>
                        }/>
                        <Route path='/' element= {<h1>Página Marvel</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        //screen.debug();
        expect(screen.getByText('Página Marvel')).toBeTruthy();
    })
})