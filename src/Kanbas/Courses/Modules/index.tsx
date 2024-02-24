import ModalNav from "../ModalNav";
import ModuleList from "./List";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import { FaCheck, FaCaretDown, FaEllipsisV } from "react-icons/fa";
function Modules() {
  return (
    <>
    <div className="flex-fill">
    <ModalNav/>
    <div className="buttons-collection">
          <button>Collapse All</button>
          <button>View Progress</button>
          <button><FaCheck style={{ color: "green" }} /> Publish All <FaCaretDown /></button>
          <button id="mod-btn">+ Module</button>
          <button><FaEllipsisV /></button>
          <hr />
        </div>
      <ModuleList />
    </div>
    </>
  );
}
export default Modules;