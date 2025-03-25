import React from "react";

const Videos = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-6 bg-black">
      <div className="col-span-2 row-span-1">
        <iframe
          className="w-full h-64"
          src="https://www.youtube.com/embed/4T3L0o78xLY?si=Ex8cUT6MKCryg2hY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="row-span-2">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/bDC59bTGSTU?si=i049XxEUpvjYcTnc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="col-span-2">
        <iframe
          className="w-[700px] h-80"
          src="https://www.youtube.com/embed/rHgjRhgvR0g?si=lv7rqXW8TIDRH51R"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="col-span-2">
        <iframe
          className="w-[850px] h-72"
          src="https://www.youtube.com/embed/r7_ktmDB9O4?si=Wv6Qiw9Ngatj_BXF"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div>
        <iframe
          className="w-full h-80"
          src="https://www.youtube.com/embed/W_WTKRAOumk?si=Xo81KN4wkr-wBEk2"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Videos;
