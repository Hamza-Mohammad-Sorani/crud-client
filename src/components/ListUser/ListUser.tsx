import React, { useEffect, useState } from 'react'
import axios from '../../axiosInstance/axios'
import { Link } from 'react-router-dom';
import { Spinner2 } from '../'

export interface User {
  id: string;
  name: string;
  email: string;
  mobile: string;
}

const ListUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const PER_PAGE = 25;
  const [page, setPage] = useState(50);
  const [showSpinner, setShowSpinner] = useState(true);
  const [message, setMessage] = useState<string>();
  const [success, setSuccess] = useState(false);
  const [disabledButton, setDisabledButtons] = useState(false)
  
  const getUsers = (from: number, clear?: boolean) => {
    axios.get('/?from=' + from + '&limit=' + PER_PAGE)
      .then(res => {
        if (clear) {
          console.log(res.data)
          // setUsers(res.data);
        }
        if (res.status === 200) {
          setUsers([...users, ...res.data]);
        } else {
          setShowSpinner(false);
        }
      }).catch(err => {
        console.log(err);
      }).finally(() => {
      })
  }
  useEffect(() => {
    const from = page;
    getUsers(from);
    if (showSpinner) {
      window.addEventListener('scroll', () => {
          if ((window.innerHeight + document.documentElement.scrollTop) >= (document.documentElement.offsetHeight)) {
            setTimeout(() => {
              setPage(page + PER_PAGE);
            }, 200);
          }
        })
    }
  }, [page]);
  
  const deleteUser = (id: string) => {
    setDisabledButtons(true);
    axios.delete('delete/' + id)
      .then(res => {
        const data = JSON.parse(JSON.stringify(res.data));
        setMessage(data.message);
        setSuccess(res.status === 202);
        getUsers(0, true);
        setPage(PER_PAGE);
      }).catch(err => {
        console.log(err);
      }).finally(() => {
        setDisabledButtons(false);
      })
  }
  return (
    <div className="flex flex-col mb-92">
      {message &&
        <div className={["Alert", success ? "AlertSuccess" : "AlertDanger",].join(" ")}>
          {message}
        </div>
      }
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="Table table-auto">
              <thead className="Thead">
                <tr>
                  <th scope="col" className="Table-Th">
                    #
                  </th>
                  <th scope="col" className="Table-Th">
                    Name
                  </th>
                  <th scope="col" className="Table-Th">
                    Email
                  </th>
                  <th scope="col" className="Table-Th">
                    Mobile
                  </th>
                  <th scope="col" className="Table-Th">
                    Actions
                  </th>
                </tr>
              </thead >
              <tbody>
                {users && users.map(user => {
                  return (
                    <tr className="Table-Tr " key={user.id}>
                      <td className="Table-Td">
                      {user.id}
                      </td>
                      <td className="Table-Td">
                        {user.name}
                      </td>
                      <td className="Table-Td">
                      {user.email}
                      </td>
                      <td className="Table-Td">
                      {user.mobile}
                      </td>
                      <td className='Table-Actions'>
                        <Link
                          to={`/user/${user.id}/edit`}
                          className="Btn BtnPrimary">Edit</Link>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className={['Btn BtnDanger', disabledButton ? 'disabled' : ''].join(" ")}>Delete</button>
                      </td>
                    </tr >
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Spinner2 show={showSpinner} />
    </div>
  )
}

export default ListUser