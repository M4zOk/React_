import React, {FormEvent, useState} from 'react';
import { useParams } from 'react-router-dom';

type Post = {
    id2: string;
    userID: string;
    body: string;
    title: string;
}

type Post2={
    name: string;
    email: string;

}

function Task() {

    const [id2, setId] = useState("");
    const [post, setPost]= useState<Post | undefined> ();
    const [post2, setPost2]= useState<Post2 | undefined> ();

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id2}`);
        const data = await response.json();
        setPost(data);

        const response2 = await fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
        const data2 = await response2.json();
        setPost(data);
        setPost2(data2);
        console.log(data);

    };

    return <>
        <div>
            <form onSubmit={onSubmit}>
                <h3>API</h3>
                <h1>
                    ID:<input value={id2} onChange={e => setId(e.target.value)}/>
                </h1>

                <button>Получить данные!</button><br/>

                <b>{post?.title}</b><br/>
                {post?.body}
                <br/>
                <br/>
                <b>{post2?.name}</b><br/>
                {post2?.email}
            </form>

        </div>
    </>;
}

export default Task;