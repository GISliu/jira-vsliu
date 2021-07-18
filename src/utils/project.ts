import { cleanObject } from './index';
import { useAsync } from './use-async';
import { useEffect } from 'react';
import { useHttp } from "utils/http";
import { Project } from 'screens/project-list/list'
export const useProjects = (param?: Partial<Project>) => {
    const client = useHttp();
  
    const {run,...result}=useAsync<Project[]>()
    useEffect(() => {
        run(client('projects', { data: cleanObject(param || {})}))
    }, [param])
    return result;
  };
  