export default function TodoWithId({ params }: { params: { id: string } }) {
  return (
    <>
      <h1>Todo Page With Id {params.id} </h1>

    </>
  )
}
