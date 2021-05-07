import axios from "axios";

export const GET_SYMBOLS_ACTION = "GET_SYMBOLS_ACTION";

export function getSymbolsActionCreator() {
    axios(`${process.env.REACT_APP_API_SERVER}/portfolio/symbols`)
        .then((rows) => {
            return {
                type: GET_SYMBOLS_ACTION,
                symbolsArray: rows.map((sym) => { return sym.crypto_symbol; })
            };
        }).catch(error => {
            console.log(error);
        });
}
