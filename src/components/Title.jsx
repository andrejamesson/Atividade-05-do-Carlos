const Title = ( { Title01 , Title02 } ) => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-12 text-white">
      <h1 className="font-fontProjeto text-6xl/[100px] text-center w-3/4 ">{Title01}</h1>
      <h4 className="font-fontProjeto text-4xl px-5">{Title02}</h4>
    </div>
  );
};


export default Title