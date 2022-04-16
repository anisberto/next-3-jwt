function AuthPageSSR(props) {

  const token = JSON.parse(sessionStorage.getItem('token'))

  return (
    <div>
      <h1>
        Auth Page Server Side Render
      </h1>
      <pre>
        {JSON.stringify(token, null, 2)}
      </pre>
    </div>
  )
}

export default AuthPageSSR;
