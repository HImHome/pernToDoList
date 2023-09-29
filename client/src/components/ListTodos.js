import React, {Fragment, useState, useEffect} from "react";

const ListTodos = () => {
    
    async function getTodos () {
        const res = await fetch("http://localhost:5000/todos");

        const todoArray = await res.json();
        console.log(todoArray);
    }

    useEffect(()=>{
 
    },[]);

    return (
        <Fragment>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/*tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                */}
                </tbody>
            </table>
        </Fragment>)
}

export default ListTodos;