const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];
let descuento;

function calcularPrecioConDescuento(precio, descuento) {
    
    const precioConDescuento = precio - descuento;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    switch(couponValue) {
        case "JuanDC_es_Batman":
          descuento = 15;
        break;
        case "pero_no_le_digas_a_nadie":
          descuento = 30;
        break;
        case "es_un_secreto":
          descuento = 25;
        break;
      }
      const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

      const resultP = document.getElementById("ResultP");
      resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
    }
  
  