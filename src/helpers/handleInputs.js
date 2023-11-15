import { useState } from "react";
import months from '../database/months.json';

let birthdate = {
    day: "0 days",
    month: "0 months",
    year: "0 years",
}

const today = {
    todayDay: new Date().getDate(),
    todayMonth: new Date().getMonth() + 1,
    todayYear: new Date().getFullYear(),
}

export const handleInputs = () => {

    const [birthDate, setBirthDate] = useState(birthdate);

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const dayForm = parseInt(formData.get('day'));
        const monthForm = parseInt(formData.get('month'));
        const yearForm = parseInt(formData.get('year'));

        birthdateToAge(today, dayForm, monthForm, yearForm);

    }

    const birthdateToAge = ( todayObj, birthday, birthmonth, birthyear ) => {

        const { todayDay, todayMonth, todayYear } = todayObj;

        console.log({todayMonth});
        let ageYear = 0;
        let ageMonth = 0;
        let ageDay = 0;

        // This if handles the case in which the user has already had a birthday in the year. 
        // If he hasn't then the else is going to take care of it.
        if (( todayMonth > birthmonth ) || ( todayMonth === birthmonth && todayDay >= birthday )) {
            ageYear = todayYear - birthyear;
            ageMonth = todayMonth - birthmonth;
        } else { 
            ageYear = todayYear - birthyear - 1;
            ageMonth = months.length + (todayMonth - birthmonth);
        }

        if(todayDay >= birthday){
            ageDay = todayDay - birthday;
        } else {
            // let lastCompleteMonth = months[todayMonth - 2].days;
            // ageMonth = todayMonth - 1;
            ageMonth--;
            ageDay = months[todayMonth - 2].days + (todayDay - birthday);
        }


        const outputAge = {
            day: `${ageDay} days`,
            month: `${ageMonth} months`,
            year: `${ageYear} years`,
        }

        setBirthDate(outputAge);
    }

    return {
        onFormSubmit,
        birthDate,
        inputProps: Object.keys(birthdate),
    }
}
