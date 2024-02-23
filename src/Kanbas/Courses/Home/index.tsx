import ModuleList from "../Modules/List";
import "./index.css";
import { TbFileImport } from "react-icons/tb";
import { CiImport } from "react-icons/ci";
import { AiOutlineAim } from "react-icons/ai";
import { MdOutlineBarChart } from "react-icons/md";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaRegBell, FaClock } from "react-icons/fa";


function Home() {

  const links = [
    { label: "ExisitngContent", icon: <TbFileImport className="fs-2" />        },
    { label: "Content",         icon: <CiImport className="fs-2" />            },
    { label: "HomePage",        icon: <AiOutlineAim className="fs-2" />        },
    { label: "CourseStream",    icon: <MdOutlineBarChart className="fs-2" />   },
    { label: "Announcement",    icon: <IoMegaphoneOutline className="fs-2" />  },
    { label: "Analtics",        icon: <MdOutlineBarChart className="fs-2" />   },
    { label: "Notifications",   icon: <FaRegBell className="fs-2" />           },
  ];
  return (
    <div style={{ display: 'flex'}}>
      <div style={{ width: "80%" }}>
        <h2>Home</h2>
        <ModuleList />
        <h2>Status</h2>
      </div>
      <div style={{ width: "20%" }}>
        <div className="wd-buttons">                
            <button className="btn btn-light">
                <TbFileImport className="fs-4"/> Import existing
                content
            </button>
            <button className="btn btn-light">
                <CiImport className="fs-4" />  Import from
                Commons
            </button>
            <button className="btn btn-light">
                <AiOutlineAim className="fs-4" />  Choose Home Page
            </button>
            <button className="btn btn-light">
                <MdOutlineBarChart className="fs-4" /> View Course Stream
            </button>
            <button className="btn btn-light">
                <IoMegaphoneOutline className="fs-4" /> New Announcement
            </button>
            <button className="btn btn-light">
                <MdOutlineBarChart className="fs-4" />  New Analytics
            </button>
            <button className="btn btn-light">
                <FaRegBell className="fs-4" /> View Course
                Notifications
            </button>
            </div>
            <div>
                <h3>To Do</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="col-2" style={{ color: "red" }}>
                        <FaClock className="fs-4" />
                    </div>
                    <div className="col" style={{ color: "red" }}>
                        Grade A1 - ENV + HTML
                        <div style={{ color: "gray" }}>  
                            100 points - Sept 18 at 11:59pm 
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="col-2" style={{ color: "red" }}>
                        <FaClock className="fs-4" />
                    </div>
                    <div className="col" style={{ color: "red" }}>
                        Grade A2 - CSS + Boostrap
                        <div style={{ color: "gray"}}>  
                            100 points - Sept 18 at 11:59pm 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Home;