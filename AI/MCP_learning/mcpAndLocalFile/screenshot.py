from mcp.server.fastmcp import FastMCP
from mcp.server.fastmcp.utilities.types import Image
import pyautogui
import io

#create server
mcp = FastMCP("screenshotDemo")

@mcp.tool()
def capture_screenshot() -> Image:
    """
    Capture a screenshot of the current screen and return it as an Image object. Use the tool whenever the user request the screenshot of their activity
    
    """
    
    #capture screenshot with pyautogui
    screenshot = pyautogui.screenshot()

    #create byte array from image
    byte_array = io.BytesIO()
    screenshot.convert("RGB").save(byte_array, format="JPEG", quality=60, optimize=True)

    #return as Image type
    return Image(data=byte_array.getvalue(), format='JPEG')



if __name__ == "__main__":

    #run server
    mcp.run()