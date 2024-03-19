import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../Store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
      <div style={{ padding: "20px" }}>
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
          <option>Publish All</option>
          <option>Publish All Modules and Items</option>
          <option>Publish Modules Only</option>
          <option>Unpublish All</option>
        </select>
        <button className="wd-todo">+ Module</button>
      </div>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              style={{ flex: 1 }}
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }/>
            <textarea
              style={{ flex: 1 }}
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }/>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              style={{ backgroundColor: 'lightgreen', borderRadius: '1px' }}
              onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
            </button>
            <button
              style={{ backgroundColor: 'orange', borderRadius: '1px' }}
              onClick={() => dispatch(updateModule(module))}>
              Update
            </button>
          </div>
        </li>
        {moduleList
        .filter((module) => module.course === courseId)
        .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="ms-2" />
                {module.name} - {module.description}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                style={{ backgroundColor: 'orange', borderRadius: '1px' }}
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button
                style={{ backgroundColor: 'red', borderRadius: '1px' }}
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
            </div>
            {/* {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                  <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;