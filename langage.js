document.addEventListener("DOMContentLoaded", function () {
  const traductBtn = document.querySelector(".traduction");

  traductBtn.addEventListener("click", function () {

    document.querySelectorAll(".nav-a[href='#accueil']").forEach(nav => {
      nav.textContent = "home";
    });

    document.querySelectorAll(".nav-a[href='#propos']").forEach(nav =>{
      nav.textContent = "about";
    })

    document.querySelector(".header-text").innerHTML = "Innovation in<span> Protection Services</span>";

    document.querySelector(".itemsT1").textContent = "Security";
    document.querySelectorAll(".itemsT2").forEach(item =>{
      item.textContent = "Tracing";
    });

    document.querySelector(".itemsT3").textContent = "Assistance";
    document.querySelectorAll(".itemsT4").forEach(item =>{
      item.textContent = "Advice";
    });

    document.querySelectorAll(".btnContact").forEach(btn => {
      btn.innerHTML = "contact-us <i class='fa-solid fa-angle-right'></i>";
    });

    document.querySelector(".titrePropos").textContent = "Car safety is our priority.";
    document.querySelector(".textPropos").textContent = "Pioneers in Automotive Security Innovation. At BlackBox, we are proud to be at the forefront of automotive security innovation. Our journey began with a simple motivation: To offer vehicle owners the ultimate peace of mind";
    document.querySelector(".textPropos2").textContent = "Do you need a service that provides you with effective protection? We are here for you";

    document.querySelector(".titreParallax1").textContent = "Choose Us";
    document.querySelector(".textParallax1").textContent = "Our commitment to the safety of your car is expressed through cutting-edge technologies, giving you confidence and absolute peace of mind and also your peace of mind on every journey.";
    
    document.querySelector(".titreS2").textContent = "This is what BlackBox does";

    document.querySelector(".titreService1").textContent = "Proactive Alertes";
    document.querySelector(".textService1").textContent = "BlackBox constantly monitors vehicle functioning and data. It proactively detects potential risks or unusual situations, and its alerts signal any risks or suspicious behavior, providing precious peace of mind to drivers.";

    document.querySelector(".titreService2").textContent = "Connected to Artificial Intelligence";
    document.querySelector(".textService2").textContent = "In the event of incidents or potentially hazardous activities, notifications prompt optimal responsiveness and adoption of safer behaviors. BlackBox leverages artificial intelligence to enhance road safety.";

    document.querySelector(".titreService3").textContent = "Remote Immobilization";
    document.querySelector(".textService3").textContent = "BlackBox allows you to immobilize your vehicle remotely. With this feature, the recovery process is simplified in collaboration with the appropriate authorities in case of theft.";

    document.querySelector(".titreService4").textContent = "Notifications";
    document.querySelector(".textService4").textContent = "BlackBox lets you know in the event of a towing attempt, vibrations, motion alerts, battery disconnection, unauthorized movements.";

    document.querySelector(".titreService5").textContent = "24/7 support";
    document.querySelector(".textService5").textContent = "We are here to solve your problems at any time and make your life easier. Whether it's an emergency, a complaint or a simple question, we're available to listen and ready to satisfy your needs.";

    document.querySelector(".titreService6").textContent = "You will have Full access to the Application";
    document.querySelector(".textService6").textContent = "With our BlackBox app, you can access your vehicle's preventive alerts, historical and real-time tracking anytime, anywhere. Simply press a button, and you'll know exactly where your vehicle is within seconds.";

    document.querySelector(".titreService7").textContent = "Your Private Guardian Available 24/7";
    document.querySelector(".textService7").textContent = "BlackBox is your faithful virtual guardian, ensuring your safety and that of your vehicle. Our embedded technologies, customer service attentive to your needs, and our continuous commitment to your security make us the top choice for a comprehensive and effective anti-theft solution.";

    document.querySelector(".downloadBtn").innerHTML = "Download Application <i style='font-size: 2rem; margin-left: 7px;' class='fa-brands fa-android'></i>";

    document.querySelector(".titreParallax2").textContent = "Why you should trust us";
    document.querySelector(".textParallax2").textContent = "With more than 15 years of research and development on the roads of Africa, we have honed our expertise to create a cutting-edge solution that redefines the safety of vehicles and motorcycles in everyday life.";

    document.querySelector(".titreTop").textContent = "Order Your BlackBox";
    document.querySelector(".textTop").textContent = "BlackBox is more than just an anti-theft device, it includes a low-profile and compact design, it is almost undetectable. BlackBox is a non-invasive device that can be installed in a few minutes without leaving any trace. BlackBox is your safeguard that will turn on when you leave your vehicle. It is a 24/7 watchful guardian, always ready to protect what holds a special place in your life: your vehicle.";

    document.querySelector(".titreBottom").textContent = "Our Innovation Guarantees Your Peace of Mind";
    document.querySelector(".textBottom").textContent = "We understand the worry of losing your valuable assets. This idea drives our commitment to develop BlackBox, a result of years of research and technological progress.";

    document.querySelector(".location").textContent = "Location";
    document.querySelectorAll(".tPhone").forEach(tel => {
      tel.textContent = "Phone";
    });

    document.querySelector(".submit").innerHTML = "Submit <i style='margin-left: 5px;' class='fa-solid fa-angle-right'></i>";

    document.querySelector(".lNav").textContent = "Navigation Links";

    document.querySelector(".tService").textContent = "Our services";
    document.querySelector(".itemsS1").textContent = "Security Auto-Moto";
  });
});

document.getElementById("nom").placeholder = "Name";
document.getElementById("prenom").placeholder = "First name";