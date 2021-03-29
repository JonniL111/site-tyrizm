import {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { setToken } from '../../api';

function HandlerToken() {
  const { token } = useSelector((state) => state.user);
  useEffect(() => {
    setToken(token);
  }, [token]);
  return null
}

export default HandlerToken

