import React from 'react'

export default function Alert(props) {
  return (
    <div className="container" style={{height:'50px'}}>
   { props.alert&&<div className={` my-1 alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  {props.alert.type}<strong>{props.alert.msg}</strong> 
 
</div>}
</div>
  )
}
