import Movies from "@/components/Movies";
import React from "react";

const page = async ({ params }) => {
  const keyword = params.keyword;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=51bead3ea9f971431adfa8546f12decb&query=${keyword}&language=en-US&page=1`
  );

  const data = await res.json();

  console.log(data?.results, "data");
  return (
    <div className="flex items-center flex-wrap gap-3">
      <div></div>
      {data?.results && data.results.length > 0 ? (
        data.results.map((dt, i) => <Movies key={i} dt={dt} />)
      ) : (
        <div>Aranılan film bulunamadı !!</div>
      )}
    </div>
  );
};

export default page;
