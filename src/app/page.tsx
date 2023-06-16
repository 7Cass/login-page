import Form from '@/components/Form';
import Image from 'next/image';
import backgroundImg from '@/assets/background.png';
import logoImg from '@/assets/logo.png';

export default function Home() {
  return (
    <main className="h-screen flex bg-gray-50">
      <div className="w-1/2 flex items-center justify-center">
        <div className='flex flex-col'>
          <Image src={logoImg} alt="Logo Vertigo"/>
          <Form />
        </div>
      </div>
      <Image className="w-1/2" src={backgroundImg} alt="" />
    </main>
  )
}
