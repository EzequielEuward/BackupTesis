import { Form, FormControl, InputGroup } from 'react-bootstrap'
import { SearchIcon } from '../icons/Icons';


export const FormSearchStudio = () => {

    const onClick = () => {
        document.querySelector('input').select();
    }
    return (
        <>
            <Form>
                <InputGroup className="mb-3">
                    <InputGroup.Text onClick={onClick}>
                        <SearchIcon />
                    </InputGroup.Text>
                    <FormControl
                        type="search"
                        placeholder="Buscar Paciente"
                        
                    />
                </InputGroup>
            </Form>
        </>
    )
}



export default FormSearchStudio
