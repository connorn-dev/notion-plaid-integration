const { Client } = require('@notionhq/client')
const { response } = require('express')

const notion = new Client ({
    auth: process.env.NOTION_API_KEY
})







// Get the database
async function getDatabase() {
    const response = await notion.databases.retrieve({database_id: process.env.NOTION_DATABASE_ID})
    console.log(response)
}

getDatabase()

