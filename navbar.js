document.querySelectorAll(".menu-toggle").forEach((toggle) => {
  const navigation = toggle.parentElement.querySelector(".nav");

  toggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    });
  });
});
// from index.html
  
      const ps = [
        [
          "New",
          "ASUS ROG Strix G17",
          "$1,199.00",
          "https://dlcdnwebimgs.asus.com/files/media/202602/fd89bd74-4b0f-4c4c-84e0-7e6c8a9218a3/v2/images/kv.webp",
        ],
        [
          "Best seller",
          "ASUZ ROG STRIX G17",
          "$2,490.00",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxy-oodZjGqsxnuQH8DzqBwzb3agi5MPZF6FXCzyFwHViHQ9rNxVK8Erc&s=10",
        ],
        [
          "New",
          "ASUS ROG Zephyrus G16",
          "$149.00",
          "https://www.notebookcheck.net/fileadmin/Notebooks/Asus/ROG_Zephyrus_G16_2024_GU605M/IMG_2191.JPG",
        ],
        [
          "New",
          "MSI Stealth 16 AI Studio",
          "$299.00",
          "https://storage-asset.msi.com/global/picture/product/product_17364092396736869361fbdf883425af4e3a79c775.webp",
        ],
        [
          "New",
          "ASUS ROG Flow Z13",
          "$1,299.00",
          "https://dlcdnwebimgs.asus.com/files/media/202602/fd89bd74-4b0f-4c4c-84e0-7e6c8a9218a3/v2/images/kv.webp",
        ],
        [
          "New",
          "ASUS ROG Strix G17",
          "$1,199.00",
          "https://dlcdnwebimgs.asus.com/files/media/713ED250-BDED-407C-BFB1-C20C1ADE98C3/V2/img/frame/08.jpg",
        ],
        [
          "New",
          "ASUS ROG Strix G18",
          "$1,399.00",
         "https://press.asus.com/assets/w_894,h_671/2f8577ad-b316-4647-89df-1ed7a6a7668a/2026%20ROG%20Strix%20SCAR%2018_G835_Scenario_1.jpg",
        ],
        [
          "New",
          "ASUS ROG FLOW",
          "$1,599.00",
          "https://dlcdnwebimgs.asus.com/files/media/2523515c-4a57-41a5-9004-67490621ae51/v1/images/large/1x/scenario_photo_z13.jpg",
        ]

        
      ];
      products.innerHTML = ps
        .map(
          (p, i) =>
            `<article class="product" onclick="location.href='product.html?id=${i}'"><div class="product-image">${p[0] ? `<span class="label">${p[0]}</span>` : ""}<button class="heart" onclick="event.stopPropagation();this.textContent=this.textContent==='♡'?'♥':'♡'">♡</button><img src="${p[3]}" alt="${p[1]}"></div><div class="p-info"><span class="stars">★★★★★</span><h3>${p[1]}</h3><span class="price">${p[2]}</span></div></article>`,
        )
        .join("");
      let n = 0;
      bagButton.onclick = () => {
        bag.textContent = ++n;
      };
    // from shop.html
    

