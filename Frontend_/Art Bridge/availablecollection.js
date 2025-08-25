const container = document.querySelector('#gridData');

const images = [
  {
    name: "Sunset Vibes",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/6445359eec6c58ef6509cfea01cae6500b121de4-827x1056.jpg?auto=format&w=1920&q=75"
  },
  {
    name: "Urban Nights",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/f742345f09b42219f4ab2000fa4e4921a2358dfa-617x1056.jpg?auto=format&w=640&q=75"
  },
  {
    name: "Calm Horizon",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/1d48023d70b35dc9c40c6cd060b63666517a4d78-1437x1800.jpg?auto=format&w=640&q=75"
  },
  {
    name: "Mystic Forest",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/f5739b83676a17ccf497970bf04879da16f7eb98-512x1056.jpg?auto=format&w=640&q=75"
  },
  {
    name: "Golden Path",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/52e41d7879c879b6eb3a5bf8572f5411b945bc73-454x1056.jpg?auto=format&w=640&q=75"
  },
  {
    name: "Ocean Breeze",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/bc8a7b3958244b724a3429d916120489a9abde3e-1056x847.jpg?auto=format&w=640&q=75"
  },
   {
    name: "Crimson Dream",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/56ea6fe097a4098145c61b33c035fd56174747f9-1208x1280.jpg?auto=format&w=750&q=75"
  },
  {
    name: "Silent Shadow",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/86d606df62dfe2e399fae3950d1434a22889aece-877x1056.jpg?auto=format&w=384&q=75"
  },
  {
    name: "Ocean Depths",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/d1e9da46fc01552084e3bc6aadef176fcaec72fa-1056x1054.jpg?auto=format&w=384&q=75"
  },
  {
    name: "Golden Hour",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/832fbf7d6a2bb630d701008f9a85ee4af42b3381-1056x961.jpg?auto=format&w=384&q=75"
  },
  {
    name: "Mystic Flame",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/bfa0f2551e96f274401a991f0114ad1e032916c5-791x1056.jpg?auto=format&w=384&q=75"
  },
  {
    name: "Twilight Mist",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/30b6cfea906e6e8e68ce73bdb8ba4e583f019315-994x1056.jpg?auto=format&w=384&q=75"
  },
  {
    name: "Forest Whisper",
    url: "https://cdn.sanity.io/images/x76dkvvf/prod/a082f66718e0448fd63e886bf7409c317e24bdf8-702x1056.jpg?auto=format&w=384&q=75"
  }
];


let i = 0;

// Render 3 images at a time
const renderImages = () => {
  container.innerHTML = ""; // clear old
  const slice = images.slice(i, i + 6); // only 3 at a time
  slice.forEach((image) => {
    const imageDiv = document.createElement('div');
    imageDiv.className = 'images';
    const img = document.createElement('img');
    img.src = image.url;
    const h4=document.createElement('h3');
    h4.textContent=image.name;
    imageDiv.appendChild(h4)
    imageDiv.appendChild(img);
    container.appendChild(imageDiv);
  });
};

// Next button logic
const next = () => {
  i += 6;
  if (i >= images.length) {
    i = 0; // restart from beginning
  }
  renderImages();
};

document.addEventListener('DOMContentLoaded', renderImages);
