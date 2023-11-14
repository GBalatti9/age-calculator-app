import { useState } from "react";


export const checkInputs = () => {

    const [errors, setErrors] = useState({
        day: '',
        month: '',
        year: '',
    });

    const updateErrors = (obj, name, str) => {

        setErrors({
            ...obj,
            [name]: str
        })

    }

    const onCheckInputs = ({ target }) => {

        const { name } = target;
        
        if (name === 'day') {
            const inputDay = document.getElementById('day');
            inputDay.value > 0 ? updateErrors(errors, name, '') : updateErrors(errors, name, 'Cannot be empty');
        }
        if (name === 'month') {
            const inputMonth = document.getElementById('month');
            inputMonth.value > 0 ? errors.month : updateErrors(errors, name, 'Cannot be empty');
        }
        if (name === 'year') {
            const inputYear = document.getElementById('year');
            inputYear.value > 0 ? errors.year : updateErrors(errors, name, 'Cannot be empty');
        }
    }

    return {
        onCheckInputs,
        errors,
    }

}
