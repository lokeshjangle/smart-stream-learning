from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Resource Test")

@mcp.resource("inventory://overview")
def get_inventory_overview() -> str:
    """Get an overview of the inventory"""

    overview = """
    Inventory Overview:
    - Coffee
    - Tea
    - Milk
    - Sugar
    """

    return overview.strip()

inventroy_name_to_id = {
    "coffee": 1,
    "tea": 2,
    "milk": 3,
    "sugar": 4
}

inventroy_id_to_price = {
    1: 5.0,
    2: 3.0,
    3: 2.0,
    4: 1.0
}

@mcp.resource("inventory://{item_id}/price")
def get_inventory_price_from_id(item_id: int) -> float:
    """
    Get the price of an inventory item by its ID
    """
    
    return inventroy_id_to_price.get(item_id, 0.0)

@mcp.resource("inventory://{inventory_name}/id")
def get_inventory_id_from_name(inventory_name : str) -> int:
    """
    Get the ID of an inventory item by its name
    """
    return inventroy_name_to_id.get(inventory_name, 0)


if __name__ == "__main__":
    mcp.run()
