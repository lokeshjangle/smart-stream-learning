from mcp.server.fastmcp import FastMCP
from openai import OpenAI

mcp = FastMCP('webSearch')

@mcp.tool()
def perform_websearch(query : str) -> str:
    """
    Perform a web search for a query
    """

    message = [
        {
            
        "role": "system",
        "content": (
            " You are a helpful assistant. Answer the question based on the search results. If the search results do not contain relevant information, say I don't know."
        )
        },
        {
            "role":"user",
            "content":(query)
        }
    ]

    client = OpenAI(api_key=YOUR_API_KEY, base_url="https://api.perplexity.ai")

    response = client.chat.completions.create(
        model="sonar-pro",
        message=message
    )


if __name__ == "__main__":
    mcp.run()