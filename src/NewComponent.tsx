import React from 'react';

type NewComponentType = {
    students: Array<StudentsType>
}

type StudentsType = {
    id: number, name: string, age: number
}
export const NewComponent = (props: NewComponentType) => {

    return (
        <div>
            <ul>
                {props.students.map((objectFromStudentArray, index) => {
                    return (<li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span> age: {objectFromStudentArray.age}</span>
                    </li>)
                })}
                <li>wqwqw</li>
                <li>wwqwq</li>
                <li>qwqw</li>
            </ul>


            <table>
                {props.students.map((st, index) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{st.name}</td>
                            <td>{st.age}</td>
                        </tr>)

                })}
            </table>
        </div>
    );
};


