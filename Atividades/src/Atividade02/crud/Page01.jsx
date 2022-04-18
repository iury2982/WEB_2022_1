import React from "react";
import { Link } from "react-router-dom";

function Page01 () {
    return (
        <>
            <main>
                <h2>
                    Page 01
                </h2>
            </main>
        <nav>
            <Link to = '/'>Home</Link>
        </nav>
        </>
    );
}

export default Page01
