import { tokenService } from "../src/services/auth/tokenService";

function AuthPageStatic(props) {

  console.log(tokenService.get())

  return (
    <div>
      <h1>
        Auth Page Static
      </h1>
      <pre>
        {JSON.stringify(props, null, 2)}
      </pre>
    </div>
  )
}

export default AuthPageStatic;
