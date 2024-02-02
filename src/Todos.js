import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Todos() {
    let [data, setdata] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])
    return (
        <>
            <Header></Header>
            <h1 className="text-center p-3">Todos page...</h1>
            <Table bordered>
                <thead className="table_post">
                    <tr className="text-center">
                        <th>Id</th>
                        <th>Userid</th>
                        <th>Title</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        data.map((ele, ind) => (
                            <tr key={ind}>
                                <td>{ele.userId}</td>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                <td>{ele.completed?"True":"False"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
export default Todos;