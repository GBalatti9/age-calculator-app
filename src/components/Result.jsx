

export const Result = ({ birthDate }) => {
    let values = Object.values(birthDate).map((value, i) => value.split(' '));
    console.log(values);
    return (
        <div className="p-4">
            {
                values.map((value, i) => (
                    <h2 className="font">
                        <span className="purple">{ value[0] } </span>
                        { value[1] }
                    </h2>
                ))
            }
        </div>
    )
}
