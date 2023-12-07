import React from 'react'

const Form = () => {
  const [firstName , setFirstName] = React.useState("")
  const [lastName , setLastName] = React.useState("")
  const [email , setEmail] = React.useState("")
  const [submit, setSubmit] = React.useState(false)

  function HandleSubmit(event){
    event.preventDefault()
    setSubmit(true)
    setFirstName("")
    setLastName("")
    setEmail("")
  }
  React.useEffect(()=>{
    setTimeout(() => {
      setSubmit(false)
    }, 5000);
  })

  return (
    <div className='form-container'>
      <h1>Sign Up</h1>
      {submit && <div className='sucess-message'>Sucess! Thank You</div>}
        <div className='form'>
          <form onSubmit={HandleSubmit}>
          <input 
          type='text' 
          placeholder='First Name'
          value={firstName}
          onChange={(event)=>setFirstName(event.target.value)}
          required
          />
          <input 
          type='text' 
          placeholder='Last Name'
          value={lastName}
          onChange={(event)=>setLastName(event.target.value)}
          required
          />
          <input 
          type='email' 
          placeholder='Email'
          value={email}
          onChange={(event)=>setEmail(event.target.value)}
          required
          />
          <button>Register</button>
          </form>
        </div>
    </div>
  )
}

export default Form