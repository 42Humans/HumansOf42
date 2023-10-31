import json
import sys
from datetime import datetime
from typing import List, TypedDict

# Define the structure of the Interview type using TypedDict


class Paragraph(TypedDict):
    text: str


class Interview(TypedDict):
    id: int
    title: str
    subtitle: str
    date: datetime
    photographer: List[str]
    interviewer: List[str]
    interviewee: List[str]
    content: List[Paragraph]


def parse_markdown_file(file_path: str) -> Interview:
    with open(file_path, 'r', encoding='utf-8') as file:
        lines = file.readlines()

        # Extracting the required elements from the markdown content
        title = lines[0].strip()
        subtitle = lines[1].strip()
        date = lines[2].strip()
        content_lines = lines[3:-3]
        # Exclude the keyword 'interviewer'
        interviewer_line = lines[-3].strip().split(' ')[1:]
        # Exclude the keyword 'photographer'
        photographer_line = lines[-2].strip().split(' ')[1:]

        # Create content paragraphs
        content = [{"text": line.strip()}
                   for line in content_lines if line.strip()]

        # Construct the Interview JSON object
        interview = Interview(
            # Assuming the file name without extension is the ID
            id=int(file_path.rstrip('.md').split('/')[-1]),
            title=title,
            subtitle=subtitle,
            date=date,
            photographer=photographer_line,
            interviewer=interviewer_line,
            interviewee=[],  # Not provided in the example
            content=content
        )

        return interview


# Check if a filename is passed as a command-line argument
if len(sys.argv) < 2:
    print("Usage: python script.py <filename>")
    sys.exit(1)

filename = sys.argv[1]

# Parse the markdown file and create the Interview JSON object
interview_json = parse_markdown_file(filename)

# Print the JSON object
# default=str to handle datetime serialization
print(json.dumps(interview_json, indent=2, default=str))
