import React, { useEffect, useState } from "react";
import ClientContact from "../../components/ClientContact";
import { getContacts } from "../../apis/contacts";

function ClientContactContainer() {
    let [data, setData] = useState([]);
    let [search, setSearchQuery] = useState(null);
    let [{ name, selected }, handleAdvancedFilter] = useState({ name: null, selected: [] })

    useEffect(() => {
        getContacts({ search, name, selected }, function ({ data }) {
            setData(data);
        });
    }, [search, name, selected]);


    return (
        <ClientContact data={data} data-testid="clientcontact" search={setSearchQuery} advanceFilters={handleAdvancedFilter}></ClientContact>
    )
}

export default ClientContactContainer;