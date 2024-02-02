import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';


function Photos() {
    let [data, setdata] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
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
    return (
        <>
            <Header></Header>
            <Container>
                <h1 className="text-center p-3">Photos page...</h1>
                <div className="card_photo text-center">
                    {
                        data.map((ele, ind) => {
                            return (
                                <Card>
                                    <Card.Img variant="top" src={ele.url} />
                                    <Card.Body>
                                        <Card.Title>{ele.albumId}</Card.Title>
                                        <Card.Title>{ele.id}</Card.Title>
                                        <Card.Title>{ele.title}</Card.Title>
                                        <Card.Text>
                                            {ele.thumbnailUrl}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            );
                        })
                    }
                </div>
            </Container>
        </>
    )
}
export default Photos;