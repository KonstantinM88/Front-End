const house = {
    adress: "Pfondorfer str 69",
    postIndex: 10408,
    roofColor: "red",
    wallColor: "green",
  };
  
  // Деструктуризация
  const { adress, wallColor } = house;
  
  console.log(adress);     // "Pfondorfer str 69"
  console.log(wallColor);  // "green"
  