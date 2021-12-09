import { useEffect, useState } from "react";

const Login = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 0) {
      alert('apareceu')
    }
  }, [counter])

  return (
    <div className="App">
      <div className="login">
        <h1 className="title">Sign up</h1>
        <div className="gap">
          <p className="p">Create an account to start posting jobs and build your remote team with himalayas</p>
          <button className="btn">Acrescentar</button>
          <input disabled defaultValue={counter} value className="input" onChange={(valor) => setCounter(valor.target.value)} />
          <button className="btn1" onClick={() => setCounter(counter - 1)}>Diminuir</button>
        </div>
        <p className="p">Already have an account? <span className="span">Sign in</span></p>
      </div>

      <div className="bg">
        <h1 className="h1name" setCounter>{counter}</h1>
      </div>

    </div>
  );
}

export default Login;