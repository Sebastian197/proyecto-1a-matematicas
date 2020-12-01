module.exports = {
    /**
     * Suma de dos números
     * @example
     * n1 = 1, n2 = 3 = -> resultado 4
     * @param {*} n1 Número uno de la suma
     * @param {*} n2 Número dos de la suma
     */
    suma: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 + n2 : this.mensajeError());
    },
    /**
     * Resta de dos números
     * @example
     * n1 = 3, n2 = 1 = -> resultado 2
     * @param {*} n1 Número uno de la resta
     * @param {*} n2 Número dos de la resta
     */
    resta: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 - n2 : this.mensajeError());
    },
    /**
     * División de dos números
     * @example
     * n1 = 4, n2 = 2 = -> resultado 2
     * @param {*} n1 Número uno de la división
     * @param {*} n2 Número dos de la división
     */
    division: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 / n2 : this.mensajeError());
    },
    /**
     * Multiplicación de dos números
     * @example
     * n1 = 3, n2 = 4 = -> resultado 12
     * @param {*} n1 Número uno de la multiplicación
     * @param {*} n2 Número dos de la multiplicación
     */
    multiplicacion: function (n1, n2) {
        return (this.esNumero(n1, n2) ? n1 * n2 : this.mensajeError());
    },
    /**
     * Lanza por consola un mensaje de error cuando no tengamos valores númericos
     */
    mensajeError: function () {
        console.log('Un valor o los dos valores no son númericos');
    },
    /**
     * Comprueba si los parámetros pasados son números
     * * @example
     * n1 = true, n2 = 4 = -> resultado 'Un valor o los dos valores no son númericos'
     * @param {*} n1 Número uno
     * @param {*} n2 Número dos
     */
    esNumero: function (n1, n2) {
        if (typeof n1 !== 'number' || typeof n2 !== 'number') return false;
        return true;
    }
}