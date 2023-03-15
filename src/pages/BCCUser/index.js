import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import BreadCrumb from "./../../Components/Common/BreadCrumb";

import { Table, Select, Spin } from "antd";
import { getListBBCUser } from "../../helpers/helper";
import BCCSearch from "./SearchFrom";
import BBCUserResultTable from "./BBCUserResultTable";

const BCCUser = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [searchByDepartment, setSearchByDepartment] = useState("");
  const getUserData = async () => {
    setLoading(true);
    const result = await getListBBCUser(searchByName, searchByDepartment);
    console.log("result:", result);
    setUserData(result?.data);
    setLoading(false);
  };
  useEffect(() => {
    getUserData();
  }, [searchByName, searchByDepartment]);
  const onBCCUserSearch = (value) => {
    // console.log("value:", value);
    setSearchByName(value?.name);
    setSearchByDepartment(value?.department);
  };
  //

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Thành Viên" pageTitle="Quản lý thành viên" />
          <BCCSearch search={onBCCUserSearch} />
          <Spin spinning={loading}>
            <BBCUserResultTable data={userData} getUserData={getUserData} />
          </Spin>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default BCCUser;
