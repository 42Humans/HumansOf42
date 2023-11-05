import re
import json

contents = []

for i in range(1, 44):
    with open(f"{i}.md") as f:
        lines = f.readlines()
        lines = map(lambda x: x.strip(), lines)
        lines = list(lines)
        for line in lines:
            print(paragraph)
