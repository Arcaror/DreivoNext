// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
var dict = new Map()
const moment = require('moment')
const { Router } = require('next/router')

app.prepare().then(() => {
    createServer(async (req, res) => {
        try {
            // Be sure to pass `true` as the second argument to `url.parse`.
            // This tells it to parse the query portion of the URL.
            const parsedUrl = parse(req.url, true)
            const { pathname, query } = parsedUrl

            if (pathname === '/a') {
                await app.render(req, res, '/a', query)
            } else if (pathname === '/b') {
                await app.render(req, res, '/b', query)
            } else {

                const ip = req.socket.remoteAddress;
                if (dict.has(ip) == false) {
                    dict.set(ip, { count: 1, time: moment() })
                    console.log(`Initialisation of ${JSON.stringify(dict.get(ip))} `)

                }

                if (dict.get(ip).count > (dict.get(ip).duration + 5) * 5) {
                    setTimeout(async () => {
                        dict.set(ip, {
                            count: dict.get(ip).count + 1, time: dict.get(ip).time,
                            duration: moment.duration(moment(dict.get(ip).time).diff(moment(), 'seconds'), 'seconds').as('second') * -1
                        })

                        console.log(`SPAM? Ip: ${ip} Request Data: ${JSON.stringify(dict.get(ip))} Pathname: ${pathname}`)
                        res.write(`<html><h1>Please stop spamming, you are logged... </br> IP: ${ip}</h1></html>`)
                        res.end()
                    }, 3000)

                } else {
                    dict.set(ip, {
                        count: dict.get(ip).count + 1, time: dict.get(ip).time,
                        duration: moment.duration(moment(dict.get(ip).time).diff(moment(), 'seconds'), 'seconds').as('second') * -1
                    })
                    console.log(`Ip: ${ip} Request Data: ${JSON.stringify(dict.get(ip))} Pathname: ${pathname}`)
           
                    if(dict.get(ip).duration > 60){
                        dict.set(ip, { count: 1, time: moment(), duration: 0 })

                    }

                    await handle(req, res, parsedUrl)

                }

            }
        } catch (err) {
            console.error('Error occurred handling', req.url, err)
            res.statusCode = 500
            res.end('internal server error')
        }
    }).listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://${hostname}:${port}`)
    })
})