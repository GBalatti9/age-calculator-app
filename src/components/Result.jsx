

export const Result = ({ birthDate }) => {
    let { year, day, month } = birthDate;
    return (
        <>
        <h2> { year } years </h2>
        <h2> { month } month </h2>
        <h2> { day } day </h2>
        </>
    )
}
