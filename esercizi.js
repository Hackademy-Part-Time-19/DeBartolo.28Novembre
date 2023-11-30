let persona = {
    nome: "Marco",
    cognome: "Rossi",
    età: "25",

   presentati : function() {
        console.log (`ciao ${this.nome}`)
    }
}


persona.presentati();


let agenda = {
    listaContatti:[{
        nome: "Mauro",
        numero: "3245649858",
    },
    {
        nome: "Dario",
        numero: "3245000000",
    },
    {
        nome: "Clara",
        numero: "32456222222",
    },
    {
        nome: "Federica",
        numero: "11111111111",
    },
    {
        nome: "Michela",
        numero: "324533333333",
    }],

    mostraContatti: function () {
        console.log(this.listaContatti)
    },


    aggiungiElementoAllaLista: function (elemento){
        this.listaContatti.push(elemento)
    },

    eliminaContatto: function (nomeDaEliminare) {
        let indice = this.listaContatti.findIndex((contatto) => {
            return contatto.nome== nomeDaEliminare
        })

        if (indice!= -1) {
            this.listaContatti.splice(indice,1)
        } else {
            console.log("Non ho trovato il contatto")
        }
    },

    modificaContatto: function (nomeDaModificare, nuovoNome, nuovoNumero) {
        let indice = this.listaContatti.findIndex((contatto) => {
            return contatto.nome == nomeDaModificare
        })

        if (indice!= -1) {
            this.listaContatti[indice].nome = nuovoNome
            this.listaContatti[indice].numero = nuovoNumero
        } else {
            console.log ("Non è stato trovato il contatto da modificare")
        }
        
    }
    


}


agenda.modificaContatto("Mauro", "Franco", "3243234321")
agenda.mostraContatti()