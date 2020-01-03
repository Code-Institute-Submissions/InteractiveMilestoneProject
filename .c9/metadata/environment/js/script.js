{"filter":false,"title":"script.js","tooltip":"/js/script.js","undoManager":{"mark":12,"position":12,"stack":[[{"start":{"row":0,"column":0},"end":{"row":146,"column":13},"action":"insert","lines":[" $(document).ready(function() {","          ","            $(\"#cronometro\").addClass(\"green\");","        });","      ","        var arrayMemoria = [\"1\", \"1\", \"2\", \"2\", \"3\", \"3\", \"4\", \"4\", \"5\", \"5\", \"6\", \"6\"];","","        var valor_memoria = [];","        var memoria_carta_ids = [];","        var virada_carta = 0;","","        // Funcion tiempo en segundos","","        var seg = 25;","        var timer","","        function restar() {","            timer = setInterval(function() {","                seg = seg - 1;","                //                ","                if (seg >= 0) {","                    $(\"#cronometro\").html(seg);","                } else {","                    alert(\"PERDISTE ........ JUGAR DE NUEVO\");","                    clearInterval(timer);","                    virada_carta = 0;","                    nuevaTabla();","                    $(\"#borde\").show();","                    $(\"#cronometro\").html(\"25\");","                    $(\"#cronometro\").removeClass(\"red\");","                    $(\"#cronometro\").addClass(\"green\");","                    seg = 25;","                }","                if (seg >= 6 && seg <= 15) {","                    $(\"#cronometro\").removeClass(\"green\");","                    $(\"#cronometro\").addClass(\"yellow\");","                } else if (seg >= 0 && seg <= 5) {","                    $(\"#cronometro\").removeClass(\"yellow\");","                    $(\"#cronometro\").addClass(\"red\");","                }","","            }, 1000);","","        }","","","        $('#start').on(\"click\", function() {","            if (seg === 25) {","                $(\"#cronometro\").addClass(\"green\");","                $(\"#borde\").hide();","                restar();","            }","        });","","        // Metodo Fisher-Yates para mezclar un array","        Array.prototype.memoriaCartaEmbarajar = function() {","            var i = this.length;","            var indiceAleatorio;","            var valorTemporal;","            while (--i > 0) {","                indiceAleatorio = Math.floor(Math.random() * (i + 1));","                valorTemporal = this[indiceAleatorio];","                this[indiceAleatorio] = this[i];","                this[i] = valorTemporal;","            };","        };","        // Funcion para crear un nuevo tablero","        function nuevaTabla() {","            var output = \"\";","            arrayMemoria.memoriaCartaEmbarajar();","","            for (var i = 0; i < arrayMemoria.length; i++) {","                output += '<div id=\"carta_' + i + '\" onclick=\"virarCartaMemoria(this,\\'' + arrayMemoria[i] + '\\')\"></div>';","            }","            document.getElementById('table_memoria').innerHTML = output;","            //            $(\"#borde\").show();","            //            document.getElementById('borde').show();","","            valor_memoria = [];","            memoria_carta_ids = [];","            var virada_carta = 0;","            // probando una cosa","        }","","        // Funcion del Juego","        function virarCartaMemoria(carta, valor) {","","            if (carta.innerHTML == \"\" && valor_memoria.length < 2) {","                carta.style.background = '#fff';","                carta.innerHTML = valor;","                // Codigo a ejecutar al dar vuelta la primera carta","                if (valor_memoria.length === 0) {","                    valor_memoria.push(valor);","                    memoria_carta_ids.push(carta.id);","                    // Codiga a ejecuatra al dar vueta la seganda carta    ","                } else if (valor_memoria.length === 1) {","                    valor_memoria.push(valor);","                    memoria_carta_ids.push(carta.id);","                    if (valor_memoria[0] === valor_memoria[1]) {","                        virada_carta += 2;","                        // despejando los dos Arrays","                        valor_memoria = [];","                        memoria_carta_ids = [];","                        // chekea si la mesa entera esta despejada","                        if (virada_carta === arrayMemoria.length) {","                            // XXXXXXXX      AQUI TENGO QUE PARAR EL RELOJ     XXXXXXXX","","                            setTimeout(function() {","                                alert(\"GANASTE !!!  ... Creando un nuevo tablero\");","                                clearInterval(timer);","                                document.getElementById('table_memoria').innerHTML = \"\";","                                seg = 25;","                                $(\"#borde\").show();","                                $(\"#cronometro\").html(\"25\");","                                $(\"#cronometro\").removeClass(\"yellow\");","                                $(\"#cronometro\").removeClass(\"red\");","                                $(\"#cronometro\").addClass(\"green\");","                                valor_memoria = [];","                                memoria_carta_ids = [];","                                virada_carta = 0;","                                nuevaTabla();","","                            }, 100);","","","","                        }","                    } else {","                        function virarAtras() {","                            // las dos cartas se van a virar","                            var carta_1 = document.getElementById(memoria_carta_ids[0]);","                            var carta_2 = document.getElementById(memoria_carta_ids[1]);","                            carta_1.style.background = '#169B62';","                            carta_1.innerHTML = \"\";","                            carta_2.style.background = '#169B62';","                            carta_2.innerHTML = \"\";","                            // despejando los dos Arrays","                            valor_memoria = [];","                            memoria_carta_ids = [];","                        }","                        setTimeout(virarAtras, 700);","                    }","                }","            }","        }","","nuevaTabla();"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":4,"column":6},"action":"remove","lines":[" $(document).ready(function() {","          ","            $(\"#cronometro\").addClass(\"green\");","        });","      "],"id":2}],[{"start":{"row":7,"column":7},"end":{"row":10,"column":17},"action":"remove","lines":[" // Funcion tiempo en segundos","","        var seg = 25;","        var timer"],"id":3}],[{"start":{"row":9,"column":6},"end":{"row":45,"column":11},"action":"remove","lines":["  function restar() {","            timer = setInterval(function() {","                seg = seg - 1;","                //                ","                if (seg >= 0) {","                    $(\"#cronometro\").html(seg);","                } else {","                    alert(\"PERDISTE ........ JUGAR DE NUEVO\");","                    clearInterval(timer);","                    virada_carta = 0;","                    nuevaTabla();","                    $(\"#borde\").show();","                    $(\"#cronometro\").html(\"25\");","                    $(\"#cronometro\").removeClass(\"red\");","                    $(\"#cronometro\").addClass(\"green\");","                    seg = 25;","                }","                if (seg >= 6 && seg <= 15) {","                    $(\"#cronometro\").removeClass(\"green\");","                    $(\"#cronometro\").addClass(\"yellow\");","                } else if (seg >= 0 && seg <= 5) {","                    $(\"#cronometro\").removeClass(\"yellow\");","                    $(\"#cronometro\").addClass(\"red\");","                }","","            }, 1000);","","        }","","","        $('#start').on(\"click\", function() {","            if (seg === 25) {","                $(\"#cronometro\").addClass(\"green\");","                $(\"#borde\").hide();","                restar();","            }","        });"],"id":6}],[{"start":{"row":5,"column":29},"end":{"row":6,"column":0},"action":"remove","lines":["",""],"id":7},{"start":{"row":5,"column":29},"end":{"row":6,"column":7},"action":"remove","lines":["","       "]},{"start":{"row":5,"column":29},"end":{"row":6,"column":0},"action":"remove","lines":["",""]},{"start":{"row":5,"column":29},"end":{"row":6,"column":6},"action":"remove","lines":["","      "]}],[{"start":{"row":5,"column":29},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":8},{"start":{"row":6,"column":0},"end":{"row":6,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":0,"column":0},"end":{"row":100,"column":13},"action":"remove","lines":["","        var arrayMemoria = [\"1\", \"1\", \"2\", \"2\", \"3\", \"3\", \"4\", \"4\", \"5\", \"5\", \"6\", \"6\"];","","        var valor_memoria = [];","        var memoria_carta_ids = [];","        var virada_carta = 0;","        ","","        // Metodo Fisher-Yates para mezclar un array","        Array.prototype.memoriaCartaEmbarajar = function() {","            var i = this.length;","            var indiceAleatorio;","            var valorTemporal;","            while (--i > 0) {","                indiceAleatorio = Math.floor(Math.random() * (i + 1));","                valorTemporal = this[indiceAleatorio];","                this[indiceAleatorio] = this[i];","                this[i] = valorTemporal;","            };","        };","        // Funcion para crear un nuevo tablero","        function nuevaTabla() {","            var output = \"\";","            arrayMemoria.memoriaCartaEmbarajar();","","            for (var i = 0; i < arrayMemoria.length; i++) {","                output += '<div id=\"carta_' + i + '\" onclick=\"virarCartaMemoria(this,\\'' + arrayMemoria[i] + '\\')\"></div>';","            }","            document.getElementById('table_memoria').innerHTML = output;","            //            $(\"#borde\").show();","            //            document.getElementById('borde').show();","","            valor_memoria = [];","            memoria_carta_ids = [];","            var virada_carta = 0;","            // probando una cosa","        }","","        // Funcion del Juego","        function virarCartaMemoria(carta, valor) {","","            if (carta.innerHTML == \"\" && valor_memoria.length < 2) {","                carta.style.background = '#fff';","                carta.innerHTML = valor;","                // Codigo a ejecutar al dar vuelta la primera carta","                if (valor_memoria.length === 0) {","                    valor_memoria.push(valor);","                    memoria_carta_ids.push(carta.id);","                    // Codiga a ejecuatra al dar vueta la seganda carta    ","                } else if (valor_memoria.length === 1) {","                    valor_memoria.push(valor);","                    memoria_carta_ids.push(carta.id);","                    if (valor_memoria[0] === valor_memoria[1]) {","                        virada_carta += 2;","                        // despejando los dos Arrays","                        valor_memoria = [];","                        memoria_carta_ids = [];","                        // chekea si la mesa entera esta despejada","                        if (virada_carta === arrayMemoria.length) {","                            // XXXXXXXX      AQUI TENGO QUE PARAR EL RELOJ     XXXXXXXX","","                            setTimeout(function() {","                                alert(\"GANASTE !!!  ... Creando un nuevo tablero\");","                                clearInterval(timer);","                                document.getElementById('table_memoria').innerHTML = \"\";","                                seg = 25;","                                $(\"#borde\").show();","                                $(\"#cronometro\").html(\"25\");","                                $(\"#cronometro\").removeClass(\"yellow\");","                                $(\"#cronometro\").removeClass(\"red\");","                                $(\"#cronometro\").addClass(\"green\");","                                valor_memoria = [];","                                memoria_carta_ids = [];","                                virada_carta = 0;","                                nuevaTabla();","","                            }, 100);","","","","                        }","                    } else {","                        function virarAtras() {","                            // las dos cartas se van a virar","                            var carta_1 = document.getElementById(memoria_carta_ids[0]);","                            var carta_2 = document.getElementById(memoria_carta_ids[1]);","                            carta_1.style.background = '#169B62';","                            carta_1.innerHTML = \"\";","                            carta_2.style.background = '#169B62';","                            carta_2.innerHTML = \"\";","                            // despejando los dos Arrays","                            valor_memoria = [];","                            memoria_carta_ids = [];","                        }","                        setTimeout(virarAtras, 700);","                    }","                }","            }","        }","","nuevaTabla();"],"id":9}],[{"start":{"row":0,"column":0},"end":{"row":93,"column":9},"action":"insert","lines":["var arrayMemoria = [\"1\", \"1\", \"2\", \"2\", \"3\", \"3\", \"4\", \"4\", \"5\", \"5\", \"6\", \"6\"];","","        var valor_memoria = [];","        var memoria_carta_ids = [];","        var virada_carta = 0;","","       ","","        // Metodo Fisher-Yates para mezclar un array","        Array.prototype.memoriaCartaEmbarajar = function() {","            var i = this.length;","            var indiceAleatorio;","            var valorTemporal;","            while (--i > 0) {","                indiceAleatorio = Math.floor(Math.random() * (i + 1));","                valorTemporal = this[indiceAleatorio];","                this[indiceAleatorio] = this[i];","                this[i] = valorTemporal;","            };","        };","        // Funcion para crear un nuevo tablero","        function nuevaTabla() {","            var output = \"\";","            arrayMemoria.memoriaCartaEmbarajar();","","            for (var i = 0; i < arrayMemoria.length; i++) {","                output += '<div id=\"carta_' + i + '\" onclick=\"virarCartaMemoria(this,\\'' + arrayMemoria[i] + '\\')\"></div>';","            }","            document.getElementById('table_memoria').innerHTML = output;","            //            $(\"#borde\").show();","            //            document.getElementById('borde').show();","","            valor_memoria = [];","            memoria_carta_ids = [];","            var virada_carta = 0;","            // probando una cosa","        }","","        // Funcion del Juego","        function virarCartaMemoria(carta, valor) {","","            if (carta.innerHTML == \"\" && valor_memoria.length < 2) {","                carta.style.background = '#fff';","                carta.innerHTML = valor;","                // Codigo a ejecutar al dar vuelta la primera carta","                if (valor_memoria.length === 0) {","                    valor_memoria.push(valor);","                    memoria_carta_ids.push(carta.id);","                    // Codiga a ejecuatra al dar vueta la seganda carta    ","                } else if (valor_memoria.length === 1) {","                    valor_memoria.push(valor);","                    memoria_carta_ids.push(carta.id);","                    if (valor_memoria[0] === valor_memoria[1]) {","                        virada_carta += 2;","                        // despejando los dos Arrays","                        valor_memoria = [];","                        memoria_carta_ids = [];","                        // chekea si la mesa entera esta despejada","                        if (virada_carta === arrayMemoria.length) {","                            // XXXXXXXX      AQUI TENGO QUE PARAR EL RELOJ     XXXXXXXX","","                          ","                                alert(\"GANASTE !!!  ... Creando un nuevo tablero\");","                               ","                                document.getElementById('table_memoria').innerHTML = \"\";","                                ","                                valor_memoria = [];","                                memoria_carta_ids = [];","                                virada_carta = 0;","                                nuevaTabla();","","                       ","","","","                        }","                    } else {","                        function virarAtras() {","                            // las dos cartas se van a virar","                            var carta_1 = document.getElementById(memoria_carta_ids[0]);","                            var carta_2 = document.getElementById(memoria_carta_ids[1]);","                            carta_1.style.background = '#169B62';","                            carta_1.innerHTML = \"\";","                            carta_2.style.background = '#169B62';","                            carta_2.innerHTML = \"\";","                            // despejando los dos Arrays","                            valor_memoria = [];","                            memoria_carta_ids = [];","                        }","                        setTimeout(virarAtras, 700);","                    }","                }","            }","        }"],"id":10}],[{"start":{"row":19,"column":10},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":11},{"start":{"row":20,"column":0},"end":{"row":20,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":94,"column":9},"end":{"row":95,"column":0},"action":"insert","lines":["",""],"id":12},{"start":{"row":95,"column":0},"end":{"row":95,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":95,"column":8},"end":{"row":96,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":96,"column":0},"end":{"row":96,"column":8},"action":"insert","lines":["        "]},{"start":{"row":96,"column":8},"end":{"row":96,"column":9},"action":"insert","lines":["n"]},{"start":{"row":96,"column":9},"end":{"row":96,"column":10},"action":"insert","lines":["u"]},{"start":{"row":96,"column":10},"end":{"row":96,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":96,"column":8},"end":{"row":96,"column":11},"action":"remove","lines":["nue"],"id":14},{"start":{"row":96,"column":8},"end":{"row":96,"column":20},"action":"insert","lines":["nuevaTabla()"]}],[{"start":{"row":96,"column":20},"end":{"row":96,"column":21},"action":"insert","lines":[";"],"id":15}]]},"ace":{"folds":[],"scrolltop":1020,"scrollleft":0,"selection":{"start":{"row":96,"column":21},"end":{"row":96,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1578011909647,"hash":"0a6c12f098613e26d3df9cf0d68f203baf5a8169"}