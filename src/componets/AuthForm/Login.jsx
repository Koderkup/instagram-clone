import {useState} from 'react'
import {Input, Button} from '@chakra-ui/react'

const Login = () => {
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    });
     const handleChange = (e) => {
       setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
     };
  return (
    <>
      <Input
        placeholder="Email"
        type="email"
        name="email"
        fontSize={14}
        value={inputs.email}
        onChange={handleChange}
      />
      <Input
        placeholder="Password"
        type="password"
        name="password"
        fontSize={14}
        value={inputs.password}
        onChange={handleChange}
      />
      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Log in
      </Button>
    </>
  );
}

export default Login