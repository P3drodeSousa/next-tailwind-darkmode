const Top = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1 className="text-left font-semibold text-5xl mb-14">
        Top Tracks listen too :
      </h1>
      <div className="flex flex-col h-4/5">
        {data.map((track, i) => (
          <div key={i} className="my-2">
            <p>{track.title}</p>
            <p>{track.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top;

export const getStaticProps = async (ctx) => {
  const response = await fetch("http://localhost:3000/api/top");
  const data = await response.json();

  return {
    props: {
      data: data.tracks,
    },
    revalidate: 10,
  };
};
