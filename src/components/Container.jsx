import { handleInputs } from "../helpers/handleInputs"
import { Form } from "./Form"
import { Result } from "./Result"


export const Container = () => {

    const { onFormSubmit, birthDate, inputProps } = handleInputs();

    return (
        <div className="bg-secondary-subtle bg-size d-flex align-items-center justify-content-center">
            <div className="container bg-white border custom-border-radius size shadow">
                <Form onFormSubmit={onFormSubmit} inputProps = { inputProps }/>
                <hr className="border border-dark border-1 opacity-50 custom-border" />
                <Result birthDate={birthDate} />
            </div>
        </div>
    )
}
