// Setup authorization
const { Client } = require('@notionhq/client')
const { response } = require('express')
const { title } = require('process')

const notion = new Client ({
    auth: process.env.NOTION_API_KEY
})

// Get the database
async function getDatabase() {
    const response = await notion.databases.retrieve({database_id: process.env.NOTION_DATABASE_ID})
    console.log(response)
}
getDatabase()

// Create page in the database
function createPage(title){
    notion.pages.create({
        parent: {
            database_id: process.env.NOTION_DATABASE_ID
        },
        properties: {
            [process.env.NOTION_NAME_ID]: {
                title: [
                    { type: "text",
                    text: { content: title } 
                }
                ]
            }
        }
    })
}
createPage("a car")


