"use client"
import { Pencil } from 'lucide-react';

export default function Home() {

  let number = 1
  console.log(number)

  function generate (){
    number = number + 1;
    console.log(number)
  }

  return (
   <><Pencil />
   <h1 onClick={generate} className='text-2xl font-bold text-center border p-6 m-6 w-fit rounded bg-white text-black'>hello</h1>
   <button className='border'>dadasdb</button>
   <button className='border'>dadasdb</button>
   </>
  );
}
