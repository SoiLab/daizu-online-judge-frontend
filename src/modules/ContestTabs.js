import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// タブ
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
// テーブル
import ContestsTable from "../atoms/app-contestsTable";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  // タブの設定
  tabs: {
    borderBottom: "0.8px solid #cfd8dc",
  },
}));

export default function ContestsListTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabs}>
        <Tab label="トップ" />
        <Tab label="問題一覧" />
        <Tab label="提出状況" />
        <Tab label="ランキング" />
      </Tabs>
      {value === 0 && <ContestsTable />}
      {value === 1 && <ContestsTable />}
      {value === 2 && <ContestsTable />}
      {value === 3 && <ContestsTable />}
    </div>
  );
}
