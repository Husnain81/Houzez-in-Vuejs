/**
 * @fileOverview This file defines a Pinia store for managing listing related types by admin side.
 *
 * @feature Store Name: `useType`.
 *
 * @export The store is exported as `useType` for use in all listings or properties modules throughout the application.
 *
 * @author https://webpenter.com
 * @date 26 Jan,2025
 */

import {defineStore} from "pinia";

export const useType = defineStore('type', {
    state: () => ({
        types:[
            {id: 1, name: "apartment"},
            {id: 2, name: "studio"},
            {id: 3, name: "office"},
            {id: 4, name: "shop"},
            {id: 5, name: "home"},
            {id: 6, name: "villa"},
            {id: 7, name: "commercial"},
            {id: 8, name: "residential"},
            {id: 9, name: "condo"},
            {id: 10, name: "multi family home"},
            {id: 11, name: "single family home"},
        ],
    }),
    getters: {},
    actions: {}
});