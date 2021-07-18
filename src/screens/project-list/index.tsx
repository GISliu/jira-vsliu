import React from "react"
import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { useState, useEffect } from "react"
import * as qs from 'qs'
import { cleanObject, useDebounce, useMount } from '../../utils/index'
import { useHttp } from "utils/http"
import styled from "@emotion/styled"
import { useProjects } from "utils/project"
import { useUsers } from "utils/user"

const apiUrl=process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    const client = useHttp();
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const debouncedParam = useDebounce(param, 200)
    const {isLoading,error,data:list}=useProjects(debouncedParam)
    const { data: users } = useUsers();
    
    return <Container>
        <SearchPanel users={users||[]} param={param} setParam={setParam}></SearchPanel>
        <List loading={isLoading} users={users||[]} dataSource={list||[]}/>
    </Container>
}
const Container = styled.div`
padding: 3.2rem;
width: 100%;
  display: flex;
  flex-direction: column;
`
