import { useState } from "react";


export const checkInputs = () => {

    let btn = document.getElementById('btn');
    // btn.disabled = true;
    // btn.style.backgroundColor = 'grey';
    // btn.style.color = 'black';
    // btn.style.opacity = '100%';

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
        console.log(name);
        
        if (name === 'day') {
            const inputDay = document.getElementById('day');
            let value = Number(inputDay.value)
            inputDay.classList.remove('border-success', 'border-danger');
            value > 0 ?
            inputDay.classList.add('border', 'border-success'):
            inputDay.classList.add('border', 'border-danger');
        }
        if (name === 'month') {
            const inputMonth = document.getElementById('month');
            let value = Number(inputMonth.value);
            inputMonth.classList.remove('border-success', 'border-danger');
            value > 0 ?
            inputMonth.classList.add('border', 'border-success'):
            inputMonth.classList.add('border', 'border-danger');
        }
        if (name === 'year') {
            const inputYear = document.getElementById('year');
            let value = Number(inputYear.value);
            inputYear.classList.remove('border-success', 'border-danger');
            value > 0 ?
            inputYear.classList.add('border', 'border-success'):
            inputYear.classList.add('border', 'border-danger');
        }
    }

    return {
        onCheckInputs,
        errors,
    }

}
