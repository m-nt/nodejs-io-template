"use strict";

const axios = require('axios').default
const { AxiosError, isAxiosError } = require('axios')
const config = require('../config').bridge_config

module.exports = class Request {
    HEADERS = { "accept": "application/json", "Content-Type": "application/json" }

    /**
     * 
     * @param {String} method 
     * @param {String} url
     * @param {Object | undefined} data 
     * @param {Object | undefined} headers
     * @param {Object | undefined} params 
     * @returns {Object}
     */
    static async send_request(method, url, data, headers, params) {

        const _request = {
            method: method.toLowerCase(),
            url: url,
            data: data ? data : {},
            headers: headers ? { ...this.HEADERS, ...headers } : { ...this.HEADERS },
            params: params ? params : {}
        }

        try {
            const response = await axios.request(_request)
            return response.data
        } catch (error) {
            if (isAxiosError(error))
                return {
                    message: error.message,
                    reason: error.response.data,
                    code: error.code,
                }
            else
                return { message: "Internal server error!", code: "500" }
        }

    }
}

