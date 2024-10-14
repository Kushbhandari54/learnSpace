import React from "react";
import Image from "next/image";
import { Description } from "@mui/icons-material";
import { Grid2 } from "@mui/material";

const GenduList = () => {
  const List = [
    {
      id: 1,
      url: "/AdvaitImage.jpeg",
      name: "Advait Gendu",
      desc: "कैसे हो यार? ऐसा लग रहा है जैसे सदियों से बात नहीं हुई! ज़िंदगी कैसी चल रही है? क्या अभी भी अपनी शानदार पर्सनालिटी से दुनिया को जीत रहे हो या फिर Netflix के हाथों हार मानकर पक्का सोफे पर ही जमे हो? 😄",
      image: true,
    },
    {
      id: 1,
      url: "/AdvaitImage.jpeg",
      name: "Bharat Gendu",
      desc: "अरे चोमू! क्या हाल हैं? इतने दिन से कहाँ गायब हो? कहीं तुम्हारी चोमूगिरी तो और नहीं बढ़ गई? 😜 जल्दी से कुछ प्लान बनाओ, वरना तुम्हें याद दिलाना पड़ेगा कि असली मस्ती कैसे होती है! 😆",
      image: false,
    },
  ];
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {List.map(({ id, url, desc, image }) => {
        return (
          <Grid2
            container
            key={id}
            sx={{ mt: 3, display: "flex", alignItems: "center" }}
          >
            <Grid2 size={6}>
              {image ? (
                <Image width={200} height={100} src={url} />
              ) : (
                <video width="320" height="100" controls preload="none">
                  <source src="/bharat.mp4" type="video/mp4" />
                </video>
              )}
            </Grid2>

            <Grid2 size={6}>{desc}</Grid2>
          </Grid2>
        );
      })}
    </div>
  );
};

export default GenduList;
