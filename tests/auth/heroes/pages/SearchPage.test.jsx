import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../../src/heroes/pages/SearchPage"

describe('Pruebas en <SearchPage />', () => { 

    test('Debe de mostrarse correctamente con valores por defecto', () => { 

        const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )
        expect(container).toMatchSnapshot();
        //screen.debug()
     })


     test('Debe de msotrar a batman y el input con el valor del queryString', () => { 

        const {container} = render(
            <MemoryRouter initialEntries={['search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
        //expect(container).toMatchSnapshot();
        //screen.debug()

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');
        
        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
        
        const alert = screen.getByTestId('alert-danger')
        expect(alert.style.display).toBe('none')
        


     })
 })