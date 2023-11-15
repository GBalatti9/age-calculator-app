import { useState, useEffect, useRef } from "react";

export const checkInputs = () => {
    const [errors, setErrors] = useState({
        day: '',
        month: '',
        year: '',
    });

    const checkErrors = () => {
        if (inputDay.current.classList.contains('border-danger') 
            || inputMonth.current.classList.contains('border-danger')
            || inputYear.current.classList.contains('border-danger') ) {
            btn.current.disabled = true;
        } else {
            btn.current.disabled = false;
        }
    }
    const inputDay = useRef(null);
    const inputMonth = useRef(null);
    const inputYear = useRef(null);
    const btn = useRef(null);

    useEffect(() => {
        inputDay.current = document.getElementById('day');
        inputMonth.current = document.getElementById('month');
        inputYear.current = document.getElementById('year');
        btn.current = document.getElementById('btn');

        const onCheckInputs = ({ target }) => {
            const { name } = target;
            console.log(name);

            if (name === 'day') {
                let value = Number(inputDay.current.value)
                inputDay.current.classList.remove('border-success', 'border-danger');
                value > 0 ?
                    inputDay.current.classList.add('border', 'border-success') :
                    inputDay.current.classList.add('border', 'border-danger');
                checkErrors();
            }
            if (name === 'month') {
                let value = Number(inputMonth.current.value);
                inputMonth.current.classList.remove('border-success', 'border-danger');
                value > 0 ?
                    inputMonth.current.classList.add('border', 'border-success') :
                    inputMonth.current.classList.add('border', 'border-danger');
                checkErrors();
            }
            if (name === 'year') {
                let value = Number(inputYear.current.value);
                inputYear.current.classList.remove('border-success', 'border-danger');
                value > 0 ?
                    inputYear.current.classList.add('border', 'border-success') :
                    inputYear.current.classList.add('border', 'border-danger');
                checkErrors();
            }
        };

        inputDay.current.addEventListener('input', onCheckInputs);
        inputMonth.current.addEventListener('input', onCheckInputs);
        inputYear.current.addEventListener('input', onCheckInputs);
    }, []);

    return {
        errors,
    };
};
