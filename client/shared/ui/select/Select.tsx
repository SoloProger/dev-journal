export default function Select() {
  return (
    <div className='flex flex-col justify-center gap-3'>
      <h3>Категория</h3>
      <select name='select' className='w-full p-3 rounded-2xl'>
        <option value='admin'>Admin</option>
        <option value='admin'>Author 1</option>
        <option value='admin'>Author 2</option>
      </select>
    </div>
  );
}