import React from 'react'

export default function index(props) {

  const isAdmin = (apiData) => {
    return apiData === true ? 'Admin' : 'User'
  }
  
  return (
    props.data && 
     <div className="content">
          <h2>User Detail Infomation:</h2>
          {/* <p>Role:{props.data?.id}</p> */}
          <div className='user-details'>
            <div className='avt'>
              <img  alt="avt" className='avt-img' src={props.data?.avatar_url} />
            </div>
            <div className='user-info'>
              <p>Role:{isAdmin(props.data?.site_admin)}</p>
              <p>Company:{props.data?.company}</p>
              <p>Email:{props.data?.email}</p>
              <p>Number of Follower:{props.data?.followers}</p>
            </div>
          </div>
        </div> 
  )
}
