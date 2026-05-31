# {
#   "mcpServers": {
#     "airbnb": {
#       "command": "npx",
#       "args": [
#         "-y",
#         "@openbnb/mcp-server-airbnb"
#       ]
#     }
#   }
# }


from mcp.client.stdio import stdio_client
from mcp import ClientSession, StdioServerParameters, types
import asyncio
import traceback

server_param = StdioServerParameters(
    command="npx",
    args=["-y","@openbnb/mcp-server-airbnb",  "--ignore-robots-txt"]
)


async def run():
    try:
        print("Starting client")
        async with stdio_client(server_param) as (read, write):
            print("Client connected, creating session....")
            async with ClientSession(read, write) as session:
                print("Initializing session...")
                await session.initialize()

                print("Listing tools...")
                tools = await session.list_tools()
                print("Available tools:", tools)

                print("Calling tool....")
                result = await session.call_tool("airbnb_search", arguments={"location": "India"})
                print("Tool result:", result)
        
    except Exception as e:
         print("An error occurred:")
         traceback.print_exc()



if __name__ == "__main__":
    asyncio.run(run())