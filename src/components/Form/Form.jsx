async function handleSubmit(event) {
    // Collecting data
    // event.preventDefault();
    const formData = new FormData(event.target);
    const full_name = formData.get("full_name");
    const phone = formData.get("phone");
    const productID = formData.get("productId");
  
    // Sending message to Telegram
    const botToken = "6763426670:AAFLn-PrctiM4js3Hrogxys4Ah21Nxc7wE4";
    const chatId = "524815458";
    let message = `<b>👤 Ismi:</b> ${full_name}       <b>📞 Mobil Aloqa:</b> ${phone}       <b>💬 Mahsulot Raqami:</b> ${productID}`;
  
    let apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=html`;
    await fetch(apiUrl);
  }
  
  export { handleSubmit };
