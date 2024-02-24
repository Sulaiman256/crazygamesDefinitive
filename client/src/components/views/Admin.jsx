import React from "react";
import ProductManagement from "./ProductManagement";
import PurchaseManagement from "./PurchaseManagement";
import AnalysisStatistics from "./AnalysisStatistics";
import UserManagement from "./UserManagement";
import UserPageConfiguration from "./UserPageConfiguration";
import UserMessaging from "./UserMessaging";
import BackupRestore from "./BackupRestore";

const Admin = () => {
  return (
    <div>
      <ProductManagement />
      <PurchaseManagement />
      <AnalysisStatistics />
      <UserManagement />
      <UserPageConfiguration />
      <UserMessaging />
      <BackupRestore />
    </div>
  );
};

export default Admin;
