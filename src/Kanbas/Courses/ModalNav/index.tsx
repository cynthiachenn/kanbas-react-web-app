import {
    FaRegUserCircle, FaTachometerAlt, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaTv, FaArrowCircleRight,
    FaHome, FaVectorSquare, FaPlug, FaRocket, FaEdit, FaUserFriends
} from 'react-icons/fa';
import './mininav.css'
import { useLocation } from 'react-router';
import { FaBars, FaChevronRight } from 'react-icons/fa';
import { link } from 'fs';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
function ModalNav() {
    const { pathname } = useLocation();
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-3" style={{ color: "gray" }} /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-3" style={{ color: "red" }} /> },
        { label: "Courses", icon: <FaBook className="fs-3" style={{ color: "red" }} /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-3" style={{ color: "red" }} /> },
        { label: "Inbox", icon: <FaInbox className="fs-3" style={{ color: "red" }} /> },
        { label: "History", icon: <FaClock className="fs-3" style={{ color: "red" }} /> },
        { label: "Studio", icon: <FaTv className="fs-3" style={{ color: "red" }} /> },
        { label: "Commons", icon: <FaArrowCircleRight className="fs-3" style={{ color: "red" }} /> }
    ];
    const courseLinks = [
        { label: "Home", icon: <FaHome className="fs-3" style={{ color: "red" }} /> },
        { label: "Modules", icon: <FaVectorSquare className="fs-3" style={{ color: "red" }} /> },
        { label: "Piazza", icon: <FaPlug className="fs-3" style={{ color: "red" }} /> },
        { label: "Zoom", icon: <FaPlug className="fs-3" style={{ color: "red" }} /> },
        { label: "Assignments", icon: <FaBook className="fs-3" style={{ color: "red" }} /> },
        { label: "Quizzes", icon: <FaRocket className="fs-3" style={{ color: "red" }} /> },
        { label: "Grades", icon: <FaEdit className="fs-3" style={{ color: "red" }} /> },
        { label: "People", icon: <FaUserFriends className="fs-3" style={{ color: "red" }} /> }
    ];
    const [kanbasShow, setKanbasShow] = useState(false);
    const handleKanbasClose = () => setKanbasShow(false);
    const handleKanbasShow = () => setKanbasShow(true);

    const [courseShow, setCourseShow] = useState(false);
    const handleCourseClose = () => setCourseShow(false);
    const handleCourseShow = () => setCourseShow(true);
    var pathSplit = pathname.split('/')
    return (
        <>
            <div className="d-block d-sm-none">
                <div className="small-header">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <Button variant="primary" onClick={handleKanbasShow} id="kanbas-modal-btn">
                                <FaBars />
                            </Button>
                            <Modal show={kanbasShow} onHide={handleKanbasClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Kanbas Navigator</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ul className="mini-nav">
                                        {links.map((link, index) => (
                                            <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                                                <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Modal.Body>
                            </Modal>

                        </div>
                        <div className="col-8">
                            <div className="header-text">{pathSplit.at(pathSplit.length-2)}</div>
                            <div className="header-text">{pathname.split('/').pop()}</div>
                        </div>
                        <div className="col-2">
                            <Button variant="primary" onClick={handleCourseShow} id="course-modal-btn">
                                <FaChevronRight />
                            </Button>
                            <Modal show={courseShow} onHide={handleCourseClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Course Navigator</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ul className="mini-nav">
                                        {courseLinks.map((link, index) => (
                                            <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                                                <Link to={`/Kanbas/Courses/${pathSplit[pathSplit.length-2]}/${link.label}`}> {link.icon} {link.label} </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ModalNav