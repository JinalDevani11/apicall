import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Ablums(){
    let [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(function (response) {
            // handle success
            console.log(response.data);
            setdata(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    },[])
    return(
        <>
       <Header></Header>
            <h1 className="text-center p-3">Albums page...</h1>
            <Table bordered>
                <thead className="table_post">
                    <tr className="text-center">
                        <th>Id</th>
                        <th>Userid</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        data.map((ele, ind) => (
                            <tr key={ind}>
                                <td>{ele.userId}</td>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    )
}
export default Ablums;

