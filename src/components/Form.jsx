import { checkInputs } from "../helpers/checkInputs"


export const Form = ({ onFormSubmit }) => {

    const { errors, onCheckInputs } = checkInputs();
    console.log(errors);

    return (
        <>
        <h3>Enter your birthdate</h3>
        <form action="" onSubmit={onFormSubmit}>
            <div>
            <label htmlFor="day">Day</label>
            <br />
            <input type="number" name="day" id="day" max="31" onInput={ onCheckInputs }/>
            <br />
            { errors.day }
            </div>
            <div>
            <label htmlFor="Month">Month</label>
            <input type="number" name="month" id="month" max={12} onInput={ onCheckInputs }/>
            { errors.month }
            </div>
            <div>
            <label htmlFor="Year">Year</label>
            <input type="number" name="year" id="year" max={2023} onInput={ onCheckInputs }/>
            { errors.year }
            </div>

            <button> Enviar </button>
        </form>
        </>
    )
}
