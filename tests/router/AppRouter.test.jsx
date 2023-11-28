import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";

describe('Pruebas en <AppRouter />', () => {

    test('Debe de mostrar el login si no esta autenticado', () => {

        const contextValue = {
            authState : {                
                logged: false,
            }
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>

            </MemoryRouter>
        );

        //screen.debug();

        expect(screen.getAllByText('Login').length).toBe(2)


    });

    test('Debe de mostrar el componente de Marvel si esta autenticado', () => { 

        const contextValue = {
            authState: {
                logged: true,
                name: 'Strider',
                id: 'ABC123'
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>

            </MemoryRouter>
        );

        //screen.debug();
    
        expect(screen.getByText('Marvel Comics')).toBeTruthy()
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1)

     })
})  