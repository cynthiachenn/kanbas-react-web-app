import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaFileAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import ModalNav from "../ModalNav";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <div className="flex-fill">
            <ModalNav/>
                <div>
                    <input type="text" style={{width:"300px"}} placeholder="Search for Assignments"></input>
                    <button type="button" className="btn btn-light">+ Group</button>
                    <button type="button" className="btn btn-danger">+ Assignment</button>
                    <button type="button" className="btn btn-light"><FaEllipsisV className="fs-10"/></button>
                </div>

                <ul className="list-group wd-modules" >
                    <li className="list-group-item" >
                        <div>
                            <FaEllipsisV className="me-2" /> ASSIGNMENTS
                            <span className="float-end">
                                <span className="round-border">40% of Total</span>
                                <FaCheckCircle className="text-success" />
                                <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                        <ul className="list-group">
                            {assignmentList.map((assignment) => (
                                <li className="list-group-item">
                                    <FaEllipsisV className="me-2" /> <FaFileAlt style={{color:"green", marginRight:"5px"}}/>
                                    <Link
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                                    <span className="float-end">
                                        <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                                        <br/><span className="asgn-desc" style={{fontSize:"smaller"}}><span style={{color:"red"}}>Multiple Modules</span> | <b>Due</b> {assignment.due} | 100 Points</span>
                                </li>))}
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default Assignments;