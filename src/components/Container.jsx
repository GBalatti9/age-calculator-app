import { handleInputs } from "../helpers/handleInputs"
import { Form } from "./Form"
import { Result } from "./Result"


export const Container = () => {

    const { onFormSubmit, birthDate } = handleInputs();

    return (
        <div className="bg-secondary-subtle bg-size">
            <div className="container bg-white border custom-border-radius">
                <Form onFormSubmit={onFormSubmit} />
                <hr />
                <Result birthDate={birthDate} />
            </div>
        </div>
    )
}
