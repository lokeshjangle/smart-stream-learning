from mcp.server.fastmcp import FastMCP


mcp = FastMCP("localNotes")


@mcp.tool()
def add_note_to_file(content: str) -> str:
    
    """

    Append the content into user's local notes.txt file
    """

    filename = "notes.txt"

    try:

        with open(filename, "a", encoding="utf-8") as f:

            f.write(content + "\n")

        return f"Note added to {filename}"

    except Exception as e:

        return f"Error appending to file {filename}: {str(e)}"



@mcp.tool()
def read_notes() -> str:
    
    """

    Read notes from a users local file
    """

    filename = "./notes.txt"

    try:

        with open(filename, "r", encoding="utf-8") as f:

            content = f.read()

        return content if content else "No notes found"

    except FileNotFoundError:

        return "No notes found."

    except Exception as e:

        return f"Error reading file {filename}: {str(e)}"




if __name__ == "__main__":
    mcp.run()

