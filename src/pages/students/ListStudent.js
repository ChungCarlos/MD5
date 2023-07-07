import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export function ListStudent() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8888/api/v1/student/all').then(res => {
            setList(res.data)
        })
    }, [])
    return (
        <>
            <h1>List...</h1>
            {list.map((item,key) => {
                return (
                    <Link to={'/edit-student/'+item.id}>
                    <h3>{item.id}, {item.name}, {item.age}, {item.email}</h3></Link>
                )
            })
            }
        </>
    )
}