import { fireEvent, render, screen } from "@testing-library/react"
import { Navbar } from "../../../src/ui"
import { AuthContext } from "../../../src/auth"
import { MemoryRouter, Route, Routes, useNavigate } from "react-router-dom"

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate:() =>  mockedUseNavigate,
}))

describe('Preuebas en <Navbar />', () => {

    const authState = {
        logged: true,
        user: {
            name: 'Strider',
            id: 'ABC123'
        }
    }


    const logout = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('Debe de mostrar el nombre del usuario', () => {



        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={{ authState, logout }}>
                    <Routes>
                        <Route path='/*' element={<Navbar />} />
                    </Routes>
                </AuthContext.Provider>
            </MemoryRouter>
        )
        //screen.debug()
        expect(screen.getByText('Strider')).toBeTruthy()

    })

    test('Debe de llamar el logout y navigate cuando se hace click en el boton', () => {

        render(
            <MemoryRouter initialEntries={['/']}>
                <AuthContext.Provider value={{ authState, logout }}>
                    <Routes>
                        <Route path='/*' element={<Navbar />} />
                    </Routes>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const btnLogout = screen.getByLabelText('btnLgout')
        fireEvent.click(btnLogout)
        expect(logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {"replace": true})
    })
})