import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Axios from "axios";
import config from "../../config";
import UpdateClientHistory from "../../components/UpdateClientHistory";

function UpdateClientHistoryContainer(){
  let params = useParams();
  let [data,setData] = useState([]);
  let history= useHistory();
  useEffect(()=>{
    Axios.get(`${config.host}/histories/${params.id}`).then(data=>{
      setData(data.data);
    })
  },[]);

  let onUpdate=function(payload){
    Axios.post(`${config.host}/histories/${payload._id}`,payload).then((data)=>{
      history.goBack();
    })
  }

  return (<UpdateClientHistory data={data} callback={onUpdate}></UpdateClientHistory>)
}

export default UpdateClientHistoryContainer;