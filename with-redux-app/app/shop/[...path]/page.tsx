export default function ShopMatchAll({ params }: { params: { path: string[] } }) {
    console.log("params ",params);
  return (
    <>
      <h1>Shop Match All Page{params.path.join(',')} </h1>

    </>
  )
}
