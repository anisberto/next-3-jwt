import React from 'react';
import { useRouter } from 'next/router';
import { authService } from '../src/services/auth/authService';

export default function HomeScreen() {
  const router = useRouter();
  const [values, setValues] = React.useState({
    usuario: 'anisberto',
    senha: 'safepassword',
  });

  function handleChange(event) {
    const fieldValue = event.target.value;
    const fieldName = event.target.name;
    setValues((currentValues) => {
      return {
        ...currentValues,
        [fieldName]: fieldValue,
      };
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(event) => {
        event.preventDefault();

        authService.login({
          username: values.usuario,
          password: values.senha,
        }).then((response) => {
          router.push('/auth-page-static');
          // router.push('/auth-page-ssr');
        })
          .catch((error) => {
            console.log(error)
          })

      }}>
        <input
          placeholder="Usuário" name="usuario"
          value={values.usuario} onChange={handleChange}
        />
        <input
          placeholder="Senha" name="senha" type="password"
          value={values.senha} onChange={handleChange}
        />
        <div>
          <button>
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
