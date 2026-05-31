"""
Complex inputs with MCP Servers
Overview
In this lesson, we explored more advanced concepts related to MCP Servers by diving
into the use of complex inputs and custom data schemas. Here's what we covered:
Pedantic Inputs
Custom Schemas
Practical Example: Person Class
Integration with MCP
Pedantic Inputs
MCP Servers support more than just simple strings or integers.
Pedantic is a schema and data validation library in Python.
It allows us to define custom input types, which MCP clients and servers can
use effectively.
Custom Schemas
Custom schemas help by bundling related data into single input objects.
Example Schema: A delivery object might use a timestamp and dimension as a
schema, instead of separate inputs.
Practical Example: Person Class
We set up a data schema called person with attributes:
First Name: String
Last Name: String
Years of Experience: Integer
Previous Addresses: List of Strings
This schema makes it easier to manage and manipulate data with multiple
attributes.
Integration with MCP
Created a function addPersonToMemberDatabase using the person class as input.
Showcased how to write details from the input into a log file ( log.txt ),
simulating a database action.
Highlights
With a custom schema, functions deal with bundled complex data seamlessly.
Doc strings in functions help explain and ensure that input data types are
processed correctly by the MCP.
Running the Example
We demonstrated importing pedantic models into a new Python file, defining
schemas, and executing them.
We saw how the object person maps directly to our data and can handle complex
types such as lists of strings.
Working with Pedantic
We interacted with tools like Claude to test logging functionality, confirming
that the MCP Server correctly handles inputs by resolving number formats and
ensuring the correct type.
Through this lesson, we learned how custom data schemas using pedantic can greatly
enhance the way we handle inputs in MCP Servers, making our systems more robust and
flexible.
"""

from mcp.server.fastmcp import FastMCP
from pydantic import BaseModel, Field
from typing import List


mcp = FastMCP('Pedantic Inputs')

class Person(BaseModel):
    first_name: str = Field(..., description="First name of the person")
    last_name: str = Field(..., description="Last name of the person")
    years_of_experience: int = Field(..., description="Years of experience")
    previous_addresses: List[str] = Field(..., description="List of previous addresses")
    
@mcp.tool()
async def addPersonToMemberDatabase(person: Person) -> str:
    """
    Adds a person to the member database.

    Args:
        person (Person): A Person object containing the person's details.

    Returns:
        str: A message indicating the result of the operation.
    """
    # Simulate adding to a database by logging to a file
    with open("log.txt", "a") as f:
        f.write(f"Added {person.first_name} {person.last_name} with {person.years_of_experience} years of experience and addresses {person.previous_addresses}\n")

    return f"Added {person.first_name} {person.last_name} to the database."



@mcp.tool()
def read_notes() -> str:
    
    """

    Read notes from a users local file
    """

    filename = "./log.txt"

    try:

        with open(filename, "r", encoding="utf-8") as f:

            content = f.read()

        return content if content else "No notes found"

    except FileNotFoundError:

        return "No notes found."

    except Exception as e:

        return f"Error reading file {filename}: {str(e)}"

if __name__ ==  "__main__":
    mcp.run()