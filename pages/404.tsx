import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="text-3xl text-center flex flex-col justify-center h-screen ">
      <h1 className='mb-4 tracking-widest'>Ooops...</h1>
      <h2 className='mb-4 tracking-widest'>That page cannot be found :(</h2>
      <p className='mb-4 tracking-widest'>Go back to the <Link href="/"><span className='text-blue-300 underline'>Homepage</span></Link></p>
    </div>
  );
}
 
export default NotFound;