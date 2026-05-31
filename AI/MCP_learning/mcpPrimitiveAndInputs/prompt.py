from mcp.server.fastmcp import FastMCP

mcp = FastMCP("Prompts")

@mcp.prompt()
def get_prompt(topic: str) -> str:
    """
    Returns a prompt that will do a detailed analysis on a topic
    Args:
        topic: the topic to do research on
    """
    return f"Do a detailed analysis on following topic: {topic}"

@mcp.prompt()
def write_detailed_historical_report(topic: str, number_of_paragraphs: int) -> str:
    """
    Create a concise research report on the history of a topic.
    Args:
        topic: the topic to research
        number_of_paragraphs: number of paragraphs for the main section
    """

    
    prompt = """
    Create a concise research report on the history of {topic}. The report should contain 3 section: INTRODUCTION, MAIN and CONCLUSION. The MAIN section should be {number_of_paragraphs} paragraphs long. Include a timeline of key events. The conclusion should be in bullet points format.
    """
    return prompt.format(topic=topic, number_of_paragraphs=number_of_paragraphs)


if __name__ == "__main__":
    mcp.run()