const A = ({ params }) => {
  console.log(params.slug);
  
  return (
    <>
    <h1>Dynamic routing</h1>
       <p>Slug: {params.slug}</p> 
    </>
  );
}

export default A;
