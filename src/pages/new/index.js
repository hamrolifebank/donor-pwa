import PropTypes from "prop-types";
import DashboardLayout from "@layouts/dashboard/DashboardLayout";
import { ModuleContextProvider, useModuleContext } from "./context";
import Newfile from "./Newfile";

const New = ({ title, testFunction = () => {} }) => {
  return (
    <ModuleContextProvider>
      <Newfile />
    </ModuleContextProvider>
  );
};

// New.getLayout = (page) => <TestLayout>{page}</TestLayout>;
New.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

New.propTypes = {
  title: PropTypes.string,
  //   testFunction: PropTypes.func.isRequired,
};

export default New;
