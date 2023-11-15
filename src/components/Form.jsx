import { checkInputs } from "../helpers/checkInputs"


export const Form = ({ onFormSubmit, inputProps }) => {

    const { errors, onCheckInputs } = checkInputs();

    return (
        <>
            <form action="" onSubmit={onFormSubmit} className="d-flex p-4 form-width align-items-center custom-form">

                {
                    inputProps.map((input, i) => (
                        <div key={ input + i }>
                            <label htmlFor={input} className="text-uppercase light-grey custom-label">{input}</label>
                            <br />
                            <input type="number" name={input} id={input} onInput={onCheckInputs} 
                                className={
                                    `form-control input-font input-width`} />
                        </div>
                    ))
                }

                <div className="btn-container">
                    <button className="btn bg-purple custom-btn z-1" id="btn"> Send </button>
                </div>

            </form>
        </>
    )
}
