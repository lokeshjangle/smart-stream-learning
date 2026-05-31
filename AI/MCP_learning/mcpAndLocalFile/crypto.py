from mcp.server.fastmcp import FastMCP


mcp = FastMCP("crypto")


@mcp.tool()
def get_cryptocurrency_price(crypto: str, currency: str) -> str:
    
    """

    Get the current price of a cryptocurrency

    """
    try:
        
        import requests
        crypto = crypto.lower()
        currency = currency.lower()

        url = f"https://api.coingecko.com/api/v3/simple/price?ids={crypto}&vs_currencies={currency}"

        response = requests.get(url)

        data = response.json()

        price = data[crypto][currency]

        return f"The current price of {crypto} is ${price}"

    except Exception as e:

        return f"Error: {str(e)}"

    




if __name__ == "__main__":
    mcp.run()

