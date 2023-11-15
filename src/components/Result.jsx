

export const Result = ({ birthDate }) => {
    let values = Object.values(birthDate).map((value) => value.split(' '));

    [values[0], values[2]] = [values[2], values[0]];

    return (
        <div className="p-4">
            {
                values.map((value, i) => (
                    <h2 className="font" key={ value + i }>
                        <span className="purple">{ value[0] } </span>
                        { value[1] }
                    </h2>
                ))
            }
        </div>
    )
}
