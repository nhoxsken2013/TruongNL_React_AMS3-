import React, { Component } from 'react'

export default class Info extends Component {
    // componentDidUpdate(prevProps, prevState) {
    //     if(this.props.data !== prevProps.data)
    // }
    isAdmin = (apiData) => {
        return apiData === true ? 'Admin' : 'User'
      }
  render() {
    return (
        this.props.data &&
        <div className="content">
        <h2>User Detail Infomation:</h2>
        {/* <p>Role:{props.data?.id}</p> */}
        <div className='user-details'>
          <div className='avt'>
            <img  alt="avt" className='avt-img' src={this.props.data?.avatar_url} />
          </div>
          <div className='user-info'>
            <p>Role:{this.isAdmin(this.props.data?.site_admin)}</p>
            <p>Company:{this.props.data?.company}</p>
            <p>Email:{this.props.data?.email}</p>
            <p>Number of Follower:{this.props.data?.followers}</p>
          </div>
        </div>
      </div> 
    )
  }
}
