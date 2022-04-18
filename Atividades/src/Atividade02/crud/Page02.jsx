import React from "react";
import { Link, useParams } from "react-router-dom";

function Page02 () {

    let params = useParams()

    return (
        <>
            <main>
                <h2>
                    Page 02, id: {params.id}
                </h2>
            </main>
        <nav>
            <Link to = '/'>Home</Link>
        </nav>
        </>
    );
}

export default Page02
