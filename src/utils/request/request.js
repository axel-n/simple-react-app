import React from "react";

function mockDelay() {
    return  new Promise((resolve) => {
        setTimeout(() => {
            resolve("result");
        }, 1000);
    });
}

export function sendRequest(method, url, params) {
    let data = require('../../mocks/tickets.json');

    return mockDelay()
        .then(() => {
        return new Promise(function(resolve) {
            resolve(data);
        });
    })
}

export function loading() {
    return <div className="animated fadeIn pt-1 text-center">Loading...</div>;
}