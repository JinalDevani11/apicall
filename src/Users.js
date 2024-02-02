import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Users() {
    let [data, setdata] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
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
            <h1 className="text-center p-3">Users page...</h1>
            <Table bordered>
                <thead className="table_post">
                    <tr className="text-center">
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        data.map((ele, ind) => (
                            <tr key={ind}>
                                <td>{ele.id}</td>
                                <td>{ele.name}</td>
                                <td>{ele.username}</td>
                                <td>{ele.email}</td>
                                <table>
                                    <tr>
                                        <td><b>suite:-</b><font>{ele.address.suite}</font></td>
                                    </tr>
                                    <tr>
                                        <td><b>city:-</b><font>{ele.address.city}</font></td>
                                    </tr>
                                    <tr>
                                        <td><b>zipcode:-</b><font>{ele.address.zipcode}</font></td>
                                    </tr>
                                    <tr>
                                        <td><b>geo:-</b><font>{ele.address.geo.lat}</font></td>
                                    </tr>
                                    <tr>
                                        <td><font>{ele.address.geo.lng}</font></td>
                                    </tr>
                                </table>
                                <td>{ele.phone}</td>
                                <td>{ele.website}</td>
                                <table>
                                    <tr>
                                        <td><b>Name:-</b><font>{ele.company.name}</font></td>
                                    </tr>
                                    <tr>
                                        <td><b>catchPhrase:-</b><font>{ele.company.catchPhrase}</font></td>
                                    </tr>
                                    <tr>
                                        <td><b>bs:-</b><font>{ele.company.bs}</font></td>
                                    </tr>
                                </table>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
export default Users;

