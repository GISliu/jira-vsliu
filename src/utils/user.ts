import { User } from 'screens/project-list/search-panel';
import { cleanObject } from './index';
import { useAsync } from './use-async';
import { useEffect } from 'react';
import { useHttp } from "utils/http";
export const useUsers = (param?: Partial<User>) => {
    const client = useHttp();
  
    const {run,...result}=useAsync<User[]>()
    useEffect(() => {
        run(client('users', { data: cleanObject(param || {})}))
    }, [param])
    return result;
  };
  