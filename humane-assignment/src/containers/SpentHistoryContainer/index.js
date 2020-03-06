import React, { useState, useEffect } from "react";
import SpentHistory from "../../components/SpentHistory";
import { Button } from "reactstrap";
import { getHistory } from "../../apis/history"
import { useHistory } from "react-router-dom";
function SpentHistoryContainer() {
    let [{ searchBy, query }, setFilter] = useState({ searchBy: null, query: null });

    /**Date filter */
    let today = new Date();
    let [startDate, setStartDate] = useState(today);
    let [endDate, setEndDate] = useState(today);
    let [filter, toggleFilter] = useState(false);
    let handleFilter = _ => toggleFilter(!filter);

    let history = useHistory();

    let [data, setData] = useState({
        headers: [
            "TransactionId", "Items Purchased", "Amount", "Merchant", ""
        ], data: []
    });

    useEffect(() => {
        getHistory({ startDate, endDate, searchBy, query }, function ({ data }) {
            data = formatData(data);
            setData(data);
        });
    }, [filter]);

    let handleEditRoute = function (path) {
        history.push("/updateClientHistory/" + path);
    }

    let formatData = (data = []) => {
        /**Append an edit button to each field */
        data = data.map(items => {
            items.push(<Button className="btn btn-sm" onClick={e => { handleEditRoute(items[0]) }}><i className="fa fa-edit"></i></Button>);
            return items;
        });
        data['headers'] = ["TransactionId", "Items Purchased", "Amount", "Merchant", ""];
        data['data'] = data;
        return data;
    }

    return (
        <SpentHistory
            data={data}
            startDate={startDate}
            endDate={endDate}
            onFiltered={setFilter}
            isFilterApplied={handleFilter}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
}

export default SpentHistoryContainer