const Listen = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        {data?.isPlaying ? (
          <div>
            listen to:
            <img src={data.albumImageUrl} alt="" width="150" height="150" />
            <p>{data.artist}</p>
            <p>{data.title}</p>
          </div>
        ) : (
          <h1>Not Playing </h1>
        )}
      </div>
    </div>
  );
};

export default Listen;

export const getStaticProps = async (ctx) => {
  const response = await fetch("http://localhost:3000/api/spotify");
  const data = await response.json();
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
