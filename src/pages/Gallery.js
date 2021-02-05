import React, { useEffect, useState } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
// import Row from "../components/Row";
import UserContext from "../utils/userContext";
import SearchBar from "../components/SearchBar";

const Gallery = () => {
    const [developerState, setDeveloperState] = useState ({
        users: [],
        order: "descend",
        filteredUsers: [],
        headings: [
            { name: "Image", width: "10%", order: "descend" },
            { name: "name", width: "10%", order: "descend" },
            { name: "phone", width: "25%", order: "descend" },
            { name: "email", width: "25%", order: "descend" },
            { name: "dob", width: "10%", order: "descend" },
        ]
    });

    const handleSort = heading => {
        let currentOrder = developerState.headings.filter(elem => elem.name === heading).map(elem => elem.order).toString();

        if (currentOrder === "descend") {
            currentOrder = "ascend";
        } else {
            currentOrder = "descend";
        }


    }

    const handleSearch = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
            let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
            if(values.indexOf(filter.toLowerCase()) !== -1) {
                return item
            };
        });
        setDeveloperState({...developerState, filteredUsers: filteredList});
    };

    useEffect(() => {
        API.getUsers().then(results => {
            setDeveloperState({
                ...developerState,
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }, []);


    return (
        <UserContext.Provider value ={{developerState, handleSearch, handleSort}}>
            <div>
                <SearchBar />
                <CardContainer />
            </div>
        </UserContext.Provider>
    )
}

export default Gallery;
