type Props = {
    firstName: string,
    lastName: string,
    age: number,
    isStudent: boolean
}

const Info = (props: Props) =>{
    return(
        <div>
            <li>Name: {props.firstName} {props.lastName}</li>
            <li>Age: {props.age}</li>
            <li>Is student: {props.isStudent ? 'Yes' : 'No'}</li>
        </div>
    )
}

export default Info