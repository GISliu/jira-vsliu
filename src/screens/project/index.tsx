import React from "react";
import { Link } from "react-router-dom";
import { Navigate, Routes, Route } from "react-router";
import { KanbanScreen } from "screens/kanban";
import { EpicScreen } from "screens/epic";

export const ProjectScreen = ()=>{
    return <div>
        <Link to={"kanban"}>看板</Link>
        <Link to={"epic"}>任务组</Link>
        <Routes>
          {/*projects/:projectId/kanban*/}
          <Route path={"/kanban"} element={<KanbanScreen />} />
          {/*projects/:projectId/epic*/}
          <Route path={"/epic"} element={<EpicScreen />} />
          <Navigate to={window.location.pathname + "/kanban"} replace={true} />
        </Routes>
    </div>
}