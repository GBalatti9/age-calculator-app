import { checkInputs } from "../helpers/checkInputs"


export const Form = ({ onFormSubmit }) => {

    const { errors, onCheckInputs } = checkInputs();
    console.log(errors);

    return (
        <>
        <form action="" onSubmit={onFormSubmit} className="d-flex p-4 form-width align-items-center custom-form">
            <div>
            <label htmlFor="day" className="text-uppercase light-grey custom-label">Day</label>
            <br />
            <input type="number" name="day" id="day" max="31" onInput={ onCheckInputs } className="form-control input-font input-width"/>
            {/* <br /> */}
            { errors.day }
            </div>
            <div>
            <label htmlFor="Month" className="text-uppercase light-grey custom-label">Month</label>
            <br />
            <input type="number" name="month" id="month" max={12} onInput={ onCheckInputs } className="form-control input-font input-width"/>
            { errors.month }
            </div>
            <div>
            <label htmlFor="Year" className="text-uppercase light-grey custom-label">Year</label>
            <br />
            <input type="number" name="year" id="year" max={2023} onInput={ onCheckInputs } className="form-control input-font input-width"/>
            { errors.year }
            </div>

            <div className="btn-container">
            <button className="btn bg-purple custom-btn"> Send </button>
            </div>

        </form>
        </>
    )
}
