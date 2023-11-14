

export const Result = ({ birthDate }) => {
    let { year, day, month } = birthDate;
    return (
        <div className="p-4">
            <h2 className="font">
                <span className="purple">{year} </span>
                years </h2>
            <h2 className="font">
                
                <span className="purple">{month} </span>
                months </h2>
            <h2 className="font">
                <span className="purple">{day} </span>
                days </h2>
        </div>
    )
}
