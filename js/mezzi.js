
document.addEventListener("DOMContentLoaded", () => {
    const players = document.querySelectorAll(".player-card");

    // Ritardo iniziale di 2 secondi prima di iniziare l'animazione
    const initialDelay = 2000;

    // Aggiungi un ritardo progressivo per ciascun giocatore
    players.forEach((player, index) => {
        const img = player.querySelector(".player-img");

        // Mostra il giocatore con un ritardo progressivo
        setTimeout(() => {
            player.style.opacity = "1";
            player.style.transform = "translateY(0)";
        }, initialDelay + index * 500);

        // Applica l'effetto sfumatura di default
        img.style.maskImage = "linear-gradient(to bottom, black 75%, rgba(0, 0, 0, 0) 90%)";
        img.style.webkitMaskImage = "linear-gradient(to bottom, black 75%, rgba(0, 0, 0, 0) 90%)";
        img.style.transition = "transform 0.3s ease, mask-image 0.2s ease, -webkit-mask-image 0.2s ease";

        // Rimuovi la sfumatura in hover e aggiungi ingrandimento graduale
        player.addEventListener("mouseover", () => {
            img.style.maskImage = "none";
            img.style.webkitMaskImage = "none";
            img.style.transform = "scale(1.25)"; // Zoom al 25%
        });

        // Ripristina la sfumatura e rimuovi lo zoom quando il cursore esce
        player.addEventListener("mouseout", () => {
            img.style.maskImage = "linear-gradient(to bottom, black 75%, rgba(0, 0, 0, 0) 90%)";
            img.style.webkitMaskImage = "linear-gradient(to bottom, black 75%, rgba(0, 0, 0, 0) 90%)";
            img.style.transform = "scale(1)"; // Torna alla dimensione originale
        });
    });
});

// Dati delle descrizioni
const vehicleDescriptions = {
    idea: {
        title: "Fiat Idea (V16)",
        description: "La Fiat Idea è il nuovo gioiello della Misericordia di Valverde. Compatta, agile e super versatile, è pronta a supportare ogni missione con stile ed efficienza. Perfetta per muoversi in città, aggiunge un tocco di energia e dinamismo alla nostra squadra! "
    },
    suzuki: {
        title: "Suzuki Swift (V13)",
        description: "La Suzuki Swift è ormai la veterana della nostra flotta. Con il suo design sportivo e la sua agilità, è pronta a scattare in azione ovunque serva. Perfetta per gli spostamenti rapidi, unisce praticità e stile per dare ancora più sprint al nostro servizio! "
    },
    doblo: {
        title: "Fiat Doblò (V15)",

        description: "Il Fiat Doblò è l' alleato numero 1 della Misericordia per il trasporto disabili! Grazie al sistema di sollevamento e fissaggio, garantisce sicurezza e facilità d’accesso. Il suo formato compatto lo rende perfetto per muoversi agilmente in città, unendo praticità e comfort per ogni esigenza di mobilità."
    },
    ducato: {
        title: "Fiat Ducato (V12)",

        description: "Il nostro Fiat Ducato ci ha supportato per molti anni senza battere ciglio, e continua a rimanere una certezza per la nostra flotta. Grazie alla sua stazza fornisce una grande versatilità e comodità, nonchè una sorprendente agilità nelle vie cittadine."
    },
    bulanza: {
        title: "Ambulanza (V14)",

        description: "Il nostro fiore all'occhiello. Dotata di attrezzature all'avanguardia, la nostra ambulanza è progettata per garantire sicurezza e rapidità nei soccorsi. Con il suo spazio interno ottimizzato e il design studiato per ogni emergenza, è pronta a portare assistenza ovunque serva, con professionalità e dedizione."
    }
};

// Mostra il modal
function showModal(vehicleId) {
    const modal = document.getElementById('vehicle-modal');
    const title = document.getElementById('modal-title'); 
    const description = document.getElementById('modal-description');

    title.textContent = vehicleDescriptions[vehicleId].title;
    description.textContent = vehicleDescriptions[vehicleId].description;


    modal.style.display = 'flex';
}

// Chiudi il modal
function closeModal() {
    const modal = document.getElementById('vehicle-modal');
    modal.style.display = 'none';
}
