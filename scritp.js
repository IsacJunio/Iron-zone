// Botão de volta ao topo
window.onscroll = function () {
  let btn = document.getElementById('btnTopo')
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none"
  };
};

function voltarTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}