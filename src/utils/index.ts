import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

// let a: object
// a = {name: 'jack'}
// a = () => {
// }
// a = new RegExp('')
//
// let b: { [key: string]: unknown }
// b = {name: 'Jack'}
// b = () => {}
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object?: { [key: string]: unknown }) => {
  // Object.assign({}, object)
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback()
    }, [])
};
// 后面用泛型来规范类型
export const useDebounce = <V>(value: V, delay?: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
  
    useEffect(() => {
      // 每次在value变化以后，设置一个定时器
      const timeout = setTimeout(() => setDebouncedValue(value), delay);
      // 每次在上一个useEffect处理完以后再运行
      return () => clearTimeout(timeout);
    }, [value, delay]);
  
    return debouncedValue;
  };
  export const resetRoute=()=>{ window.location.href=window.location.origin}