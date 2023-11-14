import { handleInputs } from "../helpers/handleInputs"
import { Form } from "./Form"
import { Result } from "./Result"


export const Container = () => {

    const { onFormSubmit, birthDate } = handleInputs();

    return (
        <div className="bg-secondary-subtle bg-size d-flex align-items-center justify-content-center">
            <div className="container bg-white border custom-border-radius size">
                <Form onFormSubmit={onFormSubmit} />
                <hr />
                <Result birthDate={birthDate} />
            </div>
        </div>
    )
}
