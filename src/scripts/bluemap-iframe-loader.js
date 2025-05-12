const wrapper = document.getElementById("iframe-bluemap");
    const mq = window.matchMedia("(min-width: 900px)");

    function handleResize(e) {
      const existingIframe = wrapper.querySelector("iframe");
      const existingPlaceholder = wrapper.querySelector("#iframe-placeholder");

      if (e.matches) {
        // desktop: přidej iframe, smaž placeholder
        if (!existingIframe) {
          if (existingPlaceholder) existingPlaceholder.remove();

          const iframe = document.createElement("iframe");
          iframe.src = "https://map.mrburger.cz/#world:0:0:0:1500:0:0:0:1:flat";
          iframe.width = "100%";
          iframe.height = "500";
          iframe.loading = "lazy";
          wrapper.appendChild(iframe);
        }
      } else {
        // mobil: přidej placeholder, smaž iframe
        if (existingIframe) existingIframe.remove();

        if (!existingPlaceholder) {
          const a = document.createElement("a");
          a.href = "https://map.mrburger.cz/#world:0:0:0:1500:0:0:0:1:flat";
          a.target = "_blank";
          a.rel = "noopener";
          a.id = "iframe-placeholder";

          const img = document.createElement("img");
          img.src = "/images/bluemap.webp"; // náhled obrázku
          img.alt = "Mapa světa";
          img.className = "img_responsive";

          a.appendChild(img);
          wrapper.appendChild(a);
        }
      }
    }

    // spustit hned
    handleResize(mq);

    // a při změně viewportu
    mq.addEventListener("change", handleResize);