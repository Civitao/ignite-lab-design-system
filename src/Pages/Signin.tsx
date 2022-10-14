import { Heading } from "../components/Heading";
import { Logo } from "../Logo";
import { Text} from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import axios from "axios";


export function Signin() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async  function handleSignin(event: FormEvent) {
    event.preventDefault();

    await axios.post('/sessions' , {
      email: 'testest@gmail.com',
      password: '123456789'
    }) 

    setIsUserSignedIn(true)
  }
  return (
    <div className='w-screen h-screen bg-gray-900 text-gray-100 flex-col flex items-center justify-center'>
    <header className='flex flex-col items-center '>
      <Logo />

      <Heading 
      size='lg' className='mt-4 ' >
          Ignite Lab
      </Heading>

    <Text size='lg' className='text-gray-400 mt-1' >  Faça login e começe a usar </Text>

    </header>
    
    <form onSubmit={handleSignin} className='w-full max-w-sm mt-10 gap-4  flex flex-col items-stretch'>
      { isUserSignedIn && <Text>Login realizado!</Text>}

      <label htmlFor='email' className='flex flex-col gap-3' > 
        <Text className='font-semibold'>Endereço de e-mail</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input type='email' id='email' placeholder='Digite seu e-mail' />
            
        </TextInput.Root>
      </label>

      <label htmlFor='password' className='flex flex-col gap-3' > 
        <Text className='font-semibold'>Sua senha</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock  />
          </TextInput.Icon>
          <TextInput.Input type='password' id='password' placeholder='******' />
        </TextInput.Root>
      </label>

      <label htmlFor='remember' className='flex items-center gap-2'>
        <Checkbox id='remember'/>
          <Text size="sm" className='text-gray-200 '>Lembrar de mim por 30 dias</Text>
      </label>

        <Button className='mt-4' type='submit'>Entrar na plataforma</Button>
    </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
        <a href='' className='text-gray-400 hover:text-gray-200 underline' > Esqueceu sua senha?</a>
        </Text>
        <Text asChild size='sm'>
        <a href='' className='text-gray-400 hover:text-gray-200 underline' > Nao possui conta? Crie uma agora!</a>
        </Text>

      </footer>

     </div>
  )
}