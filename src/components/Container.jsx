import { handleInputs } from "../helpers/handleInputs"
import { Form } from "./Form"
import { Result } from "./Result"


export const Container = () => {

    const { onFormSubmit, birthDate } = handleInputs();

    return (
        <>
            <Form onFormSubmit={onFormSubmit} />
            <Result birthDate={birthDate} />
        </>
    )
}
