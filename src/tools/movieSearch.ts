import type { ToolFn } from "../../types";
import { z } from 'zod'
import { queryMovies } from "../rag/query";

export const movieSearchToolDefinition = {
    name: 'movieSearch',
    parameters: z.object({
        query: z.string().describe('The search query for finding movies'),
    }),
    description:
    'Searches for movies and information about them, including title, year, genre, director, actors, rating, and description. Use this to answer questions about movies.',
}

type Args = z.infer<typeof movieSearchToolDefinition.parameters>

export const movieSearch: ToolFn<Args> = async({userMessage, toolArgs}) => {
    let results
    try {
        results = await queryMovies(toolArgs.query)

    } catch (e) {
        console.error(e)
        return 'Error: Could not query the db to get the movies'
    }

    const formattedResults = results.map(result => {
        const {metadata, data} = result
        return {...metadata, description: data}
    })
    
    return JSON.stringify(formattedResults, null, 2)
}