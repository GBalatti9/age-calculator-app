import { useState } from "react";

let months = [
    {
        name: 'January',
        days: 31
    },
    {
        name: 'February',
        days: 28
    },
    {
        name: 'March',
        days: 31
    },
    {
        name: 'April',
        days: 30
    },
    {
        name: 'May',
        days: 31
    },
    {
        name: 'June',
        days: 30
    },
    {
        name: 'July',
        days: 31
    },
    {
        name: 'August',
        days: 31
    },
    {
        name: 'September',
        days: 30
    },
    {
        name: 'October',
        days: 31
    },
    {
        name: 'November',
        days: 30
    },
    {
        name: 'December',
        days: 31
    },
]

let birthdate = {
    day: "--",
    month: "--",
    year: "--",
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
            day: ageDay,
            month: ageMonth,
            year: ageYear,
        }

        setBirthDate(outputAge);
    }

    return {
        onFormSubmit,
        birthDate,
    }
}

// if ((todayMonth > month) || (todayMonth === month && todayDay >= day)) {
//     ageYear = todayYear - year;
//     ageMonth = todayMonth - month;
// } else {
//     ageYear = todayYear - year - 1;
//     ageMonth = months.length - (month - todayMonth);
// }

// if(todayDay < day) {
//     let partialDay = (day - todayDay);
//     console.log({partialDay});
// }

        // if(todayDay < birthday){

        //     let partialDay = todayDay - birthday;
        //     let findLastCompleteMonth = months[todayMonth - 1];

        //     findLastCompleteMonth.days !== todayDay 
        //     ? ageDay = findLastCompleteMonth.days + partialDay : '';

        //     console.log(findLastCompleteMonth);
        //     console.log(todayMonth, todayDay);
        // } else if (todayDay > birthday){
            
        // }