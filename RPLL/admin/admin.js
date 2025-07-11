function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "12345") {
    localStorage.setItem("adminLogin", "true");
    showAdmin();
  } else {
    alert("Login gagal!");
  }
}

function logout() {
  localStorage.removeItem("adminLogin");
  location.reload();
}

function showAdmin() {
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("adminSection").style.display = "block";
  renderProduk();
}

function simpanProduk() {
  const produk = {
  nama: document.getElementById("nama").value,
  harga: document.getElementById("harga").value,
  warna: document.getElementById("warna").value,
  kondisi: document.getElementById("kondisi").value,
  jarak: document.getElementById("jarak").value,
  gambar: document.getElementById("gambar").value,
  tahun: document.getElementById("tahun").value,
  transmisi: document.getElementById("transmisi").value,
  mesin: document.getElementById("mesin").value,
  bahan: document.getElementById("bahan").value,
  plat: document.getElementById("plat").value,
  deskripsi: document.getElementById("deskripsi").value
};


  let produkList = JSON.parse(localStorage.getItem("produkList")) || [];

  const editIndex = document.getElementById("editIndex").value;
  if (editIndex !== "") {
    produkList[editIndex] = produk;
  } else {
    produkList.push(produk);
  }

  localStorage.setItem("produkList", JSON.stringify(produkList));
  renderProduk();
  resetForm();
}

function renderProduk() {
  const productList = document.getElementById("productList");
  const produkList = JSON.parse(localStorage.getItem("produkList")) || [];
  productList.innerHTML = "";

  produkList.forEach((p, index) => {
    const item = document.createElement("div");
    item.className = "product-item";
    item.innerHTML = `
      <strong>${p.nama}</strong><br>
      Harga: ${p.harga}<br>
      Warna: ${p.warna}<br>
      Kondisi: ${p.kondisi}<br>
      Jarak: ${p.jarak}<br>
      <img src="${p.gambar}" alt="${p.nama}" style="width:100%; max-width:300px"><br>
      <button onclick="editProduk(${index})">Edit</button>
      <button onclick="hapusProduk(${index})">Hapus</button>
    `;
    productList.appendChild(item);
  });
}

function editProduk(index) {
  const produkList = JSON.parse(localStorage.getItem("produkList")) || [];
  const p = produkList[index];
    document.getElementById("editIndex").value = index;
    document.getElementById("nama").value = p.nama;
    document.getElementById("harga").value = p.harga;
    document.getElementById("warna").value = p.warna;
    document.getElementById("kondisi").value = p.kondisi;
    document.getElementById("jarak").value = p.jarak;
    document.getElementById("gambar").value = p.gambar;
    document.getElementById("tahun").value = p.tahun || "";
    document.getElementById("transmisi").value = p.transmisi || "";
    document.getElementById("mesin").value = p.mesin || "";
    document.getElementById("bahan").value = p.bahan || "";
    document.getElementById("plat").value = p.plat || "";
    document.getElementById("deskripsi").value = p.deskripsi || "";

}

function hapusProduk(index) {
  let produkList = JSON.parse(localStorage.getItem("produkList")) || [];
  produkList.splice(index, 1);
  localStorage.setItem("produkList", JSON.stringify(produkList));
  renderProduk();
}

function resetForm() {
  document.getElementById("editIndex").value = "";
  document.getElementById("nama").value = "";
  document.getElementById("harga").value = "";
  document.getElementById("warna").value = "";
  document.getElementById("kondisi").value = "";
  document.getElementById("jarak").value = "";
  document.getElementById("gambar").value = "";
}

window.onload = () => {
  if (localStorage.getItem("adminLogin") === "true") {
    showAdmin();
  }
};


document.getElementById("password").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    login();
  }
});
document.getElementById("username").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    login();
  }
});
