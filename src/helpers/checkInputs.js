import { useState, useEffect, useRef } from "react";
import months from '../database/months.json';

export const checkInputs = () => {
    const [errors, setErrors] = useState();

    const validateDays = () => {
        let valueDays = Number(inputDay.current.value);

        let valueMonth = Number(inputMonth.current.value);
        if (valueMonth) {
            let allowedDays = checkDaysInMonth(valueMonth);
            if (allowedDays) {
                if (valueDays > 0 && valueDays <= allowedDays) {
                    inputDay.current.classList.add('border', 'border-success');
                } else {
                    inputDay.current.classList.add('border', 'border-danger');
                }
            }
        }
    };

    const validateErrors = () => {
        if (
            inputDay.current.classList.contains('border-danger')
            || inputMonth.current.classList.contains('border-danger')
            || inputYear.current.classList.contains('border-danger')
            || !inputDay.current.value
            || !inputMonth.current.value
            || !inputYear.current.value) {
            btn.current.disabled = true;
        } else {
            btn.current.disabled = false;
            btn.current.classList.add('bg-purple');
        }
    }

    const checkDaysInMonth = (month) => {
        if(month > months.length) return;

        return months[month - 1].days;
    }

    const validateYear = () => {
        const todaysYear = new Date().getFullYear();
        const valueYear = Number(inputYear.current.value);
        console.log({ todaysYear, valueYear });

        if (valueYear > 0 && valueYear <= todaysYear) {
            inputYear.current.classList.add('border', 'border-success');
        } else {
            inputYear.current.classList.add('border', 'border-danger');

        }

    }

    const validateMonths = () => {
        let valueMonth = Number(inputMonth.current.value);
        valueMonth > 0 && valueMonth <= 12 ?
            inputMonth.current.classList.add('border', 'border-success') :
            inputMonth.current.classList.add('border', 'border-danger');

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
        btn.current.disabled = true;
        

        // btn.current.classList.add('btn-disabled');


        const onCheckInputs = ({ target }) => {
            const { name } = target;
            console.log(name);

            if (name === 'day') {
                let value = Number(inputDay.current.value)
                inputDay.current.classList.remove('border-success', 'border-danger');
                value > 0 ?
                    inputDay.current.classList.add('border', 'border-success') :
                    inputDay.current.classList.add('border', 'border-danger');
                validateDays();
                validateErrors();
            }
            if (name === 'month') {
                inputMonth.current.classList.remove('border-success', 'border-danger');
                validateMonths();
                validateDays();
                validateErrors();
            }
            if (name === 'year') {
                validateYear();
                validateErrors();
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
