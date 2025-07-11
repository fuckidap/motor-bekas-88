window.addEventListener("DOMContentLoaded", () => {
  const motorGrid = document.querySelector(".motor-grid");
  const produkList = JSON.parse(localStorage.getItem("produkList")) || [];

  produkList.forEach((p, index) => {
    const card = document.createElement("div");
    card.className = "motor-card";
    card.innerHTML = `
      <img src="${p.gambar}" alt="${p.nama}" class="motor-image">
      <div class="motor-content">
          <h3>${p.nama}</h3>
          <p class="price">${p.harga}</p>
          <div class="motor-specs">
              <div class="spec-item"><i class="fas fa-palette"></i><span>Warna: ${p.warna}</span></div>
              <div class="spec-item"><i class="fas fa-tachometer-alt"></i><span>Kondisi: ${p.kondisi}</span></div>
              <div class="spec-item"><i class="fas fa-road"></i><span>Jarak tempuh: ${p.jarak}</span></div>
          </div>
          <a href="detail.html?id=${index}" class="btn btn-primary btn-block">Lihat Detail</a>
      </div>
    `;
    motorGrid.appendChild(card);
  });
});

produkList.forEach((p, index) => {
  const card = document.createElement("div");
  card.className = "motor-card";
  card.innerHTML = `
    <img src="${p.gambar}" alt="${p.nama}" class="motor-image">
    <div class="motor-content">
        <h3>${p.nama}</h3>
        <p class="price">${p.harga}</p>
        <div class="motor-specs">
            <div class="spec-item"><i class="fas fa-palette"></i><span>Warna: ${p.warna}</span></div>
            <div class="spec-item"><i class="fas fa-tachometer-alt"></i><span>Kondisi: ${p.kondisi}</span></div>
            <div class="spec-item"><i class="fas fa-road"></i><span>Jarak tempuh: ${p.jarak}</span></div>
        </div>
        <a href="detail.html?id=${index}" class="btn btn-primary btn-block">Lihat Detail</a>
    </div>
  `;
  motorGrid.appendChild(card);
});
