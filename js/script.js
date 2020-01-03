var arrayMemoria = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6"];

        var valor_memoria = [];
        var memoria_carta_ids = [];
        var virada_carta = 0;

       

        // Metodo Fisher-Yates para mezclar un array
        Array.prototype.memoriaCartaEmbarajar = function() {
            var i = this.length;
            var indiceAleatorio;
            var valorTemporal;
            while (--i > 0) {
                indiceAleatorio = Math.floor(Math.random() * (i + 1));
                valorTemporal = this[indiceAleatorio];
                this[indiceAleatorio] = this[i];
                this[i] = valorTemporal;
            };
        };
        
        // Funcion para crear un nuevo tablero
        function nuevaTabla() {
            var output = "";
            arrayMemoria.memoriaCartaEmbarajar();

            for (var i = 0; i < arrayMemoria.length; i++) {
                output += '<div id="carta_' + i + '" onclick="virarCartaMemoria(this,\'' + arrayMemoria[i] + '\')"></div>';
            }
            document.getElementById('table_memoria').innerHTML = output;
            //            $("#borde").show();
            //            document.getElementById('borde').show();

            valor_memoria = [];
            memoria_carta_ids = [];
            var virada_carta = 0;
            // probando una cosa
        }

        // Funcion del Juego
        function virarCartaMemoria(carta, valor) {

            if (carta.innerHTML == "" && valor_memoria.length < 2) {
                carta.style.background = '#fff';
                carta.innerHTML = valor;
                // Codigo a ejecutar al dar vuelta la primera carta
                if (valor_memoria.length === 0) {
                    valor_memoria.push(valor);
                    memoria_carta_ids.push(carta.id);
                    // Codiga a ejecuatra al dar vueta la seganda carta    
                } else if (valor_memoria.length === 1) {
                    valor_memoria.push(valor);
                    memoria_carta_ids.push(carta.id);
                    if (valor_memoria[0] === valor_memoria[1]) {
                        virada_carta += 2;
                        // despejando los dos Arrays
                        valor_memoria = [];
                        memoria_carta_ids = [];
                        // chekea si la mesa entera esta despejada
                        if (virada_carta === arrayMemoria.length) {
                            // XXXXXXXX      AQUI TENGO QUE PARAR EL RELOJ     XXXXXXXX

                          
                                alert("GANASTE !!!  ... Creando un nuevo tablero");
                               
                                document.getElementById('table_memoria').innerHTML = "";
                                
                                valor_memoria = [];
                                memoria_carta_ids = [];
                                virada_carta = 0;
                                nuevaTabla();

                       



                        }
                    } else {
                        function virarAtras() {
                            // las dos cartas se van a virar
                            var carta_1 = document.getElementById(memoria_carta_ids[0]);
                            var carta_2 = document.getElementById(memoria_carta_ids[1]);
                            carta_1.style.background = '#169B62';
                            carta_1.innerHTML = "";
                            carta_2.style.background = '#169B62';
                            carta_2.innerHTML = "";
                            // despejando los dos Arrays
                            valor_memoria = [];
                            memoria_carta_ids = [];
                        }
                        setTimeout(virarAtras, 700);
                    }
                }
            }
        }
        
        nuevaTabla();